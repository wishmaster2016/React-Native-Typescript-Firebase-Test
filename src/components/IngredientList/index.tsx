import React from 'react';
import { FlatList } from 'react-native';

import { Item } from './components/Item';

import { IIngredient } from '../../types';

interface IIngredientListProps {
  data: IIngredient[];
  onRemove: (id: string) => void;
}

export function IngredientList(props: IIngredientListProps) {
  return (
    <FlatList
      bounces={false}
      data={props.data}
      keyExtractor={item => item.id}
      showsVerticalScrollIndicator={false}
      renderItem={({ item }) => <Item data={item} onRemove={props.onRemove} />}
    />
  );
}
