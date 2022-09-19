import { View, Text } from 'react-native';
import React from 'react';
import 'src/i18n';
import { Home } from './src/components/screens';
import { store, persistor } from './src/redux/store';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/es/integration/react';

const App = () => {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <View>
          <Home />
        </View>
      </PersistGate>
    </Provider>
  )
}

export default App