import React from 'react'
import { useTranslation } from 'react-i18next'

export enum TranslateKey {
    HOME,
    TAB_MAIN,
    TAB_SPORTS,
    TAB_INTERACTION,
}

export const TranslateConstants = ({
    key
}: { key: TranslateKey }) => {
    const [t] = useTranslation()

    switch (key) {
        case TranslateKey.HOME:
            return t('home')
        case TranslateKey.TAB_MAIN:
            return t('tabConstant.main')
        case TranslateKey.TAB_SPORTS:
            return t('tabConstant.sports')
        case TranslateKey.TAB_INTERACTION:
            return t('tabConstant.interaction')
        default: return ''
    }
}
