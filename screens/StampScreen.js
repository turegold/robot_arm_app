import { Text, View } from "react-native";
import React from "react";

// 스탬프 화면
export default StampScreen = ({ navigation }) => {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text style={{ fontSize: 40, fontWeight: "bold" }}>스탬프 쾅쾅</Text>
    </View>
  );
};
