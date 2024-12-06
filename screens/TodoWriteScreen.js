import { Text, TextInput, Pressable } from "react-native";
import React, { useState, useEffect } from "react";

//할일 작성 페이지
export default TodoWriteScreen = ({ navigation }) => {
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
