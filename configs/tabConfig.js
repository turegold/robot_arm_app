import AntDesign from "@expo/vector-icons/AntDesign";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";

import HomeScreen from "../screens/HomeScreen";
import TodoWriteScreen from "../screens/TodoWriteScreen";
import TodoSearchScreen from "../screens/TOdoSearchScreen";
import TodoListScreen from "../screens/TodoListScreen";
import MyPageScreen from "../screens/MyPageScreen";

//각 페이지의 정보들
export default tabConfig = [
  {
    name: "Home",
    title: "메인 홈",
    component: HomeScreen,
    focusedIcon: "home",
    iconComponent: AntDesign,
  },
  {
    name: "TodoWrite",
    title: "할일 작성",
    component: TodoWriteScreen,
    focusedIcon: "edit",
    iconComponent: AntDesign,
  },
  {
    name: "TodoSearch",
    title: "할일 검색",
    component: TodoSearchScreen,
    focusedIcon: "search1",
    iconComponent: AntDesign,
  },
  {
    name: "TodoList",
    title: "할일 리스트",
    component: TodoListScreen,
    focusedIcon: "th-list",
    iconComponent: FontAwesome,
  },
  {
    name: "MyPage",
    title: "마이 페이지",
    component: MyPageScreen,
    focusedIcon: "account",
    iconComponent: MaterialCommunityIcons,
  },
];

tabConfig.map((routeConfig) => {
  console.log(routeConfig);
});
