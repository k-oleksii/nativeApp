import { SafeAreaView } from 'react-native-safe-area-context';
import React, { FC, ReactNode } from 'react';
import { StyleSheet } from 'react-native';
import { EnumColors } from 'app/types';

interface Props {
  children?: ReactNode;
}
export const Layout: FC<Props> = ({ children }) => {
  return <SafeAreaView style={styles.safeArea}>{children}</SafeAreaView>;
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: EnumColors.mainBg,
  },
});
