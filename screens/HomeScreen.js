import React, { useEffect, useState, useRef } from "react";
import {
  View,
  Text,
  Image,
  FlatList,
  Dimensions,
  StyleSheet,
} from "react-native";

const { width: screenWidth } = Dimensions.get("window");

const data = [
  { id: 1, img: require("../images/banner1.png") },
  { id: 2, img: require("../images/banner2.png") },
  { id: 3, img: require("../images/banner3.png") },
];
const icon = require("../images/icon.png");

const HomeScreen = () => {
  const [currentIndex, setCurrentIndex] = useState(0); // 현재 인덱스 상태
  const flatListRef = useRef(null); // FlatList 참조
  const [isSwiping, setIsSwiping] = useState(false); // 스와이핑 상태

  // 자동으로 스크롤하는 함수
  useEffect(() => {
    if (isSwiping) return; // 스와이핑 중이면 자동 스크롤 중지

    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => {
        const nextIndex = (prevIndex + 1) % data.length; // 인덱스를 순환시키기
        flatListRef.current.scrollToIndex({ index: nextIndex, animated: true }); // FlatList로 이동
        return nextIndex;
      });
    }, 3000); // 3초마다 실행

    // 컴포넌트가 언마운트되면 setInterval을 정리
    return () => clearInterval(interval);
  }, [isSwiping, currentIndex]); // currentIndex가 변경될 때마다 자동 스크롤 다시 실행

  // 사용자가 스와이프를 시작했을 때 호출되는 함수
  const onScrollBeginDrag = () => {
    setIsSwiping(true); // 스와이핑 시작
  };

  // 사용자가 스와이프를 멈췄을 때 호출되는 함수
  const onScrollEndDrag = () => {
    setIsSwiping(false); // 스와이핑 종료 후 자동 스크롤 재시작
  };

  const onScrollToIndexFailed = (info) => {
    console.log(info);
    // 인덱스가 범위를 벗어나면 첫 번째 아이템으로 스크롤
    flatListRef.current.scrollToIndex({ index: 0, animated: false });
  };

  return (
    <View style={styles.container}>
      <View style={styles.iconConatiner}>
        <Image source={icon} style={styles.icon} />
        <Text style={styles.topText}>로봇이 만들어주는</Text>
        <Text style={styles.topText}>따뜻한 커피 한잔☕</Text>
      </View>
      <View style={styles.carouselContainer}>
        <FlatList
          ref={flatListRef}
          horizontal
          data={data}
          renderItem={({ item }) => (
            <View style={styles.imageContainer}>
              <Image
                source={item.img}
                style={styles.image}
                resizeMode="cover"
              />
            </View>
          )}
          keyExtractor={(item) => item.id.toString()}
          pagingEnabled
          showsHorizontalScrollIndicator={false}
          onScrollBeginDrag={onScrollBeginDrag} // 스와이핑 시작 시
          onScrollEndDrag={onScrollEndDrag} // 스와이핑 종료 시
          onScrollToIndexFailed={onScrollToIndexFailed} // 인덱스 오류 처리
          onMomentumScrollEnd={(e) => {
            const contentOffsetX = e.nativeEvent.contentOffset.x; // 현재 스크롤 위치
            const newIndex = Math.floor(contentOffsetX / screenWidth); // 현재 페이지 인덱스 계산
            setCurrentIndex(newIndex); // 인덱스 업데이트
          }}
        />
        {/* 현재 사진 번호와 총 사진 개수를 오른쪽 아래에 표시 */}
        <View style={styles.counterContainer}>
          <Text style={styles.counterText}>
            {currentIndex + 1} / {data.length}
          </Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "white",
  },
  iconConatiner: {
    top: 20, // 상단 여백
    right: 20,
  },
  icon: {
    width: 200,
    height: 60,
    // backgroundColor: "gray",
  },
  topText: {
    paddingLeft: 24,
    marginBottom: 5,
    fontSize: 25,
    color: "black",
  },
  carouselContainer: {
    marginTop: 30,
    height: 200,
    borderRadius: 30,
    backgroundColor: "gray",
    overflow: "hidden",
  },

  imageContainer: {
    justifyContent: "center",
    alignItems: "center",
    width: screenWidth, // 화면 크기에 맞게
    height: 200,
  },
  image: {
    width: "100%", // 화면 너비에 맞게
    height: "100%", // 이미지를 적당한 높이로 설정
    resizeMode: "cover", // 이미지 비율 유지하면서 화면에 맞추기
  },
  counterContainer: {
    position: "absolute",
    bottom: 20,
    right: 20,
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    paddingVertical: 5,
    paddingHorizontal: 10,
    borderRadius: 5,
  },
  counterText: {
    color: "#fff",
    fontSize: 16,
  },
});

export default HomeScreen;
