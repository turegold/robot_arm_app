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

// 음료 리스트 (로컬 이미지 경로 설정)
const drinks = [
  {
    id: "1",
    name: "아이스 아메리카노",
    price: 3000,
    des: "얼죽아 최태웅이 좋아하는 아이스 아메리카노",
    img: require("../images/ice_americano.png"), // 로컬 이미지 경로
  },
  {
    id: "2",
    name: "아이스티",
    price: 2000,
    des: "언제 먹어도 맛있는 아이스티",
    img: require("../images/ice_tea.png"), // 로컬 이미지 경로
  },
  {
    id: "3",
    name: "카페라떼",
    price: 4000,
    des: "부드럽고 달콤한 카페라떼",
    img: require("../images/cafe_latte.png"), // 로컬 이미지 경로
  },
  {
    id: "4",
    name: "콜드브루",
    price: 3500,
    des: "진하고 깔끔한 콜드브루",
    img: require("../images/cold_brew.png"), // 로컬 이미지 경로
  },
  {
    id: "5",
    name: "아샷추",
    price: 3000,
    des: "솔직히 왜먹는지 모르겠는 아샷추",
    img: require("../images/ice_shot_chu.png"), // 로컬 이미지 경로
  },
  {
    id: "6",
    name: "토피넛 라떼",
    price: 3500,
    des: "마시면 속이 뜨끈해지는 토피넛 라떼",
    img: require("../images/nut_lattee.png"), // 로컬 이미지 경로
  },
  {
    id: "7",
    name: "카라멜 마끼아또",
    price: 3800,
    des: "달달 씁쓸한 카라멜 마끼아또",
    img: require("../images/carmel_ma.png"), // 로컬 이미지 경로
  },
  {
    id: "8",
    name: "카페 모카",
    price: 4500,
    des: "난 사실 카페 모카를 먹어본 적이 없어",
    img: require("../images/cafe_moka.png"), // 로컬 이미지 경로
  },
];

// 음료 상세 페이지
const DrinkDetailScreen = ({ route }) => {
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

// 음료 리스트 페이지
const DrinkListScreen = ({ navigation }) => {
  const renderItem = ({ item }) => (
    <TouchableOpacity
      style={styles.itemContainer}
      onPress={() => navigation.navigate("DrinkDetail", { drink: item })}
    >
      <Image source={item.img} style={styles.itemImage} />
      <Text style={styles.itemName}>{item.name}</Text>
      <Text style={styles.itemPrice}>{`${item.price.toLocaleString()}원`}</Text>
    </TouchableOpacity>
  );

  return (
    <FlatList
      data={drinks}
      renderItem={renderItem}
      keyExtractor={(item) => item.id}
      numColumns={2} // 열 개수 설정
      contentContainerStyle={styles.listContainer}
    />
  );
};

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

// 스타일
const styles = StyleSheet.create({
  listContainer: {
    padding: 10,
  },
  itemContainer: {
    flex: 1,
    margin: 10,
    alignItems: "center",
    backgroundColor: "#fff",
    borderRadius: 10,
    overflow: "hidden",
    elevation: 3, // 안드로이드 그림자 효과
    shadowColor: "#000", // iOS 그림자 효과
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 5,

    // 크기 조정
    height: 200, // 사각형 높이 증가
    paddingTop: 10, // 이미지 위치 조정
  },
  textContainer: {
    alignItems: "flex-start", // 텍스트 왼쪽 정렬
    width: "100%", // 텍스트 컨테이너가 전체 너비를 사용하도록
    marginTop: 20, // 상단 여백 추가
  },
  itemImage: {
    width: "90%",
    height: 120, // 이미지 크기 증가
    resizeMode: "cover",
    marginTop: 6, // 이미지 아래로 내리기
    resizeMode: "contain", // 이미지 전체를 비율대로 표시
  },
  itemName: {
    padding: 10,
    fontSize: 16,
    fontWeight: "bold",
  },
  itemPrice: {
    fontSize: 14,
    color: "gray", // 가격 표시 색상
    marginTop: -6,
  },

  detailContainer: {
    flex: 1,
    alignItems: "center",
    padding: 20,
  },
  detailImage: {
    width: 300,
    height: 300,
    resizeMode: "contain",
    borderRadius: 10,
    marginTop: -25,
  },
  bestBadge: {
    backgroundColor: "#8B4513", // 갈색 배경
    paddingVertical: 5,
    paddingHorizontal: 15,
    borderRadius: 11,
    marginBottom: 10,
  },
  bestText: {
    color: "#fff", // 흰색 글씨
    fontSize: 18,
    fontWeight: "bold", // 볼드체
    textAlign: "center",
  },
  detailName: {
    fontSize: 24,
    fontWeight: "bold",
    marginVertical: 10,
    marginTop: 5,
    marginBottom: 20,
  },
  detailPrice: {
    fontSize: 20,
    fontWeight: "bold",
    color: "black",
    marginBottom: 10,
  },
  detailDescription: {
    fontSize: 16,
    textAlign: "center",
    color: "gray",
    marginBottom: 5,
  },
  toggleButton: {
    width: "100%",
    backgroundColor: "#ccc",
    padding: 20,
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 20,
    alignItems: "flex-start", // 텍스트 왼쪽 정렬
  },
  toggleButtonText: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#000",
  },
  nutritionContainer: {
    width: "100%",
    backgroundColor: "#f9f9f9",
    padding: 20,
    borderRadius: 5,
    marginTop: 10,
  },
  nutritionText: {
    fontSize: 16,
    color: "gray",
    fontWeight: "bold",
  },
  footer: {
    position: "absolute",
    bottom: 0,
    width: "100%",
    // backgroundColor: "#fff",
    borderTopWidth: 1,
    borderTopColor: "#ddd",
    paddingVertical: 10,
    alignItems: "center",
  },
  orderButton: {
    width: "100%",
    marginTop: 10,
    backgroundColor: "#4CAF50",
    paddingVertical: 12,
    borderRadius: 5,
  },
  orderButtonText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
    textAlign: "center",
  },
});
