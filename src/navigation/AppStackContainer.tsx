import React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import {
  CardStyleInterpolators,
  createStackNavigator,
  StackNavigationOptions,
} from '@react-navigation/stack';
import { ScreenList, Routes } from 'src/navigation';
import { ScreensConstants } from 'src/constants';
import { Label } from 'src/components/atoms';

const Stack = createStackNavigator<ScreenList>();

const defaultScreenOptions: StackNavigationOptions = {
  gestureEnabled: false,
  cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
  headerShown: false,
};

const AppStackContainer = () => {
  return (
    <NavigationContainer>
      <Label children={'Showing ::::::'}/>
      <Stack.Navigator
        screenOptions={defaultScreenOptions}>
        <Stack.Screen
          name={ScreensConstants.MAIN_SCREEN}
          component={Routes.MainScreen}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
export default AppStackContainer;
