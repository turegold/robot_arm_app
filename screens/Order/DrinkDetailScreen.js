import { React, useState } from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import styles from "./OrderStyle";
// 음료 상세 페이지
export default DrinkDetailScreen = ({ route }) => {
  const { drink } = route.params; // 전달받은 음료 데이터
  const [showNutrition, setShowNutrition] = useState(false); // 영양 정보 표시 여부
  const handleOrder = () => {
    alert(`${drink.name} 주문이 완료되었습니다.`);
  };
  // 토글 버튼 클릭 시 동작
  const toggleNutrition = () => {
    setShowNutrition(!showNutrition);
  };
  return (
    <View style={styles.detailContainer}>
      <Image source={drink.img} style={styles.detailImage} />
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
