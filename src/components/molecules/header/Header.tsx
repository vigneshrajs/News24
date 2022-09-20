import React, { FunctionComponent } from 'react';
import { TouchableOpacity, View, StyleSheet } from 'react-native';
import { useThemeAwareObject } from 'src/shared/styles/useThemeAware';
import { CustomThemeType, colors } from 'src/shared/styles/colors';
import { getSvgImages } from 'src/shared/styles/svgImages';
import { ImagesName } from 'src/shared/styles';

export interface HeaderProps {
    headerRightIconTestId?: string;
    headerLeftIconTestId?: string;
    onPressRightIcon?: () => void;
    onPressLeftIcon?: () => void;
}

export const Header: FunctionComponent<HeaderProps> = ({
    headerRightIconTestId,
    headerLeftIconTestId,
    onPressRightIcon,
    onPressLeftIcon,
}) => {

    const styles = useThemeAwareObject(createStyles);

    const renderLeftComponent = () => {
        return (
            <TouchableOpacity testID={headerLeftIconTestId} accessibilityLabel={headerLeftIconTestId} onPress={onPressLeftIcon}>
                <View style={styles.itemContainer}>
                    {getSvgImages({
                        name: ImagesName.SerachIcon,
                        width: 20,
                        height: 20,
                        fill: colors.black
                    })}
                </View>
            </TouchableOpacity>
        );
    };

    const renderRightComponent = () => {
        return (
            <TouchableOpacity testID={headerRightIconTestId} accessibilityLabel={headerRightIconTestId} onPress={onPressRightIcon}>
                <View style={styles.rightItemContainer}>
                    {getSvgImages({
                        name: ImagesName.MenuIcon,
                        width: 25,
                        height: 18,
                    })}
                </View>
            </TouchableOpacity>
        );
    };

    return (
        <View style={styles.containerStyle}>
            {renderRightComponent()}
            <View style={styles.titleContainerWrapper}>
                {getSvgImages({
                    name: ImagesName.AppLogo,
                    width: 104,
                    height: 42,
                })}
            </View>
            {renderLeftComponent()}
        </View>
    );
};

const createStyles = (theme: CustomThemeType) =>
    StyleSheet.create({
        containerStyle: {
            backgroundColor: colors.white,
            height: 55,
            paddingHorizontal: 20,
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
        },
        titleContainerWrapper: {
            flex: 1,
            alignContent: 'center',
            alignItems: 'center',
            width: '100%',
        },
        logo: {
            height: 30,
            width: 140,
            alignItems: 'center',
        },
        itemContainer: {
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'flex-end',
        },
        rightItemContainer: {
            flexDirection: 'row',
            alignItems: 'center',
        },
    })