import React from 'react';
import { View, StyleSheet } from 'react-native';

import Appbar from '../components/AppBar';
import MemoList from '../components/MemoList';
import CircleButton from '../components/CircleButton';


export default function MemoListScreen() {
    return (
        <View style={styles.container}>
            <Appbar/>
            <MemoList/>
            <CircleButton name="plus"/>
        </View>

    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F0F4F8',
      },
});