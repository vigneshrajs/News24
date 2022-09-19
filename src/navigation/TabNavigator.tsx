import React, { FunctionComponent } from 'react';
import { View, TouchableOpacity, StyleSheet } from 'react-native';
import {
    createBottomTabNavigator,
    BottomTabBarProps,
} from '@react-navigation/bottom-tabs';
import { TabConstants } from '../constants/TabConstants';
import { Label } from '../components/atoms';
import { ScreenName } from '.';
import { colors, CustomThemeType } from '../shared/styles/colors';
import { useTheme } from 'src/shared/styles/ThemeProvider';
import { isIOS, isTab, normalize } from 'src/shared/utils';
import { useThemeAwareObject } from 'src/shared/styles/useThemeAware';
import AppNavigator from './AppNavigator';

const Tab = createBottomTabNavigator<ScreenName>();

const TabNavigator = () => {
    return (
        <Tab.Navigator screenOptions={{ headerShown: false }} initialRouteName={TabConstants.MainScreen} tabBar={props => <CustomTabBar {...props} />}>
            <Tab.Screen name={TabConstants.MainScreen} component={AppNavigator} />
        </Tab.Navigator>
    );
};

const CustomTabBar: FunctionComponent<BottomTabBarProps> = ({
    state,
    navigation,
}) => {
    const { themeData } = useTheme()
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

                return (
                    <View key={index}>
                        <TouchableOpacity
                            key={index}
                            onPress={() => onPress()}>
                            <Label color={isFocused ? colors.greenishBlue : colors.lightToneGreen}
                                labelType={'label10'}
                                children={route.name}
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
            height: isTab ? 93 : 80,
            flexDirection: "row",
            justifyContent: "space-evenly",
            paddingTop: isTab ? 20 : 15,
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
            width: 20,
            height: 20
        },
        favoriteIcon: {
            width: normalize(12),
            height: normalize(17),
            marginTop: isIOS ? normalize(2) : normalize(5)
        },
        newsIcon: {
            width: normalize(31),
            height: normalize(22),
        },
        mostReadIcon: {
            width: normalize(17),
            height: normalize(22)
        },
        sectionsIcon: {
            width: normalize(20),
            height: normalize(20)
        },
        latestNewsIcon: {
            width: normalize(18),
            height: normalize(21)
        },
        newsDownloadIconActive: {
            tintColor: colors.greenishBlue
        },
        newsDownloadIcon: {
            tintColor: colors.lightToneGreen
        },
        myNewsIconStyle: {
            width: normalize(26),
            height: normalize(22)
        }
    })
    return TabNavigatorStyle;
}

export default TabNavigator;