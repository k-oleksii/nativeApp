import { FC } from 'react';

export enum EnumColors {
  mainBg = '#fcfcfc',
  black = '#000000',
}

export enum EnumIcons {
  bag = 'bag',
}

export interface IIcons {
  [key: string]: FC;
}
