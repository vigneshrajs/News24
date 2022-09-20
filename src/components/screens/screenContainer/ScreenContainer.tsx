import { SafeAreaView, StyleSheet } from 'react-native';
import React from 'react';
import { Header } from 'src/components/molecules';
import { DrawerActions, useNavigation } from '@react-navigation/native';
import { colors } from 'src/shared/styles/colors';

type ScreenContainerProps = {
    children: any,
    showHeader?: boolean;
}

export const ScreenContainer = ({
    children,
    showHeader = true,
}: ScreenContainerProps) => {
    const navigation = useNavigation<any>();

    const onPressRightIcon = () => {
        navigation.dispatch(DrawerActions.toggleDrawer());
    }

    return (
        <SafeAreaView style={style.container}>
            {showHeader && <Header onPressRightIcon={onPressRightIcon} />}
            {children}
        </SafeAreaView>
    )
}

const style = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.white
    }
})