import React from 'react';
import { cloneElement } from 'react';

// Get icons from a set and return as a component
import { icons } from 'app/Icons';

export const getIcon = (iconName: string, iconColor?: string, iconSize?: number) => {
  const IconComponent = icons[iconName];

  if (IconComponent) {
    return cloneElement(<IconComponent />, { color: iconColor, size: iconSize });
  }

  return null;
};
