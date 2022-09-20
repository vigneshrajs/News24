import React from 'react'
import { StyleProp } from 'react-native'
import { ImagesName } from '../styles/images'

//TabBar Icons
import MainUnselected from 'src/assets/images/home_unselected.svg';
import SportsUnselected from 'src/assets/images/sports_unselected.svg';
import InteractionUnselected from 'src/assets/images/interaction_unselected.svg'

//Header Icons
import SearchIcon from 'src/assets/images/icons/searchIcon.svg'
import AppLogo from 'src/assets/images/appLogo.svg'
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
    // const { themeData } = useTheme()
    // const isDark = isDarkTheme(themeData)

    const props = {
        width: width ? width : size,
        height: height ? height : size,
        style,
        fill
    }

    switch (name) {
        case ImagesName.MainUnselectedIcon:
            return <MainUnselected {...props} />
        case ImagesName.SportsUnselectedIcon:
            return <SportsUnselected {...props} />
        case ImagesName.InteractionUnselectedIcon:
            return <InteractionUnselected {...props} />
        case ImagesName.SerachIcon:
            return <SearchIcon {...props} />
        case ImagesName.MenuIcon:
            return <MenuIcon {...props} />
        case ImagesName.AppLogo:
            return <AppLogo {...props} />
        default: return null
    }
}