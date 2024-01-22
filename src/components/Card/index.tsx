import React from 'react';
import { Image, Pressable, StyleSheet, Text, View } from 'react-native';
import { getIcon } from 'app/helpers/getIcon.tsx';
import { EnumColors, EnumIcons, ICard } from 'app/types';
import { FC } from 'react';
import { IMAGES } from 'app/constants';

export const Card: FC<ICard> = props => {
  const { title, caption, price, oldPrice, imgName } = props;

  return (
    <View style={styles.card}>
      <View style={styles.imageContainer}>
        <Pressable style={styles.like}>{getIcon(EnumIcons.like, EnumColors.gray)}</Pressable>
        <Image style={styles.image} source={(IMAGES as any)[imgName]} />
      </View>
      <View style={styles.info}>
        <Text style={styles.title} numberOfLines={2}>
          {title}
        </Text>
        <Text style={styles.caption} numberOfLines={1}>
          {caption}
        </Text>
        <View style={styles.priceContainer}>
          <Text style={styles.price}>${price}</Text>
          {oldPrice && <Text style={styles.oldPrice}>${oldPrice}</Text>}
        </View>
        <Pressable style={styles.buy}>{getIcon(EnumIcons.bag, EnumColors.white)}</Pressable>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    display: 'flex',
    flexDirection: 'row',
    backgroundColor: EnumColors.white,
    borderRadius: 16,
    shadowColor: EnumColors.gray,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.15,
    shadowRadius: 5.46,
    elevation: 9,
    overflow: 'hidden',
  },
  imageContainer: {
    position: 'relative',
    width: 104,
    height: 104,
  },
  image: {
    flex: 1,
    height: '100%',
    resizeMode: 'cover',
  },
  like: {
    position: 'absolute',
    top: 5,
    right: 5,
    zIndex: 1,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: 24,
    height: 24,
    backgroundColor: EnumColors.white,
    borderRadius: 100,
    shadowColor: EnumColors.gray,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.15,
    shadowRadius: 5.46,
    elevation: 9,
  },
  info: {
    position: 'relative',
    display: 'flex',
    flex: 1,
    gap: 5,
    paddingVertical: 10,
    paddingHorizontal: 20,
  },
  caption: {
    fontSize: 11,
    color: EnumColors.blue,
  },
  title: {
    fontSize: 16,
    fontWeight: '700',
    color: EnumColors.black,
  },
  priceContainer: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'baseline',
    gap: 10,
  },
  price: {
    fontSize: 14,
    fontWeight: '700',
    color: EnumColors.black,
  },
  oldPrice: {
    fontSize: 12,
    textDecorationLine: 'line-through',
    color: EnumColors.gray,
  },
  buy: {
    position: 'absolute',
    right: 10,
    bottom: 10,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: 36,
    height: 36,
    backgroundColor: EnumColors.blue,
    borderRadius: 100,
  },
});
