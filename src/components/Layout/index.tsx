import { SafeAreaView } from 'react-native-safe-area-context';
import React, { FC, ReactNode } from 'react';
import { StyleSheet } from 'react-native';

import { EnumColors } from 'app/types';
import { useBackHandler } from 'app/hooks';

interface Props {
  children?: ReactNode;
}
export const Layout: FC<Props> = ({ children }) => {
  useBackHandler();

  return <SafeAreaView style={styles.safeArea}>{children}</SafeAreaView>;
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: EnumColors.mainBg,
  },
});
