import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { SavedScreen } from 'app/screens/SavedScreen';
import { StackNavigation } from 'app/navigation/Stack';

const Drawer = createDrawerNavigator();

export const DrawerNavigation = () => {
  return (
    <Drawer.Navigator initialRouteName="Home">
      <Drawer.Screen name="Home" component={StackNavigation} />
      <Drawer.Screen name="Saved" component={SavedScreen} />
    </Drawer.Navigator>
  );
};
