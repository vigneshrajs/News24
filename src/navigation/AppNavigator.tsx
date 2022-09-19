import 'react-native-gesture-handler';
import React from 'react';
import { ScreensConstants } from '../constants/ScreenConstants';
import { createStackNavigator } from '@react-navigation/stack';
import TabNavigator from './TabNavigator';

const Stack = createStackNavigator();

const hideHeader = {
  headerShown: false,
}

const AppNavigator = () => {
  return (
    <Stack.Navigator initialRouteName={ScreensConstants.MAIN_SCREEN}
      screenOptions={({ navigation }) => {
        return {
          detachPreviousScreen: !navigation.isFocused(),
        }
      }}>
      <Stack.Screen
        name={ScreensConstants.TabNavigator}
        component={TabNavigator}
        options={hideHeader}
      />
    </Stack.Navigator>
  );
};

export default AppNavigator;
