import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { IntroScreen } from 'app/screens/IntroScreen';
import { BottomTabsNavigation } from 'app/navigation/BottomTabs';
import { ProductScreen } from 'app/screens/ProductScreen';
import { PopularScreen } from 'app/screens/PopularScreen';
import React from 'react';

const Stack = createNativeStackNavigator();
export const StackNavigation = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Intro" component={IntroScreen} options={{ headerShown: false }} />
      <Stack.Screen
        name="Main"
        component={BottomTabsNavigation}
        options={{ headerShown: false, animation: 'slide_from_right' }}
      />
      <Stack.Screen
        name="Details"
        // @ts-ignore
        component={ProductScreen}
        options={{ headerShown: true, animation: 'slide_from_right' }}
      />
      <Stack.Screen
        name="Popular"
        component={PopularScreen}
        options={{ headerShown: false, presentation: 'transparentModal' }}
      />
    </Stack.Navigator>
  );
};
