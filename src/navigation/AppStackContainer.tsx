import React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import DrawerNavigator from './DrawerNavigator';
import { SafeAreaProvider } from 'react-native-safe-area-context';


const AppStackContainer = () => {
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <DrawerNavigator />
      </NavigationContainer>
    </SafeAreaProvider>
  );
};
export default AppStackContainer;
