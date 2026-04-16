import { View, Text } from 'react-native';
import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from '/Users/dhruvin/Desktop/test/AwesomeProject/src/screens/Home.js'
import  ProductTab from '/Users/dhruvin/Desktop/test/AwesomeProject/src/screens/ProductTab.js'
const Tab = createBottomTabNavigator();

const MainTab = () => {
  return (
    // <SafeAreaView>
      <Tab.Navigator>
        <Tab.Screen name="Home" component={Home} />
        <Tab.Screen name="ProductTab" component={ProductTab} />
      </Tab.Navigator>
    // </SafeAreaView>
  );
};

export default MainTab;
