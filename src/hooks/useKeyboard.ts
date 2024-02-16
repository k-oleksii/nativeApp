import { useEffect, useState } from 'react';
import { Animated, Keyboard } from 'react-native';

interface IKeyboard {
  duration: number;
  endCoordinates: {
    height: number;
  };
}
export const useKeyboard = () => {
  const [keyboardOpen, setKeyboardOpen] = useState<boolean>(false);
  const [keyboardHeight] = useState<Animated.Value>(new Animated.Value(0));

  useEffect(() => {
    const keyboardDidShowListener = Keyboard.addListener('keyboardDidShow', keyboardDidShow);

    const keyboardDidHideListener = Keyboard.addListener('keyboardDidHide', keyboardDidHide);

    return () => {
      keyboardDidShowListener.remove();
      keyboardDidHideListener.remove();
    };
  }, []);

  const keyboardDidShow = ({ duration, endCoordinates }: IKeyboard) => {
    setKeyboardOpen(true);

    Animated.timing(keyboardHeight, {
      duration: duration || 250,
      toValue: endCoordinates.height,
      useNativeDriver: false,
    }).start();
  };

  const keyboardDidHide = () => {
    setKeyboardOpen(false);
    Animated.timing(keyboardHeight, {
      duration: 250,
      toValue: 0,
      useNativeDriver: false,
    }).start();
  };

  return keyboardOpen;
};
