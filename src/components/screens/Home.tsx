import { View, Text, StyleSheet } from 'react-native';
import React from 'react';
import { TranslateConstants, TranslateKey } from 'src/constants';

export const Home = () => {
    const CONST_HOME = TranslateConstants({ key: TranslateKey.HOME })
    return (
        <View style={style.container}>
            <Text style={{ textAlign: 'center' }} children={CONST_HOME} />
        </View>
    )
};

const style = StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        height: '100%',
    }
})