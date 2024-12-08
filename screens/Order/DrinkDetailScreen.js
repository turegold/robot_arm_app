import { React, useState } from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import styles from "./OrderStyle";
import axios from "axios";
import myLocation from "../../myLocation";
// 음료 상세 페이지
export default DrinkDetailScreen = ({ route }) => {
  const { drink } = route.params; // 전달받은 음료 데이터
  const [showNutrition, setShowNutrition] = useState(false); // 영양 정보 표시 여부
  //주문 버튼을 눌렀을 때 실행되는 함수
  const handleOrder = async () => {
    alert(`${drink.name} 주문이 완료되었습니다.`);
    console.log(drink.name);
    try {
      // 서버로 POST 요청
      const response = await axios.post(myLocation + "/api/text", {
        drink: drink, // 서버로 보낼 데이터
      });

      // 서버 응답 처리
      console.log("서버 응답:", response.data);
    } catch (error) {
      console.error("오류 발생:", error);
    }
  };
  // 토글 버튼 클릭 시 동작
  const toggleNutrition = () => {
    setShowNutrition(!showNutrition);
  };
  return (
    <View style={styles.detailContainer}>
      <View style={styles.imageContainer}>
        <Image source={drink.img} style={styles.detailImage} />
      </View>

      <View style={styles.textContainer}>
        <View style={styles.bestBadge}>
          <Text style={styles.bestText}>BEST</Text>
        </View>
        <Text style={styles.detailName}>{drink.name}</Text>
        <Text style={styles.detailDescription}>{drink.des}</Text>
        <Text style={styles.detailPrice}>{drink.price}원</Text>
      </View>

      {/* 토글 버튼 */}
      <TouchableOpacity onPress={toggleNutrition} style={styles.toggleButton}>
        <Text style={styles.toggleButtonText}>
          {showNutrition ? "영양 정보 숨기기" : "영양 정보 보기"}
        </Text>
      </TouchableOpacity>
      {/* 영양 정보 */}
      {showNutrition && (
        <View style={styles.nutritionInfo}>
          <Text style={styles.nutritionText}>"그냥 먹어.."</Text>
          <Text style={styles.nutritionText}>-젠지 마키타-</Text>
        </View>
      )}

      <View style={styles.footer}>
        <TouchableOpacity onPress={handleOrder} style={styles.orderButton}>
          <Text style={styles.orderButtonText}>주문하기</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};
