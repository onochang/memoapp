import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import Appbar from './src/components/AppBar';
import MemoList from './src/components/MemoList';
import CircleButton from './src/components/CircleButton';

export default function App() {
  return (
    <View style={styles.container}>
      <Appbar/>
      <MemoList/>
      <CircleButton>+</CircleButton>


      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F0F4F8',
  },
});
