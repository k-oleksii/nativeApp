import React, { useCallback, useEffect, useRef, useState } from 'react';
import {
  FlatList,
  Image,
  ImageSourcePropType,
  ListRenderItem,
  Pressable,
  RefreshControl,
  Share,
  StyleSheet,
  Text,
  View,
  ViewToken,
} from 'react-native';
import { IMAGES_POPULAR, NEW_POPULAR_ITEM } from 'app/constants';
import { EnumColors } from 'app/types';

import { useLoadPopularProducts } from 'app/hooks';
import { useDispatch } from 'react-redux';
import { createPopular } from 'app/lib/redux/slice';

interface IPopular {
  img: ImageSourcePropType;
  name: string;
  link: string;
}
const renderItem: ListRenderItem<IPopular> = ({ item }) => {
  return (
    <View style={styles.item}>
      <Pressable style={styles.link} onPress={() => onShare(item)}>
        <Image source={item.img} />
        <Text style={styles.itemText}>{item.name}</Text>
      </Pressable>
    </View>
  );
};

const onShare = async ({ link, name }: { link: string; name: string }) => {
  try {
    const result = await Share.share({
      message: `${name}: ${link}`,
    });
    if (result.action === Share.sharedAction) {
      console.log('shared');
    }
  } catch (error: any) {
    console.error(error.message);
  }
};

export const Popular = () => {
  const ref = useRef<FlatList>(null);
  const [visibleIndex, setVisibleIndex] = useState<number | null>(null);
  const [refreshing, setRefreshing] = React.useState(false);
  const popularProducts = useLoadPopularProducts();
  const dispatch = useDispatch();

  const onViewableItemsChanged = useCallback(({ viewableItems }: { viewableItems: ViewToken[] }) => {
    if (viewableItems.length > 0) {
      setVisibleIndex(viewableItems[0].index);
    }
  }, []);

  const scrollTo = (index: number) => {
    ref.current?.scrollToIndex({
      animated: true,
      index: index,
    });
  };

  useEffect(() => {
    const autoScrollInterval = setInterval(() => {
      if (visibleIndex === null) {
        return;
      }

      const newIndex = visibleIndex === popularProducts.length - 1 ? 0 : visibleIndex + 1;
      scrollTo(newIndex);
    }, 5000);

    return () => clearInterval(autoScrollInterval);
  }, [visibleIndex]);

  const onRefresh = useCallback(() => {
    setRefreshing(true);
    setTimeout(() => {
      setRefreshing(false);
      dispatch(createPopular(NEW_POPULAR_ITEM));
    }, 3000);
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
          refreshControl={<RefreshControl refreshing={refreshing} onRefresh={onRefresh} />}
          data={popularProducts}
          onEndReached={() => dispatch(createPopular(IMAGES_POPULAR))}
          renderItem={renderItem}
          onViewableItemsChanged={onViewableItemsChanged}
        />

        <View style={styles.pagination}>
          {popularProducts.map((_, index) => {
            return (
              <View
                key={index}
                style={[styles.paginationItem, visibleIndex === index ? styles.paginationItemActive : null]}
              />
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
    width: 300,
    height: 400,
    marginHorizontal: 15,
    borderRadius: 10,
    overflow: 'hidden',
  },
  link: {
    position: 'relative',
    justifyContent: 'flex-start',
    alignItems: 'center',
    flex: 1,
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
