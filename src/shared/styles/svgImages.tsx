import React from 'react'
import { StyleProp } from 'react-native'
import { useTheme } from 'src/shared/styles/ThemeProvider';
import { DARK_THEME_ID } from './colors'
import { ImagesName } from './images'

//Header Icons
import SearchIcon from 'src/assets/images/icons/searchIcon.svg'
import AppLogo from 'src/assets/images/icons/appLogo.svg'
import MenuIcon from 'src/assets/images/icons/menuIcon.svg'

export interface GetSVGProps {
    name: ImagesName,
    size?: number,
    style?: StyleProp<any>,
    fill?: string,
    width?: number,
    height?: number,
}

export const getSvgImages = ({ name, size, style, fill, width, height }: GetSVGProps) => {
    const { themeData } = useTheme()
    const isDark = themeData?.id === DARK_THEME_ID
    const props = {
        width: width ? width : size,
        height: height ? height : size,
        style,
        fill
    }
    switch (name) {
        case ImagesName.SerachIcon:
            return isDark ? <SearchIcon {...props} /> : <SearchIcon {...props} />
        case ImagesName.MenuIcon:
            return isDark ? <MenuIcon {...props} /> : <MenuIcon {...props} />
        case ImagesName.AppLogo:
            return isDark ? <AppLogo {...props} /> : <AppLogo {...props} />
        default: return null
    }
}