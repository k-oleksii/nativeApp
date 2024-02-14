import React from 'react';
import Svg, { Path } from 'react-native-svg';

interface IconProps {
  color?: string;
  size?: number;
}
export const Home = (props: IconProps) => {
  const iconColor = props.color;
  const iconSize = props.size || 14;

  return (
    <Svg width={iconSize} height={iconSize} viewBox="0 0 25 24" fill="none">
      <Path
        d="M8.5 17H16.5M11.5177 2.76401L4.73539 8.03914C4.28202 8.39176 4.05534 8.56807 3.89203 8.78887C3.74737 8.98446 3.6396 9.2048 3.57403 9.43907C3.5 9.70353 3.5 9.99071 3.5 10.5651V17.8C3.5 18.9201 3.5 19.4802 3.71799 19.908C3.90973 20.2843 4.21569 20.5903 4.59202 20.782C5.01984 21 5.57989 21 6.7 21H18.3C19.4201 21 19.9802 21 20.408 20.782C20.7843 20.5903 21.0903 20.2843 21.282 19.908C21.5 19.4802 21.5 18.9201 21.5 17.8V10.5651C21.5 9.99071 21.5 9.70353 21.426 9.43907C21.3604 9.2048 21.2526 8.98446 21.108 8.78887C20.9447 8.56807 20.718 8.39176 20.2646 8.03914L13.4823 2.76401C13.131 2.49076 12.9553 2.35413 12.7613 2.30162C12.5902 2.25528 12.4098 2.25528 12.2387 2.30162C12.0447 2.35413 11.869 2.49076 11.5177 2.76401Z"
        stroke={iconColor}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};
