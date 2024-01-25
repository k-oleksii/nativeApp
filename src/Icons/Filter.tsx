import React from 'react';
import Svg, { Path } from 'react-native-svg';
interface IconProps {
  color?: string;
}
export const Filter = (props: IconProps) => {
  const iconColor = props.color;

  return (
    <Svg width="16" height="16" viewBox="0 0 24 24" fill="none">
      <Path
        d="M11 8H21M11 8C11 9.65685 9.65685 11 8 11C6.34315 11 5 9.65685 5 8M11 8C11 6.34315 9.65685 5 8 5C6.34315 5 5 6.34315 5 8M5 8H3M13 16H3M13 16C13 14.3431 14.3431 13 16 13C17.6569 13 19 14.3431 19 16M13 16C13 17.6569 14.3431 19 16 19C17.6569 19 19 17.6569 19 16M19 16H21"
        stroke={iconColor}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};
