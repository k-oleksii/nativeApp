import { useFocusEffect, useNavigation } from '@react-navigation/native';
import { Alert, BackHandler } from 'react-native';
import { useCallback } from 'react';

export const useBackHandler = () => {
  const navigation = useNavigation();

  useFocusEffect(
    useCallback(() => {
      const backHandler = () => {
        if (navigation.canGoBack()) {
          navigation.goBack();
        } else {
          Alert.alert('Exit App', 'Are you sure you want to exit?', [
            {
              text: 'No',
              onPress: () => null,
              style: 'cancel',
            },
            { text: 'Exit', onPress: () => BackHandler.exitApp() },
          ]);
        }

        return true;
      };

      BackHandler.addEventListener('hardwareBackPress', backHandler);

      return () => {
        BackHandler.removeEventListener('hardwareBackPress', backHandler);
      };
    }, [navigation]),
  );
};
