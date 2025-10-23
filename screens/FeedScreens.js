import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import LogContext from '../contexts/LogContext'

export default function FeedScreens() {
  return (
    <View style={styles.block}>
      <LogContext.Consumer>
        {(value) => <Text>{value}</Text>}
      </LogContext.Consumer>
    </View>
  )
}

const styles = StyleSheet.create({
    block:{},
})