import React, { useContext, createContext, ReactNode } from 'react';

import { firebase } from '@react-native-firebase/firestore';
import { useCollectionData } from 'react-firebase-hooks/firestore';

const firestore = firebase.firestore();

function useFirebase() {
  const messagesRef = firestore.collection('ingredients');
  const query = messagesRef.orderBy('createdAt');

  const [ingredients] = useCollectionData(query, { idField: 'id' });

  const addIngredient = (name: string) => {
    messagesRef.add({
      name,
      createdAt: firebase.firestore.FieldValue.serverTimestamp(),
    });
  };

  const removeIngredient = (id: string) => {
    messagesRef.doc(id).delete();
  };

  return {
    ingredients: ingredients || [],
    addIngredient,
    removeIngredient,
  };
}

export type FireBaseContext = ReturnType<typeof useFirebase>;
const Context = createContext<FireBaseContext | undefined>(undefined);

export function useFirebaseController() {
  const context = useContext(Context);

  if (context === undefined) {
    throw new Error(
      'Make sure you use the FireBaseProvider before using the context.',
    );
  }

  return context;
}

interface IFireBaseProviderProps {
  children: ReactNode;
}

export function FireBaseProvider(props: IFireBaseProviderProps) {
  const value = useFirebase();

  return <Context.Provider value={value}>{props.children}</Context.Provider>;
}
