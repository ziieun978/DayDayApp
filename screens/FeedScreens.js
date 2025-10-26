import { StyleSheet, TextInput, View } from 'react-native'
import React, { useContext } from 'react'
import LogContext from '../contexts/LogContext'

function FeedScreens() {
  const {text, setText} = useContext(LogContext);

  return (
    <View style={styles.block}>
      <TextInput
        value={text}
        onChangeText={setText}
        placeholder='텍스트를 입력하세요'
        style={styles.input}
        />
    </View>
  );
}

const styles = StyleSheet.create({
  input: {
    padding: 16,
    backgroundColor: 'white',
  },
});

export default FeedScreens;