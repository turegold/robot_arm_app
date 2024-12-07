import { React, useState } from "react";
import {
  View,
  Text,
  Image,
  StyleSheet,
  FlatList,
  TouchableOpacity,
  Button,
  Pressable,
} from "react-native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import drinks from "./drinks";
import DrinkDetailScreen from "./DrinkDetailScreen";
import DrinkListScreen from "./DrinkList";

// 네비게이터 설정
const Stack = createNativeStackNavigator();

const OrderStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="DrinkList"
        component={DrinkListScreen}
        options={{
          headerShown: true,
          title: "음료 리스트",
        }}
      />
      <Stack.Screen
        name="DrinkDetail"
        component={DrinkDetailScreen}
        options={{
          headerShown: true,
          title: "음료 상세",
        }}
      />
    </Stack.Navigator>
  );
};

export default OrderStack;
