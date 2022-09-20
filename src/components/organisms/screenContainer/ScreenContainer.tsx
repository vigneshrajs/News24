import React from 'react';
import {
    StyleSheet,
    StatusBar,
    StatusBarStyle,
} from 'react-native';
import { Edge, SafeAreaView } from 'react-native-safe-area-context';
import { CustomThemeType } from 'src/shared/styles/colors';
import { useThemeAwareObject } from 'src/shared/styles/useThemeAware';
import { useTheme } from 'src/shared/styles/ThemeProvider';
import { Header } from 'src/components/molecules';
import { DrawerActions, useNavigation } from '@react-navigation/native';

export interface ScreenContainerProps {
    children: any;
    edge?: Edge[];
    barStyle?: StatusBarStyle;
    showHeader?: boolean;
    statusbarColor?: string;
}

export const ScreenContainer = ({
    children,
    edge,
    barStyle,
    showHeader = true,
    statusbarColor,
}: ScreenContainerProps) => {
    const style = useThemeAwareObject(createStyles);
    const navigation = useNavigation<any>();
    const { themeData } = useTheme();

    const statusBarBackgroundColor = statusbarColor || themeData.primaryWhite;

    const onPressRightIcon = () => {
        navigation.dispatch(DrawerActions.toggleDrawer());
    }

    return (
        <SafeAreaView
            style={style.container}
            edges={edge}>
            {showHeader && <Header onPressRightIcon={onPressRightIcon} />}
            <StatusBar
                backgroundColor={statusBarBackgroundColor}
                barStyle={barStyle}
            />
            {children}
        </SafeAreaView>
    );
};

const createStyles = (theme: CustomThemeType) => (
    StyleSheet.create({
        container: {
            flex: 1,
            backgroundColor: theme.primaryWhite,
        },
    })
);
