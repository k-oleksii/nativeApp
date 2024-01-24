import React, { useMemo, useState } from 'react';
import { FlatList, ListRenderItem, StyleSheet, Text, TextInput, View } from 'react-native';
import { Card } from 'app/components/Card';

import { data } from 'app/mock-data/data.ts';
import { ICard } from 'app/types';

const sortAndFilterProducts = (search: string) => {
  return [...data].filter(product => {
    const productTitle = product.title.toLowerCase();

    return productTitle.includes(search.toLowerCase());
  });
};

export const Home = () => {
  const [search, setSearch] = useState('');

  const products = useMemo(() => sortAndFilterProducts(search), [search]);

  const handleSearch = (text: string) => {
    setSearch(text);
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
      <View>
        <Text>Welcome!</Text>
      </View>
      <View>
        <TextInput onChangeText={handleSearch} placeholder="Search" />
      </View>
      <View style={styles.cards}>
        <FlatList data={products} renderItem={renderCard} keyExtractor={({ id }: { id: string }) => id} />
      </View>
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
  cards: {
    flex: 1,
  },
  item: {
    paddingHorizontal: 10,
    marginVertical: 10,
  },
});
