import { Text, StyleSheet, SafeAreaView, Alert } from 'react-native';
import React from 'react';
import { TranslateConstants, TranslateKey } from 'src/constants';

export const MainScreen = () => {
    const CONST_HOME = TranslateConstants({ key: TranslateKey.HOME })
    return (
        <SafeAreaView style={style.container}>
            <Text style={{ textAlign: 'center' }} children={CONST_HOME} />
        </SafeAreaView>
    )
};

const style = StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        height: '100%',
        backgroundColor: 'blue',
    }
})