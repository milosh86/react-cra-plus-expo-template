import 'node-libs-react-native/globals';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import someFn from "common/someFn";
import fn2 from "common/sub/fn2";


export default function App() {
  return (
    <View style={styles.container}>
      <Text>Open up App.tsx to start working on your app!</Text>
      <Text>{someFn(10,10)}</Text>
  <Text>{fn2('there !')}</Text>
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
