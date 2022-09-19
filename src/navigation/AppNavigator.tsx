import 'react-native-gesture-handler';
import React from 'react';
import { ScreensConstants } from '../constants/ScreenConstants';
import {
  CardStyleInterpolators,
  createStackNavigator,
  StackNavigationOptions,
} from '@react-navigation/stack';
import { MainScreen } from 'src/components/screens/MainScreen';

const defaultScreenOptions: StackNavigationOptions = {
  gestureEnabled: false,
  cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
  headerShown: false,
};


const Stack = createStackNavigator();

const hideHeader = {
  headerShown: false,
}

const AppNavigator = () => {
  return (
    <Stack.Navigator initialRouteName={ScreensConstants.MAIN_SCREEN}
      screenOptions={defaultScreenOptions}>
      <Stack.Screen
        name={ScreensConstants.TabNavigator}
        component={MainScreen}
        options={hideHeader}
      />
    </Stack.Navigator>
  );
};

export default AppNavigator;
