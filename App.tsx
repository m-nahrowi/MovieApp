import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native'
import BottomTabNavigator from './src/navigation/BottomTabNavigation';
// import HomeStackNavigation from './src/navigation/HomeStackNavigation';

export default function App() {
  return (
    <NavigationContainer>
      {/* <HomeStackNavigation /> */}
      <BottomTabNavigator /> 
    </NavigationContainer>
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
