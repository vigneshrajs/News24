import React, { useEffect } from 'react';
// import { useAppCommon } from 'src/hooks'; 
import { DEFAULT_LIGHT_THEME, CustomThemeType, DEFAULT_DARK_THEME, LIGHT_THEME_ID, DARK_THEME_ID } from './colors';

interface ProvidedValue {
  themeData: CustomThemeType;
  toggleTheme: () => void;
}


const Context = React.createContext<ProvidedValue>({
  themeData: DEFAULT_LIGHT_THEME,
  toggleTheme: () => {
    console.log('ThemeProvider is not rendered!')
  }
})

interface Props {
  initial: CustomThemeType;
  children?: React.ReactNode;
}
export const ThemeProvider = React.memo<Props>((props) => {
  // const { theme } = useAppCommon()

  const [themeData, setTheme] = React.useState<CustomThemeType>(props.initial)

  //TODO Need to implement
  // useEffect(() => {
  //   if (theme == Theme.DARK) {
  //     setTheme(DEFAULT_DARK_THEME)
  //   } else if (theme == Theme.LIGHT) {
  //     setTheme(DEFAULT_LIGHT_THEME)
  //   }
  // }, [theme])


  const ToggleThemeCallback = React.useCallback(() => {
    setTheme((currentTheme) => {
      if (currentTheme.id === LIGHT_THEME_ID) {
        return DEFAULT_DARK_THEME
      }
      if (currentTheme.id === DARK_THEME_ID) {
        return DEFAULT_LIGHT_THEME
      }
      return currentTheme
    })
  }, [])


  const MemoizedValue = React.useMemo(() => {
    const value: ProvidedValue = {
      themeData: themeData,
      toggleTheme: ToggleThemeCallback,
    };
    return value;
  }, [themeData, ToggleThemeCallback]);

  return (
    <Context.Provider value={MemoizedValue}>
      {props.children}
    </Context.Provider>
  )
})


export const useTheme = () => React.useContext(Context);