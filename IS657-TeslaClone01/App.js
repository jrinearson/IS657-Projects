import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>

    <View styles={styles.carContainer}>

      <View>
        <Text styles={styles.carTitle}>Model S</Text>
        <Text styles={styles.carSubTitle}>Starting at $69,420</Text>
      </View>
    </View>



      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffff',
    alignItems: 'center',
    justifyContent: 'center',
  },

  carContainer: {
    width: '100%',
    height: '100%',

  },

  carTitle: {
    marginTop: '30%',
    width: '100%',
    alignItems: 'center',

  },
   carSubTitle: {

   },

});
