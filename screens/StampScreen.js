import {
  Text,
  TextInput,
  Pressable,
  Keyboard,
  TouchableWithoutFeedback,
  View,
  StyleSheet,
} from "react-native";
import React, { useState } from "react";
import axios from "axios";
import my_location from "../myLocation.js";

// 할일 작성 페이지
export default StampScreen = ({ navigation }) => {
  const [todo, setTodo] = useState("");

  const sendTextToServer = async () => {
    console.log("버튼 클릭");
    // 키보드 숨기기
    Keyboard.dismiss();

    try {
      // 서버로 POST 요청
      const response = await axios.post(my_location + "/api/text", {
        todo: todo, // 서버로 보낼 데이터
      });

      // 서버 응답 처리
      console.log("서버 응답:", response.data);
    } catch (error) {
      console.error("오류 발생:", error);
    }
  };

  return (
    // 키보드 외 영역을 터치하면 키보드를 숨김
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View style={styles.container}>
        <TextInput
          style={styles.textInput}
          onChangeText={setTodo}
          value={todo}
          placeholder="할일을 작성해주세요."
          multiline
        />
        <Pressable style={styles.button} onPress={sendTextToServer}>
          <Text style={styles.buttonText}>전송</Text>
        </Pressable>
      </View>
    </TouchableWithoutFeedback>
  );
};

// 스타일 정의
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    backgroundColor: "#f5f5f5",
  },
  textInput: {
    flex: 0.3,
    padding: 10,
    backgroundColor: "#fff",
    borderRadius: 10,
    borderWidth: 2,
    margin: 10,
  },
  button: {
    padding: 10,
    margin: 10,
    borderRadius: 10,
    borderWidth: 2,
    backgroundColor: "#fff",
    width: "40%", // 버튼 크기 확장
    alignItems: "center",
    justifyContent: "center",
    alignSelf: "center", // 버튼을 가운데 정렬
  },
  buttonText: {
    textAlign: "center",
  },
});
