import React from 'react';
import { getIcon } from 'app/helpers/getIcon.tsx';
import { EnumColors } from 'app/types';

// @ts-ignore
export const tabScreenOptions = ({ route }) => {
  const routeName = route.name;

  return {
    tabBarActiveTintColor: '#1DA1F2',
    tabBarInactiveTintColor: 'gray',
    // @ts-ignore
    tabBarIcon: ({ focused }) => {
      let iconName: string = '';
      let iconColor: string = focused ? EnumColors.blue : EnumColors.gray;

      switch (routeName) {
        case 'Home': {
          iconName = 'home';
          iconColor;
          break;
        }
        case 'Saved': {
          iconName = 'like';
          iconColor;
          break;
        }
      }

      return <>{getIcon(iconName, iconColor, 18)}</>;
    },
  };
};
