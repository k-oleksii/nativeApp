import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Card } from 'app/components/Card';

import { data } from 'app/mock-data/data.ts';

export const Home = () => {
  return (
    <View style={styles.content}>
      <Text>Welcome!</Text>
      {data?.map(card => (
        <Card key={card.id} {...card} />
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  content: {
    display: 'flex',
    flexDirection: 'column',
    gap: 20,
    padding: 20,
  },
});
