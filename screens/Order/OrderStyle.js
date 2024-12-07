import { StyleSheet } from "react-native";
// 스타일
export default styles = StyleSheet.create({
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
