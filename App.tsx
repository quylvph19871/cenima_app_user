import React from 'react'
import { StatusBar, StyleSheet, Text, View } from 'react-native'
import RootNavigation from './src/Screens/navigation/RootNavigation'

const App = () => {
  return (
    <View style={styles.container}>
      <StatusBar barStyle={'light-content'} />
      <RootNavigation/>
    </View>
  )
}

export default App

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'
  }
})