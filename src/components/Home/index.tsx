import React from 'react';
import { FlatList, ListRenderItem, StyleSheet, Text, View } from 'react-native';
import { Card } from 'app/components/Card';

import { data } from 'app/mock-data/data.ts';
import { ICard } from 'app/types';

export const Home = () => {
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
      <View style={styles.cards}>
        <FlatList data={data} renderItem={renderCard} keyExtractor={({ id }: { id: string }) => id} />
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
