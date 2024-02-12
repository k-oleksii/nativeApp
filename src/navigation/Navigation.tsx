import React from 'react';
import { NavigationContainer } from '@react-navigation/native';

import { StackNavigation } from 'app/navigation/Stack';

export const Navigation = () => {
  return (
    <NavigationContainer>
      <StackNavigation />
    </NavigationContainer>
  );
};
