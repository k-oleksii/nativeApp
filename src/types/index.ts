import { FC } from 'react';
import { ImageSourcePropType } from 'react-native';

export enum EnumColors {
  mainBg = '#fcfcfc',
  white = '#fff',
  black = '#222',
  gray = '#4f5663',
  pink = '#fa5d5d',
  blue = '#54a5da',
}

export enum EnumIcons {
  bag = 'bag',
  like = 'like',
}

export interface IIcons {
  [key: string]: FC;
}

export interface ICard {
  id: number | string;
  isNew: boolean;
  title: string;
  caption: string;
  price: number;
  oldPrice?: number;
  img: ImageSourcePropType;
}
