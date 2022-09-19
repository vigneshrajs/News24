import {
  MainScreen
} from '../components/screens';
import AppNavigator from 'src/navigation/AppNavigator';

export const Routes = {
  AppNavigator,
  MainScreen,
};

/**
 * List of all screens in the app. This is an object type with key-value pairs
 * where the key is the name of the screen and the value is its navigation
 * or route props. In many cases, this may be `undefined`
 */
export type ScreenList = {
  AppNavigator: undefined;
  MainScreen: undefined;
};

export type ScreenName = keyof undefined;

const appNavigator = 'appNavigator' as ScreenName;
const mainScreen = 'mainScreen' as ScreenName;

export const RoutesName = {
  appNavigator,
  mainScreen,
};
