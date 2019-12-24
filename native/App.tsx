import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import someFn from "../common/someFn";

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Open up App.tsx to start working on your app!!!</Text>
      <Text>{someFn(5, 6)}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
