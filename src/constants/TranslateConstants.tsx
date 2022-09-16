import React from 'react'
import { useTranslation } from 'react-i18next'

export enum TranslateKey {
    HOME,
}

export const TranslateConstants = ({
    key
}: { key: TranslateKey }) => {
    const [t] = useTranslation()

    switch (key) {
        case TranslateKey.HOME:
            return t('home')
        default: return ''
    }
}
