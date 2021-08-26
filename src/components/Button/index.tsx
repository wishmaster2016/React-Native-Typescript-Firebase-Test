import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';
import { UI } from '../../utils/ui';

interface IButtonProps {
  text: string;
  isDisabled?: boolean;
  onPress: () => void;
}

export function Button(props: IButtonProps) {
  return (
    <TouchableOpacity
      onPress={props.onPress}
      disabled={props.isDisabled}
      style={[styles.container, props.isDisabled && styles.disabled]}>
      <Text style={styles.text}>{props.text}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingVertical: 10,
    paddingHorizontal: 24,
    borderRadius: 8,
    backgroundColor: UI.colors.blue,
  },
  text: {
    color: UI.colors.white,
    fontSize: 16,
  },
  disabled: {
    backgroundColor: UI.colors.greyDark,
  },
});
