/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';

import { SafeAreaProvider } from 'react-native-safe-area-context';
import { HomeScreen } from 'app/screens/HomeScreen';

function App(): React.JSX.Element {
  return (
    <SafeAreaProvider>
      <HomeScreen />
    </SafeAreaProvider>
  );
}

export default App;
