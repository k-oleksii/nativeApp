import React from 'react';
import Svg, { Path } from 'react-native-svg';
interface IconProps {
  color?: string;
}
export const Search = (props: IconProps) => {
  const iconColor = props.color;

  return (
    <Svg width="14" height="14" viewBox="0 0 20 20" fill="none">
      <Path
        d="M18.371 15.378l-3.038-3.038-2.337-.966a6.558 6.558 0 0 0 1.194-3.78A6.602 6.602 0 0 0 7.595 1 6.602 6.602 0 0 0 1 7.595a6.602 6.602 0 0 0 6.595 6.595 6.558 6.558 0 0 0 3.807-1.214l.963 2.331 3.038 3.038a2.099 2.099 0 0 0 2.968-2.967zM2.2 7.595a5.402 5.402 0 0 1 5.396-5.396 5.402 5.402 0 0 1 5.396 5.396 5.402 5.402 0 0 1-5.396 5.396 5.402 5.402 0 0 1-5.396-5.396zm15.324 9.902a.9.9 0 0 1-1.272 0l-2.869-2.869-.895-2.167 2.167.896 2.87 2.869a.9.9 0 0 1 0 1.271z"
        fill={iconColor}
      />
    </Svg>
  );
};
