import React from 'react';
import { Layout } from 'app/components/Layout';
import { CardInfo } from 'app/components/CardInfo';
import { RouteProp } from '@react-navigation/native';
import { ICard } from 'app/types';

type ParamList = {
  Details: ICard;
};

type ProductScreenRouteProp = RouteProp<ParamList, 'Details'>;

type Props = {
  route: ProductScreenRouteProp;
};
export const ProductScreen = ({ route }: Props) => {
  return (
    <Layout>
      <CardInfo {...route.params} />
    </Layout>
  );
};
