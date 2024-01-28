import React, { FC, ReactNode } from 'react';
import { Modal as RNModal, Pressable, StyleSheet, View } from 'react-native';
import { EnumColors, EnumIcons } from 'app/types';
import { getIcon } from 'app/helpers/getIcon.tsx';
interface Props {
  modalVisible: boolean;
  modalCloseBtn?: boolean;
  modalPositionBottom?: boolean;
  toggleModal: () => void;
  children?: ReactNode;
}
export const Modal: FC<Props> = ({ children, modalVisible, toggleModal, modalCloseBtn, modalPositionBottom }) => {
  return (
    <RNModal animationType="slide" transparent visible={modalVisible} onRequestClose={toggleModal}>
      <Pressable
        style={[styles.container, modalPositionBottom ? styles.containerBottom : null]}
        onPress={e => e.target === e.currentTarget && toggleModal()}>
        <View style={[styles.content, modalPositionBottom ? styles.contentBottom : null]}>
          {children}
          {!modalCloseBtn && (
            <Pressable style={styles.closeBtn} onPress={toggleModal}>
              {getIcon(EnumIcons.close, EnumColors.gray)}
            </Pressable>
          )}
        </View>
      </Pressable>
    </RNModal>
  );
};

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
  },
  containerBottom: {
    justifyContent: 'flex-end',
  },
  content: {
    position: 'relative',
    margin: 20,
    padding: 30,
    backgroundColor: '#EFF1F3',
    shadowColor: EnumColors.black,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.5,
    shadowRadius: 5.46,
    elevation: 9,
  },
  contentBottom: {
    margin: 0,
    width: '100%',
    borderTopRightRadius: 30,
    borderTopLeftRadius: 30,
  },
  closeBtn: {
    position: 'absolute',
    top: 5,
    right: 5,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: 30,
    height: 30,
  },
});
