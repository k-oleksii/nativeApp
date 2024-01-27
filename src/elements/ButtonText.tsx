import React, { FC, useState } from 'react';
import { Pressable, StyleSheet, Text } from 'react-native';
import { getIcon } from 'app/helpers/getIcon.tsx';
import { EnumColors, EnumIcons } from 'app/types';

interface IButton {
  iconName: keyof typeof EnumIcons;
  text: string;
  onPress: () => void;
}

export const ButtonText: FC<IButton> = ({ iconName, onPress, text }) => {
  const [isPressed, setPressed] = useState(false);
  const colorIcon = isPressed ? EnumColors.blue : EnumColors.gray;
  const icon = getIcon(EnumIcons[iconName], colorIcon);

  const handlePress = (pressed: boolean) => {
    setPressed(pressed);
  };

  return (
    <Pressable
      style={styles.button}
      onPress={onPress}
      onPressIn={() => handlePress(!isPressed)}
      onPressOut={() => handlePress(!isPressed)}>
      {icon}
      <Text style={[styles.buttonText, isPressed ? styles.buttonTextRipple : null]}>{text}</Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  button: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
    paddingVertical: 5,
  },
  buttonText: {
    fontSize: 16,
    fontWeight: '500',
  },
  buttonTextRipple: {
    color: EnumColors.blue,
  },
});
