import { SafeAreaView, StyleSheet } from 'react-native'
import React from 'react'

type ScreenContainerProps = {
    children: any
}

export const ScreenContainer = ({
    children,
}: ScreenContainerProps) => {
    return (
        <SafeAreaView style={style.container}>
            {children}
        </SafeAreaView>
    )
}

const style = StyleSheet.create({
    container: {
        flex: 1,
    }
})