import { View, Text } from 'react-native';
import React from 'react';
import 'src/i18n';
import AppStackContainer from './src/navigation/AppStackContainer';
import { store, persistor } from './src/redux/store';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/es/integration/react';

const App = () => {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <AppStackContainer />
      </PersistGate>
    </Provider>
  )
}

export default App