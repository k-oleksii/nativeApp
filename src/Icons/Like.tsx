import React from 'react';
import Svg, { Path } from 'react-native-svg';
interface IconProps {
  color?: string;
}
export const Like = (props: IconProps) => {
  const iconColor = props.color;

  return (
    <Svg width="14" height="14" viewBox="0 0 18 18" fill="none">
      <Path
        d="M9.465 15.6076C9.21 15.6976 8.79 15.6976 8.535 15.6076C6.36 14.8651 1.5 11.7676 1.5 6.51757C1.5 4.20007 3.3675 2.32507 5.67 2.32507C7.035 2.32507 8.2425 2.98507 9 4.00507C9.7575 2.98507 10.9725 2.32507 12.33 2.32507C14.6325 2.32507 16.5 4.20007 16.5 6.51757C16.5 11.7676 11.64 14.8651 9.465 15.6076Z"
        stroke={iconColor}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};
