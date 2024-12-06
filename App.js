import { StatusBar } from "expo-status-bar";
import { StyleSheet } from "react-native";
import React, { useState, useEffect } from "react";
import {
  createStaticNavigation,
  NavigationContainer,
} from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Dimensions } from "react-native";

import tabConfig from "./configs/tabConfig";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import TodoSearchScreen from "./screens/OrderStack";

const SCREEN_WIDTH = Dimensions.get("window").width;

const Tab = createBottomTabNavigator();
// const Tab = createMaterialTopTabNavigator();
export default function App() {
  //네비게이터의 screenOptions를 변수로 따로 담음
  const screenOptions = ({ route }) => ({
    tabBarInActiveTintColor: "black",
    animationEnable: true,
    tabBarIcon: ({ color, size }) => {
      //반복문을 돌면서 route의 정보와 페이지의 정보가 같다면 해당 페이지 객체를 반환
      const routeConfig = tabConfig.find(
        (config) => config.name === route.name
      );
      const iconName = routeConfig.focusedIcon;
      const IconComponent = routeConfig.iconComponent;

      return <IconComponent name={iconName} size={size} color={color} />;
    },
    tabBarLableStyle: {
      fontSize: 15,
      paddingTop: 10,
      paddingBottom: 10,
      fontWeight: "bold",
    },
  });
  return (
    <NavigationContainer>
      <Tab.Navigator screenOptions={screenOptions}>
        {tabConfig.map((routeConfig) => (
          <Tab.Screen
            key={routeConfig.name}
            name={routeConfig.name}
            component={routeConfig.component}
            options={{
              title: routeConfig.title,
              headerShown: routeConfig.headerShown,
            }}
          />
        ))}
      </Tab.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ffe01a",
    alignItems: "center",
    justifyContent: "center",
  },
});
