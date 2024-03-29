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
import { EnumColors, EnumIcons } from 'app/types';

import { useLoadPopularProducts, useRefresh } from 'app/hooks';
import { getIcon } from 'app/helpers/getIcon.tsx';
import { useNavigation } from '@react-navigation/native';
import { createPopular } from 'app/lib/redux/slice';
import { NEW_POPULAR_PRODUCTS } from 'app/constants';
import { useDispatch } from 'react-redux';

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
  const popularProducts = useLoadPopularProducts();
  const navigation = useNavigation();
  // @ts-ignore

  const dispatch = useDispatch();

  const dispatchAction = useCallback(() => {
    dispatch(createPopular(NEW_POPULAR_PRODUCTS));
  }, [dispatch]);

  const { isRefreshing, onRefresh } = useRefresh(dispatchAction);

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
    }, 10000);

    return () => clearInterval(autoScrollInterval);
  }, [visibleIndex, popularProducts.length]);

  const handleClose = () => {
    navigation.goBack();
  };

  return (
    <View style={styles.popularContainer}>
      <View style={styles.popular}>
        {/*<Text>Popular</Text>*/}
        <Pressable style={styles.closeBtn} onPress={handleClose}>
          {getIcon(EnumIcons.close, EnumColors.gray)}
        </Pressable>
        <View style={styles.popularCarousel}>
          <FlatList
            ref={ref}
            style={styles.list}
            horizontal
            pagingEnabled
            refreshControl={<RefreshControl refreshing={isRefreshing} onRefresh={onRefresh} />}
            data={popularProducts}
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
    </View>
  );
};

const styles = StyleSheet.create({
  popularContainer: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
    paddingHorizontal: 14,
    paddingVertical: 14,
  },
  popular: {
    gap: 10,
    width: '100%',
    paddingHorizontal: 14,
    paddingTop: 40,
    paddingBottom: 20,
    backgroundColor: EnumColors.white,
    borderWidth: 1,
    borderRadius: 8,
    borderColor: EnumColors.gray,
  },
  popularCarousel: {
    display: 'flex',
    alignItems: 'center',
    gap: 15,
  },
  list: {
    width: 360,
    overflow: 'hidden',
  },

  item: {
    width: 330,
    height: 330,
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
