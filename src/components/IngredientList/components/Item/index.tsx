import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';

import trashIcon from '../../../../assets/trash.png';
import { IIngredient } from '../../../../types';

import { UI } from '../../../../utils/ui';

interface IItemProps {
  data: IIngredient;
  onRemove: (id: string) => void;
}

export function Item(props: IItemProps) {
  return (
    <View style={styles.container}>
      <View style={styles.textWrapper}>
        <Text style={styles.text}>{props.data.name}</Text>
      </View>
      <TouchableOpacity onPress={() => props.onRemove(props.data.id)}>
        <Image source={trashIcon} style={styles.icon} resizeMode="contain" />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginBottom: 8,
    flexDirection: 'row',
  },
  textWrapper: {
    paddingVertical: 8,
    paddingHorizontal: 16,
    backgroundColor: UI.colors.blue,
    borderRadius: 8,
    flex: 1,
    marginRight: 16,
  },
  text: {
    flex: 1,
    color: UI.colors.white,
  },
  icon: {
    height: 32,
    width: 24,
  },
});
