import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { tabScreenOptions } from 'app/navigation/BottomTabs/options.tsx';
import { SavedScreen } from 'app/screens/SavedScreen';

import { HomeScreen } from 'app/screens/HomeScreen';
import { ProfileScreen } from 'app/screens/ProfileScreen';

const Tab = createBottomTabNavigator();
export const BottomTabsNavigation = () => {
  return (
    <Tab.Navigator screenOptions={tabScreenOptions}>
      <Tab.Screen name="Home" component={HomeScreen} options={{ headerShown: false }} />
      <Tab.Screen name="Saved" component={SavedScreen} options={{ headerShown: false }} />
      <Tab.Screen name="Profile" component={ProfileScreen} options={{ headerShown: true }} />
    </Tab.Navigator>
  );
};
