import React from 'react';
import { SafeAreaView, StatusBar, StyleSheet, View } from 'react-native';
import { useFirebaseController } from '../controller';

import { AddIngredientForm } from '../components/AddIngredientForm';
import { IngredientList } from '../components/IngredientList';

import { UI } from '../utils/ui';

export function Home() {
  const controller = useFirebaseController();

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" backgroundColor={UI.colors.white} />
      <View style={[styles.container, styles.wrapper]}>
        <View style={styles.formWrapper}>
          <AddIngredientForm onSubmit={controller.addIngredient} />
        </View>
        <View style={styles.container}>
          <IngredientList
            data={controller.ingredients}
            onRemove={controller.removeIngredient}
          />
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: UI.colors.white,
  },
  wrapper: {
    paddingHorizontal: 24,
    paddingTop: 24,
  },
  formWrapper: {
    marginBottom: 24,
  },
});
