import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  Button,
  ScrollView,
  TextInput,
  Pressable,
} from "react-native";
import React, { useState, useEffect } from "react";
import {
  createStaticNavigation,
  NavigationContainer,
} from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Dimensions } from "react-native";
import * as Location from "expo-location";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import AntDesign from "@expo/vector-icons/AntDesign";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
const SCREEN_WIDTH = Dimensions.get("window").width;
// 메인 페이지
const HomeScreen = ({ navigation }) => {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text style={{ fontSize: 40, fontWeight: "bold" }}>메인 화면</Text>
      <Button
        title="할일 작성"
        onPress={() => navigation.navigate("TodoWrite")}
      ></Button>
      <Button
        title="상세페이지 이동"
        onPress={() => navigation.navigate("Details")}
      ></Button>
    </View>
  );
};

//할일 작성 페이지
const TodoWriteScreen = ({ navigation }) => {
  const [todo, setTodo] = useState("");
  return (
    <>
      <TextInput
        style={{
          flex: 0.3,
          padding: 10,
          backgroundColor: "#fff",
          borderRadius: 10,
          borderWidth: 2,
          margin: 10,
        }}
        onChangeText={setTodo}
        value={todo}
        placeholder="할일을 작성해주세요."
        multiline
      />
      <Pressable
        onPress={() => {
          //페이지를 넘어갈 때 객체를 전달
          navigation.navigate("Details", { todo });
          setTodo("");
        }}
      >
        <Text
          style={{
            padding: 10,
            backgroundColor: "#fff",
            borderRadius: 10,
            borderWidth: 2,
            width: "30%",
            textAlign: "center",
            margin: 10,
          }}
        >
          버튼
        </Text>
      </Pressable>
    </>
  );
};

//할일 검색 페이지
const TodoSearchScreen = () => {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text style={{ fontSize: 40, fontWeight: "bold" }}>검색 화면</Text>
    </View>
  );
};

//할일 리스트
const TodoListScreen = () => {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text style={{ fontSize: 40, fontWeight: "bold" }}>할일 검색</Text>
    </View>
  );
};

//마이 페이지
const MyPageScreen = () => {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text style={{ fontSize: 40, fontWeight: "bold" }}>마이 페이지</Text>
    </View>
  );
};

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();
export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        //하단 바의 공통 옵션
        screenOptions={({ route }) => ({
          tabBarLableStyle: {
            fontSize: 15,
            paddingTop: 10,
            paddingBottom: 10,
            fontWeight: "bold",
          },
          tabBarInActiveTintColor: "black",
          tabBarIcon: ({ color, size }) => {
            let iconName;
            if (route.name == "Home") {
              iconName = "home";
            } else if (route.name == "TodoWrite") {
              iconName = "edit";
            } else if (route.name == "TodoSearch") {
              iconName = "search1";
            } else if (route.name == "TodoList") {
              iconName = "th-list";
              return <FontAwesome name="th-list" size={24} color="black" />;
            } else if (route.name == "MyPage") {
              iconName = "search1";
              return (
                <MaterialCommunityIcons
                  name="account"
                  size={24}
                  color="black"
                />
              );
            }
            return <AntDesign name={iconName} color={color} size={size} />;
          },
        })}
      >
        <Tab.Screen
          name="Home"
          component={HomeScreen}
          options={{
            title: "메인 홈",
          }}
        />
        <Tab.Screen
          name="TodoWrite"
          component={TodoWriteScreen}
          options={{
            title: "할일 작성",
          }}
        />
        <Tab.Screen
          name="TodoSearch"
          component={TodoSearchScreen}
          options={{
            title: "할일 검색",
          }}
        />
        <Tab.Screen
          name="TodoList"
          component={TodoListScreen}
          options={{
            title: "할일 리스트",
          }}
        />
        <Tab.Screen
          name="MyPage"
          component={MyPageScreen}
          options={{
            title: "마이 페이지",
          }}
        />
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
