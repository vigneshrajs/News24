import { Text, StyleSheet, SafeAreaView, View } from 'react-native';
import React from 'react';
import { TranslateConstants, TranslateKey } from 'src/constants';
import { ScreenContainer } from 'src/components/organisms';

export const MainScreen = () => {
    const CONST_HOME = TranslateConstants({ key: TranslateKey.HOME })
    return (
        <ScreenContainer >
            <View style={style.contentContainer}>
                <Text style={{ textAlign: 'center' }} children={CONST_HOME} />
            </View>
        </ScreenContainer>
    )
};

const style = StyleSheet.create({
    contentContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        height: '100%',
        backgroundColor: 'blue',
    }
})