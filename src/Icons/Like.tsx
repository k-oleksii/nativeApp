import React from 'react';
import Svg, { Path } from 'react-native-svg';
interface IconProps {
  color?: string;
  size?: number;
}
export const Like = (props: IconProps) => {
  const iconColor = props.color;
  const iconSize = props.size || 14;

  return (
    <Svg width={iconSize} height={iconSize} viewBox="0 0 22 20" fill="none">
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M10.9932 3.13581C8.9938 0.7984 5.65975 0.169643 3.15469 2.31001C0.649644 4.45038 0.296968 8.02898 2.2642 10.5604C3.75009 12.4724 7.97129 16.311 9.94801 18.0749C10.3114 18.3991 10.4931 18.5613 10.7058 18.6251C10.8905 18.6805 11.0958 18.6805 11.2805 18.6251C11.4932 18.5613 11.6749 18.3991 12.0383 18.0749C14.015 16.311 18.2362 12.4724 19.7221 10.5604C21.6893 8.02898 21.3797 4.42787 18.8316 2.31001C16.2835 0.192157 12.9925 0.7984 10.9932 3.13581Z"
        stroke={iconColor}
        stroke-opacity="0.6"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};
