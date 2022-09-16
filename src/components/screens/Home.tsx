import { View, Text } from 'react-native';
import React from 'react';
import { TranslateConstants, TranslateKey } from '../../constants';

export const Home = () => {
    const CONST_HOME = TranslateConstants({ key: TranslateKey.HOME })
    return (
        <View style={{
            justifyContent: 'center',
            alignItems: 'center',
            width: '100%',
            height: '100%',
        }}>
            <Text style={{
                textAlign: 'center'
            }}>
                {CONST_HOME}
            </Text>
        </View>
    )
};