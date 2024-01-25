import React, { useMemo, useState } from 'react';
import { FlatList, ListRenderItem, Pressable, StyleSheet, Text, TextInput, View } from 'react-native';
import { Card } from 'app/components/Card';

import { data } from 'app/mock-data/data.ts';
import { EnumColors, EnumIcons, ICard } from 'app/types';
import { getIcon } from 'app/helpers/getIcon.tsx';
import { Modal } from 'app/elements/Modal';
import BouncyCheckbox from 'react-native-bouncy-checkbox';

const sortAndFilterProducts = (search: string, option?: boolean) => {
  return [...data].filter(product => {
    const productTitle = product.title.toLowerCase();
    const result = productTitle.includes(search.toLowerCase());

    if (option) {
      return result && product.isNew;
    }

    return result;
  });
};

export const Home = () => {
  const [search, setSearch] = useState('');
  const [isSearchVisible, setSearchVisible] = useState(false);
  const [isWishlistModal, setWishlistModal] = useState(false);
  const [isFilterModal, setFilterModal] = useState(false);
  const [isFilterNewOption, setFilterNewOption] = useState(false);

  const products = useMemo(() => sortAndFilterProducts(search, isFilterNewOption), [search, isFilterNewOption]);

  const handleSearch = (text: string) => {
    setSearch(text);
  };

  const toggleSearch = () => {
    setSearchVisible(!isSearchVisible);
  };

  const toggleWishlist = () => {
    setWishlistModal(!isWishlistModal);
  };

  const toggleFilter = () => {
    setFilterModal(!isFilterModal);
  };

  const renderCard: ListRenderItem<ICard> = ({ item }) => {
    return (
      <View style={styles.item}>
        <Card {...item} />
      </View>
    );
  };

  return (
    <View style={styles.content}>
      <View style={styles.header}>
        {getIcon(EnumIcons.logo)}
        <View style={styles.headerServices}>
          <Pressable style={styles.headerBtn} onPress={toggleWishlist}>
            {getIcon(EnumIcons.like, EnumColors.white)}
          </Pressable>
          <Pressable style={styles.headerBtn} onPress={toggleSearch}>
            {getIcon(EnumIcons.search, EnumColors.white)}
          </Pressable>
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

      <View style={styles.filter}>
        <Pressable onPress={toggleFilter} style={styles.filterBtn}>
          {getIcon(EnumIcons.filter, EnumColors.gray)}
          <Text style={styles.filterText}>Filter</Text>
        </Pressable>
      </View>

      <FlatList
        style={styles.cards}
        data={products}
        renderItem={renderCard}
        keyExtractor={({ id }: { id: string }) => id}
      />

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
  headerBtn: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: 28,
    height: 28,
    backgroundColor: EnumColors.blue,
    borderRadius: 6,
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
  filterBtn: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
    paddingVertical: 5,
  },
  filterText: {
    fontSize: 16,
    fontWeight: '500',
  },
  cards: {
    flex: 1,
  },
  item: {
    paddingHorizontal: 14,
    marginVertical: 10,
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
});
