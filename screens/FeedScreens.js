import React from 'react';
import { StyleSheet, View } from 'react-native'
import FloatingWriteBtn from '../component/FloatingWriteBtn';

function FeedScreens() {

  return (
    <View style={styles.block}>
      <FloatingWriteBtn />
    </View>
  );
}

const styles = StyleSheet.create({
  block: {
    flex: 1,
  }
});

export default FeedScreens;