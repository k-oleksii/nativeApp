import React, { FC } from 'react';
import { Pressable, StyleSheet } from 'react-native';
import { getIcon } from 'app/helpers/getIcon.tsx';
import { EnumColors, EnumIcons } from 'app/types';

interface IButton {
  iconName: keyof typeof EnumIcons;
  circle?: boolean;
  onPress: () => void;
}

export const ButtonIcon: FC<IButton> = ({ iconName, onPress, circle }) => {
  const icon = getIcon(EnumIcons[iconName], EnumColors.white);

  return (
    <Pressable
      style={({ pressed }) => [
        styles.button,
        circle ? { borderRadius: 100 } : null,
        pressed ? styles.buttonRipple : null,
      ]}
      onPress={onPress}>
      {icon}
    </Pressable>
  );
};

const styles = StyleSheet.create({
  button: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: 28,
    height: 28,
    backgroundColor: EnumColors.blue,
    borderRadius: 6,
  },
  buttonRipple: {
    backgroundColor: EnumColors.darkBlue,
  },
});
