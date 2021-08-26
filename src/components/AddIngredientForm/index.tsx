import React, { useState } from 'react';
import { StyleSheet, TextInput, View } from 'react-native';

import { Button } from '../Button';

import { UI } from '../../utils/ui';

interface IAddIngredientFormProps {
  onSubmit: (value: string) => void;
}

export function AddIngredientForm(props: IAddIngredientFormProps) {
  const [value, setValue] = useState('');

  const onSubmit = () => {
    props.onSubmit(value);
    setValue('');
  };

  return (
    <View style={styles.container}>
      <TextInput value={value} style={styles.input} onChangeText={setValue} />
      <View>
        <Button text="Add" onPress={onSubmit} isDisabled={!value} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
  },
  input: {
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderRadius: 8,
    backgroundColor: UI.colors.grey,
    fontSize: 18,
    flex: 1,
    marginRight: 16,
  },
});
