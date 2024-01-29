import React, { useCallback, useRef, useState } from 'react';
import { FlatList, Image, ImageSourcePropType, ListRenderItem, StyleSheet, Text, View, ViewToken } from 'react-native';
import { IMAGES_POPULAR } from 'app/constants';
import { EnumColors } from 'app/types';

interface IPopular {
  img: ImageSourcePropType;
  name: string;
}
const renderItem: ListRenderItem<IPopular> = ({ item }) => {
  return (
    <View style={styles.item}>
      <Image source={item.img} />
      <Text style={styles.itemText}>{item.name}</Text>
    </View>
  );
};
export const Popular = () => {
  const ref = useRef<FlatList>(null);
  const [visibleIndex, setVisibleIndex] = useState<number | null>(null);

  const onViewableItemsChanged = useCallback(({ viewableItems }: { viewableItems: ViewToken[] }) => {
    if (viewableItems.length > 0) {
      setVisibleIndex(viewableItems[0].index);
    }
  }, []);

  return (
    <View style={styles.popular}>
      <Text>Popular</Text>
      <View style={styles.popularCarousel}>
        <FlatList
          ref={ref}
          style={styles.list}
          horizontal
          pagingEnabled
          data={IMAGES_POPULAR}
          renderItem={renderItem}
          onViewableItemsChanged={onViewableItemsChanged}
        />

        <View style={styles.pagination}>
          {IMAGES_POPULAR.map((_, index) => {
            return (
              <View style={[styles.paginationItem, visibleIndex === index ? styles.paginationItemActive : null]} />
            );
          })}
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  popular: {
    gap: 10,
    width: '100%',
    paddingHorizontal: 14,
  },
  popularCarousel: {
    display: 'flex',
    alignItems: 'center',
    gap: 15,
  },
  list: {
    width: 330,
    overflow: 'hidden',
  },

  item: {
    position: 'relative',
    justifyContent: 'flex-start',
    alignItems: 'center',
    width: 300,
    height: 400,
    marginHorizontal: 15,
    borderRadius: 10,
    overflow: 'hidden',
  },
  itemText: {
    position: 'absolute',
    bottom: 0,
    right: 0,
    left: 0,
    padding: 10,
    fontSize: 16,
    fontWeight: '500',
    textAlign: 'center',
    color: EnumColors.white,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  pagination: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    flexWrap: 'wrap',
    gap: 5,
  },
  paginationItem: {
    width: 6,
    height: 6,
    backgroundColor: EnumColors.gray,
    borderRadius: 100,
  },
  paginationItemActive: {
    backgroundColor: EnumColors.blue,
  },
});
