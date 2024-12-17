import styles from "./OrderStyle";
import { Text, Image, FlatList, TouchableOpacity } from "react-native";
import drinks from "./drinks";

// 음료 리스트 페이지
export default DrinkListScreen = ({ navigation }) => {
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
