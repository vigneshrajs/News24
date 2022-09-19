import * as React from 'react';
import { StyleSheet, TouchableOpacity } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { useNavigation, DrawerActions, useNavigationState } from '@react-navigation/native';
import TabNavigator from './TabNavigator';
import { colors } from '../shared/styles/colors';
import CustomDrawerContent from './CustomDrawerContent';
import { useThemeAwareObject } from 'src/shared/styles/useThemeAware'
import { CustomThemeType } from 'src/shared/styles/colors'
import { useTheme } from 'src/shared/styles/ThemeProvider';
import { isTab, screenWidth } from 'src/shared/utils';

const DrawerNavigator = () => {
    const navigation = useNavigation();
    const style = useThemeAwareObject(customStyle)
    const { themeData } = useTheme();

    const Search = () => (
        <TouchableOpacity onPress={() => console.log('pressed')}>
        </TouchableOpacity>
    )

    const Menu = () => (
        <TouchableOpacity onPress={
            () => {
                navigation.dispatch(DrawerActions.toggleDrawer());
            }
        }>
        </TouchableOpacity>
    )

    const Drawer = createDrawerNavigator();
    return (
        <Drawer.Navigator
            drawerContent={(props) => <CustomDrawerContent {...props} />}
            screenOptions={{
                headerStyle: style.container,
                headerShown: false,
                headerLeft: Menu,
                headerTitle: Search,
                headerTitleAlign: 'center',
                headerRight: Search,
                drawerStyle: {
                    width: '100%',
                    backgroundColor: colors.lightGray
                }
            }}>
            <Drawer.Screen name={'drawerRoot'} component={TabNavigator} />
        </Drawer.Navigator>
    );
};

export default DrawerNavigator;

const customStyle = (theme: CustomThemeType) => {
    const headerStyles = StyleSheet.create({
        container: {
            backgroundColor: colors.athensGray,
            shadowColor: colors.transparent,
        },
        search: {
            height: 19,
            width: 18,
            marginHorizontal: isTab ? 0.02 * screenWidth : 0.04 * screenWidth,
        },
        logo: {
            height: 32,
            width: 135,
            alignItems: 'center',
        },
        menu: {
            height: 16,
            width: 19,
            marginHorizontal: isTab ? 0.02 * screenWidth : 0.04 * screenWidth,
        },
    });
    return headerStyles
}
