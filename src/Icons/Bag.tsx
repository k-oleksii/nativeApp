import React from 'react';
import Svg, { Path } from 'react-native-svg';

interface IconProps {
  color?: string;
}
export const Bag = (props: IconProps) => {
  const iconColor = props.color;

  return (
    <Svg width="16" height="16" viewBox="0 0 24 24" fill="none">
      <Path
        d="M7.5 7.67V6.7c0-2.25 1.81-4.46 4.06-4.67a4.5 4.5 0 0 1 4.94 4.48v1.38M3.81 16.56l.23 1.87C4.26 20.39 4.98 22 9 22h6c4.02 0 4.74-1.61 4.95-3.57l.75-6C20.97 9.99 20.27 8 16 8H8c-4.27 0-4.97 1.99-4.7 4.43"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
        stroke={iconColor}
      />
      <Path d="M15.494 12h.01M8.494 12h.01" strokeLinecap="round" strokeLinejoin="round" stroke={iconColor} />
    </Svg>
  );
};
