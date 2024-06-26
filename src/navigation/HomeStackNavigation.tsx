import { StyleSheet, Text, View } from "react-native";
import React from "react";
// import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Home from "../screens/Home";
import MovieDetail from "../components/movies/MovieDetail";

const Stack = createStackNavigator();

const HomeStackNavigation = () => {
  return (
    // <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="MovieDetail" component={MovieDetail} />
      </Stack.Navigator>
    // </NavigationContainer>
  );
};

export default HomeStackNavigation;


