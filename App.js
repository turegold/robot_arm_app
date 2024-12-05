import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Button } from "react-native";
import React, { useState } from "react";

export default function App() {
  const [number, setNumber] = useState(0);

  return (
    <View style={styles.container}>
      <View style={styles.cityContainer}>
        <Text style={styles.city}>Incheon</Text>
      </View>

      <View style={styles.weatherContainer}>
        <View style={styles.day}>
          <Text style={styles.regDate}>12월 5일, 목, 15:49</Text>
          <Text style={styles.weather}>맑음</Text>
        </View>

        <View style={styles.tempContainer}>
          <Text style={styles.temp}>15</Text>
        </View>
      </View>

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ffe01a",
    // alignItems: "center",
    // justifyContent: "center",
  },
  cityContainer: {
    flex: 1,
  },
  city: {
    flex: 1,
    marginTop: 50,
    paddingTop: 20,
    fontSize: 40,
    textAlign: "center",
    fontWeight: "bold",
    // backgroundColor: "red",
  },
  weatherContainer: {
    flex: 3,
    // backgroundColor: "green",
  },
  day: {
    flex: 0.2,
    // backgroundColor: "red",
    alignItems: "center",
    justifyContent: "center",
  },
  regDate: {
    paddingTop: 10,
    paddingLeft: 20,
    paddingRight: 20,
    fontWeight: "bold",
    borderRadius: 20,
    overflow: "hidden",
    flex: 1,
    color: "white",
    backgroundColor: "black",
  },
  weather: {
    flex: 1.5,
    marginTop: 20,
    fontSize: 25,
    fontWeight: "bold",
    // backgroundColor: "purple",
  },
  tempContainer: {
    flex: 0.3,
    alignItems: "center",
    // backgroundColor: "blue",
    justifyContent: "center",
  },
  temp: {
    flex: 0.5,
    fontSize: 90,
    textAlign: "center",
    fontWeight: "bold",
    // backgroundColor: "orange",
  },
});
