import React, { FC } from 'react';
import { Image, ScrollView, StyleSheet, Text, View } from 'react-native';
import { EnumColors, ICard } from 'app/types';
import { Comments } from 'app/components/Comments';

export const CardInfo: FC<ICard> = props => {
  const { title, caption, price, oldPrice, img, info, id } = props;

  return (
    <ScrollView>
      <View style={styles.product}>
        <View style={styles.productImgWrap}>
          <Image source={img} style={styles.productImg} />
        </View>

        <View style={styles.productInfo}>
          <Text>{title}</Text>
          <Text>{caption}</Text>
          <View style={styles.productPriceContainer}>
            <Text style={styles.productPrice}>${price}</Text>
            {oldPrice && <Text style={styles.oldProductPrice}>${oldPrice}</Text>}
          </View>
          <Text>{info}</Text>
        </View>
        <Comments id={id} />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  product: {
    display: 'flex',
    flexDirection: 'column',
    flex: 1,
    gap: 15,
    paddingHorizontal: 14,
  },
  productImgWrap: {
    display: 'flex',
    alignItems: 'center',
    width: '100%',
    height: 300,
  },

  productImg: {
    flex: 1,
    aspectRatio: 3 / 4,
  },

  productInfo: {},
  productPriceContainer: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'baseline',
    gap: 10,
  },
  productPrice: {
    fontSize: 18,
    fontWeight: '700',
    color: EnumColors.black,
  },
  oldProductPrice: {
    fontSize: 16,
    textDecorationLine: 'line-through',
    color: EnumColors.gray,
  },
});
