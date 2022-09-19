import React from 'react';
import { StyleSheet, Text, SafeAreaView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { CustomThemeType } from 'src/shared/styles/colors';
import { useThemeAwareObject } from 'src/shared/styles/useThemeAware';
import { StackNavigationProp } from '@react-navigation/stack';

interface CustomDrawerContentProps { }

const CustomDrawerContent = (props: CustomDrawerContentProps) => {
    const navigation = useNavigation<StackNavigationProp<any>>();
    const styles = useThemeAwareObject(createStyles);

    return (
        <SafeAreaView style={styles.container}>
            <Text style={{ textAlign: 'center' }} children={'Drawer Navigator'} />
        </SafeAreaView>
    );
};

export default CustomDrawerContent;
const createStyles = (theme: CustomThemeType) =>
    StyleSheet.create({
        container: {
            flex: 1,
        }
    });
