import AntDesign from "@expo/vector-icons/AntDesign";
import Feather from "@expo/vector-icons/Feather";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import FontAwesome6 from "@expo/vector-icons/FontAwesome6";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";

import HomeScreen from "../screens/HomeScreen";
import StampScreen from "../screens/StampScreen";
import OrderStack from "../screens/Order/OrderStack";
import EventScreen from "../screens/EventScreen";
import MyPageScreen from "../screens/MyPageScreen";

//각 페이지의 정보들
export default tabConfig = [
  {
    name: "Home",
    title: "메인 홈",
    component: HomeScreen,
    focusedIcon: "home",
    iconComponent: AntDesign,
    headerShown: true,
  },
  {
    name: "Stamp",
    title: "스탬프",
    component: StampScreen,
    focusedIcon: "stamp",
    iconComponent: FontAwesome6,
    headerShown: true,
  },
  {
    name: "Order",
    title: "주문",
    component: OrderStack,
    focusedIcon: "coffee",
    iconComponent: Feather,
    headerShown: false,
  },
  {
    name: "Event",
    title: "이벤트",
    component: EventScreen,
    focusedIcon: "event",
    iconComponent: MaterialIcons,
    headerShown: true,
  },
  {
    name: "MyPage",
    title: "마이 페이지",
    component: MyPageScreen,
    focusedIcon: "account",
    iconComponent: MaterialCommunityIcons,
    headerShown: true,
  },
];
