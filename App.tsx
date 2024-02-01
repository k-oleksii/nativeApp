/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';

import { SafeAreaProvider } from 'react-native-safe-area-context';
import { HomeScreen } from 'app/screens/HomeScreen';
import { Provider } from 'react-redux';
import store from 'app/lib/redux/init/store.ts';

function App(): React.JSX.Element {
  return (
    <Provider store={store}>
      <SafeAreaProvider>
        <HomeScreen />
      </SafeAreaProvider>
    </Provider>
  );
}

export default App;
