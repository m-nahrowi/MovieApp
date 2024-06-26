import { Button, StyleSheet, Text, View } from "react-native";
import React from "react";
import { API_URL, API_ACCESS_TOKEN } from '@env';

const MovieDetail = ({ navigation }: any): any => {

  // mengambil data
  const fetchData = (): void => {
    // akses token saya
    if (API_URL == null || API_ACCESS_TOKEN.length == null){
      throw new Error('ENV not found')
    }
    // const ACCESS_TOKEN = process.env.EXPO_PUBLIC_API_ACCESS_TOKEN;

    // const URL = process.env.EXPO_PUBLIC_API_URL;

    // GET data
    const options = {
      method: "GET",
      headers: {
        accept: "application/json",
        Authorization: `Bearer ${API_ACCESS_TOKEN}`,
      },
    }
    fetch(API_URL, options)
      .then((response) => response.json())
      .then((response) => {
        console.log(response);
        console.log("data sukses keluar")
      })
      .catch((err) => {
        console.error(err);
      });
  };
  return (
    <View style={styles.container}>
      <Text>MovieDetails</Text>
      <Button
        title="Fetch Data"
        onPress={() => {
          fetchData();
        }}
      />
    </View>
  );
};

export default MovieDetail;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
