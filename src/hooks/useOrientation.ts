import { Dimensions } from 'react-native';
import { useEffect, useState } from 'react';

export const useOrientation = () => {
  const [orientation, setOrientation] = useState<null | string>(null);

  useEffect(() => {
    const updateOrientation = () => {
      const { width, height } = Dimensions.get('window');
      if (height > width) {
        setOrientation('portrait');
      } else {
        setOrientation('landscape');
      }
    };

    const dimensionsSubscription = Dimensions.addEventListener('change', updateOrientation);

    updateOrientation();

    return () => {
      dimensionsSubscription.remove();
    };
  }, []);

  return orientation;
};
