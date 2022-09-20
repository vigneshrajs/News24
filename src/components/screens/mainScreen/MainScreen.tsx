import { Text } from 'react-native';
import React from 'react';
import { TranslateConstants, TranslateKey } from 'src/constants';
import { ScreenContainer } from '../screenContainer/ScreenContainer';

export const MainScreen = () => {
    const CONST_HOME = TranslateConstants({ key: TranslateKey.HOME })
    return (
        <ScreenContainer>
            <Text style={{ textAlign: 'center' }} children={CONST_HOME} />
        </ScreenContainer>
    )
};

