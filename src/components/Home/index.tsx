import React, { useState } from 'react';
import BouncyCheckbox from 'react-native-bouncy-checkbox';
import { FlatList, Keyboard, ListRenderItem, Pressable, StyleSheet, Text, TextInput, View } from 'react-native';
import { Card } from 'app/components/Card';
import { ButtonText, ButtonIcon, Modal } from 'app/elements';

import { EnumColors, EnumIcons, ICard } from 'app/types';

import { getIcon } from 'app/helpers/getIcon.tsx';

import { useKeyboard, useOrientation, useSortAndFilterProducts } from 'app/hooks';
import { useNavigation } from '@react-navigation/native';

const renderCard: ListRenderItem<ICard> = ({ item }) => {
  return (
    <View style={styles.item}>
      <Card {...item} />
    </View>
  );
};

export const Home = () => {
  const [search, setSearch] = useState('');
  const [isSearchVisible, setSearchVisible] = useState(false);
  const [isWishlistModal] = useState(false);
  const [isFilterModal, setFilterModal] = useState(false);
  const [isFilterNewOption, setFilterNewOption] = useState(false);
  const navigation = useNavigation();
  const products = useSortAndFilterProducts(search, isFilterNewOption);
  const keyboardOpen = useKeyboard();

  const orientation = useOrientation();
  const isHorizontal = orientation === 'landscape';
  const handleSearch = (text: string) => {
    setSearch(text);
  };

  const toggleSearch = () => {
    setSearchVisible(!isSearchVisible);
  };

  const toggleWishlist = () => {
    // @ts-ignore
    navigation.navigate('Popular');
  };

  const toggleFilter = () => {
    setFilterModal(!isFilterModal);
  };

  const handleButtonClick = () => {
    // Если клавиатура открыта, скрываем её
    if (keyboardOpen) {
      Keyboard.dismiss();
    } else {
      // Если клавиатура закрыта, фокусируемся на текстовом поле, чтобы открыть клавиатуру
      console.log('closed');
    }
  };

  return (
    <View style={styles.content}>
      <View style={styles.header}>
        {getIcon(EnumIcons.logo)}
        <View style={styles.headerServices}>
          <ButtonIcon iconName="like" onPress={toggleWishlist} />
          <ButtonIcon iconName="search" onPress={toggleSearch} />
        </View>
      </View>

      {isSearchVisible && (
        <View style={styles.search}>
          <TextInput
            style={styles.searchField}
            onChangeText={handleSearch}
            autoFocus={isSearchVisible}
            placeholder="Search"
          />
          <View style={styles.searchIcon}>{getIcon(EnumIcons.search, EnumColors.gray)}</View>
        </View>
      )}

      {/*<Popular />*/}

      <View style={styles.filter}>
        <ButtonText text="Filter" iconName="filter" onPress={toggleFilter} />
      </View>
      <FlatList horizontal={isHorizontal} style={styles.cards} data={products} renderItem={renderCard} />

      {isWishlistModal && (
        <Modal modalVisible={isWishlistModal} toggleModal={toggleWishlist}>
          <Text>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque cumque dolorem dolorum ducimus earum enim
            eos est fugiat fugit harum illum iste laboriosam minus necessitatibus odit, pariatur quo tempore vero.
          </Text>
        </Modal>
      )}

      {isFilterModal && (
        <Modal modalVisible={isFilterModal} toggleModal={toggleFilter} modalCloseBtn modalPositionBottom>
          <Text style={styles.filterTitle}>Filter</Text>
          <BouncyCheckbox
            size={20}
            fillColor={EnumColors.blue}
            unfillColor="transparent"
            text="Only new"
            isChecked={isFilterNewOption}
            iconStyle={styles.checkboxIcon}
            innerIconStyle={styles.checkboxInnerIcon}
            textStyle={styles.checkboxText}
            disableBuiltInState
            onPress={() => setFilterNewOption(!isFilterNewOption)}
          />
        </Modal>
      )}
      {keyboardOpen && (
        <View style={styles.keyboardBtnContainer}>
          <Pressable onPress={handleButtonClick} style={styles.keyboardBtn}>
            <Text style={styles.keyboardBtnText}>Close keyboard</Text>
          </Pressable>
        </View>
      )}
      <Text>Footer</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  content: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    flex: 1,
  },
  header: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 20,
    paddingHorizontal: 14,
  },
  headerServices: {
    display: 'flex',
    flexDirection: 'row',
    gap: 10,
  },
  search: {
    position: 'relative',
    paddingHorizontal: 14,
  },
  searchField: {
    height: 44,
    paddingRight: 20,
    paddingLeft: 40,
    color: EnumColors.gray,
    backgroundColor: '#EFF1F3',
    borderRadius: 12,
  },
  searchIcon: {
    position: 'absolute',
    top: 15,
    left: 30,
  },
  filter: {
    display: 'flex',
    alignSelf: 'flex-end',
    paddingHorizontal: 14,
  },

  filterTitle: {
    marginBottom: 10,
    fontSize: 18,
    fontWeight: '600',
  },
  checkboxIcon: {
    borderRadius: 0,
  },
  checkboxInnerIcon: {
    borderRadius: 2,
    borderColor: EnumColors.gray,
  },
  checkboxText: {
    textDecorationLine: 'none',
  },
  cards: {
    flex: 1,
  },

  item: {
    paddingHorizontal: 14,
    marginVertical: 10,
  },
  keyboardBtnContainer: {
    position: 'absolute',
    right: 0,
    bottom: 0,
    left: 0,
    zIndex: 1,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  keyboardBtn: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 10,
    paddingVertical: 10,
    backgroundColor: EnumColors.black,
    width: 150,
    height: 50,
    borderRadius: 8,
  },
  keyboardBtnText: {
    fontSize: 16,
    color: EnumColors.white,
  },
});
