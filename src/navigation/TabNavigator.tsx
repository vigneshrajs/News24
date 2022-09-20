import React, { FunctionComponent } from 'react';
import { View, TouchableOpacity, StyleSheet } from 'react-native';
import {
    createBottomTabNavigator,
    BottomTabBarProps,
} from '@react-navigation/bottom-tabs';
import { Label } from '../components/atoms';
import { ScreenName } from '.';
import { colors, CustomThemeType } from '../shared/styles/colors';
import { useTheme } from 'src/shared/styles/ThemeProvider';
import { isTab, normalize } from 'src/shared/utils';
import { useThemeAwareObject } from 'src/shared/styles/useThemeAware';
import { getSvgImages, ImagesName } from 'src/shared/styles';
import { MainScreen } from 'src/components/screens/mainScreen/MainScreen'
import { SportsScreen } from 'src/components/screens/sportsScreen/SportsScreen'
import { InteractionScreen } from 'src/components/screens/interaction/InteractionScreen'
import { TranslateConstants, TranslateKey } from 'src/constants';

const Tab = createBottomTabNavigator<ScreenName>();

const useTabHooks = () => {
    const CONST_MAIN = TranslateConstants({ key: TranslateKey.TAB_MAIN });
    const CONST_SPORTS = TranslateConstants({ key: TranslateKey.TAB_SPORTS });
    const CONST_INTERACTION = TranslateConstants({ key: TranslateKey.TAB_INTERACTION });

    const tabConstants = {
        CONST_MAIN,
        CONST_SPORTS,
        CONST_INTERACTION,
    }

    return {
        tabConstants
    }
}

const TabNavigator = () => {
    const { tabConstants } = useTabHooks();

    return (
        <Tab.Navigator screenOptions={{ headerShown: false }} initialRouteName={tabConstants.CONST_MAIN} tabBar={props => <CustomTabBar {...props} />}>
            <Tab.Screen name={tabConstants.CONST_MAIN} component={MainScreen} />
            <Tab.Screen name={tabConstants.CONST_SPORTS} component={SportsScreen} />
            <Tab.Screen name={tabConstants.CONST_INTERACTION} component={InteractionScreen} />
        </Tab.Navigator>
    );
};

const CustomTabBar: FunctionComponent<BottomTabBarProps> = ({
    state,
    navigation,
}) => {
    const { themeData } = useTheme();
    const { tabConstants } = useTabHooks();

    const style = useThemeAwareObject(customStyle);
    return (
        <View style={[style.bottomBar, { backgroundColor: themeData.primaryWhite }]}>
            {state.routes.map((route, index) => {
                const isFocused = state.index === index;
                const onPress = async () => {

                    if (!isFocused) {
                        navigation.navigate(route.name);
                    }
                };

                const getImageName = (): ImagesName => {
                    let ImageName: ImagesName = ImagesName.MainUnselectedIcon;
                    switch (route.name) {
                        case tabConstants.CONST_MAIN:
                            ImageName = isFocused ? ImagesName.MainUnselectedIcon : ImagesName.MainUnselectedIcon
                            break;
                        case tabConstants.CONST_SPORTS:
                            ImageName = isFocused ? ImagesName.SportsUnselectedIcon : ImagesName.SportsUnselectedIcon
                            break;
                        case tabConstants.CONST_INTERACTION:
                            ImageName = isFocused ? ImagesName.InteractionUnselectedIcon : ImagesName.InteractionUnselectedIcon
                            break;
                    }
                    return ImageName;
                }

                const getIconStyle = (): any => {
                    let iconStyle: any = style.tabIcon;
                    switch (route.name) {
                        case tabConstants.CONST_MAIN:
                            iconStyle = style.homeIcon
                            break;
                    }
                    return iconStyle;
                }

                const iconStyle = getIconStyle();
                return (
                    <View key={index}>
                        <TouchableOpacity
                            key={index}
                            style={{ alignItems: 'center' }}
                            onPress={() => onPress()}>
                            <View style={style.tabIconContainer}>
                                {(getSvgImages({
                                    name: getImageName(),
                                    width: iconStyle.width,
                                    height: iconStyle.height,
                                    style: iconStyle
                                }))}
                            </View>
                            <Label color={isFocused ? colors.greenishBlue : colors.lightToneGreen}
                                children={route.name}
                                style={style.title}
                            />
                        </TouchableOpacity>
                    </View>
                );
            })}
        </View>
    );
};

const customStyle = (theme: CustomThemeType) => {
    const TabNavigatorStyle = StyleSheet.create({
        bottomBar: {
            width: "100%",
            height: 97,
            flexDirection: "row",
            justifyContent: "space-evenly",
            paddingTop: 27,
            borderColor: "transparent",
            shadowColor: theme.primaryBlack,
            shadowOffset: { width: 0, height: 1 },
            shadowOpacity: .1,
            shadowRadius: 4,
            elevation: 15,
        },
        tabIconContainer: {
            height: isTab ? 29 : 24,
            alignItems: "center",
            alignSelf: "center",
            marginBottom: normalize(2),
        },
        tabIcon: {
            width: 21,
            height: 21,
        },
        homeIcon: {
            width: normalize(20),
            height: normalize(21)
        },
        title: {
            fontSize: 12,
            lineHeight: 30,
        },
    })
    return TabNavigatorStyle;
}

export default TabNavigator;