import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { NavigationContainer } from '@react-navigation/native';
import MainTab from './src/navigation/MainTab'
const App = () => {
  return (
    <NavigationContainer>
      <MainTab />
    </NavigationContainer>
  )
}

export default App

const styles = StyleSheet.create({

})