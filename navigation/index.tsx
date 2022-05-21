/**
 * If you are not familiar with React Navigation, refer to the "Fundamentals" guide:
 * https://reactnavigation.org/docs/getting-started
 *
 */
import { FontAwesome } from "@expo/vector-icons";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import {
  DarkTheme,
  DefaultTheme,
  NavigationContainer,
} from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { useAppDispatch, useAppSelector } from "app/redux/store";
import FeatherIcon from "components/FeathureIcon";
import * as React from "react";
import { useEffect } from "react";
import { ActivityIndicator, ColorSchemeName } from "react-native";
import InformationEntering from "screens/login/InformationEntering";
import SocialLoginScreen from "screens/login/SocialLoginScreen";
import Colors from "../constants/Colors";
import useColorScheme from "../hooks/useColorScheme";
import Messages from "../screens/messages/Messages";
import ModalScreen from "../screens/ModalScreen";
import NotFoundScreen from "../screens/NotFoundScreen";
import Personal from "../screens/personal/Personal";
import {
  RootStackParamList,
  RootTabParamList,
  RootTabScreenProps,
} from "../types";
import HomeNavigator from "./HomeNavigator";
import LinkingConfiguration from "./LinkingConfiguration";
import RideNavigator from "./RideNavigator";
import jsonData from "constants/destination.json";
import { savePlaces } from "app/redux/places/placeSlice";
import { selectLoading } from "app/redux/setting/settingSlice";
import { TextTW, ViewTW } from "components/Themed";
import AppLoading from "components/AppLoading";

export default function Navigation({
  colorScheme,
}: {
  colorScheme: ColorSchemeName;
}) {
  const dispatch = useAppDispatch();
  const places = useAppSelector((state) => state.place.listPlaces);

  const loadPlaces = () => {
    const data = JSON.parse(JSON.stringify(jsonData));
    dispatch(savePlaces(data));
  };

  useEffect(() => {
    if (places.length === 0) {
      loadPlaces();
    }
  }, []);

  return (
    <NavigationContainer
      linking={LinkingConfiguration}
      theme={colorScheme === "dark" ? DarkTheme : DefaultTheme}
    >
      <AppLoading />
      <RootNavigator />
    </NavigationContainer>
  );
}

/**
 * A root stack navigator is often used for displaying modals on top of all other content.
 * https://reactnavigation.org/docs/modal
 */
const Stack = createNativeStackNavigator<RootStackParamList>();

function RootNavigator() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="SocialLogin" component={SocialLoginScreen} />
      <Stack.Screen name="EnterInfor" component={InformationEntering} />
      <Stack.Screen name="Root" component={BottomTabNavigator} />
      <Stack.Screen
        name="NotFound"
        component={NotFoundScreen}
        options={{ title: "Oops!" }}
      />
      <Stack.Group screenOptions={{ presentation: "modal" }}>
        <Stack.Screen name="Modal" component={ModalScreen} />
      </Stack.Group>
    </Stack.Navigator>
  );
}

/**
 * A bottom tab navigator displays tab buttons on the bottom of the display to switch screens.
 * https://reactnavigation.org/docs/bottom-tab-navigator
 */
const BottomTab = createBottomTabNavigator<RootTabParamList>();

function BottomTabNavigator() {
  const colorScheme = useColorScheme();

  return (
    <BottomTab.Navigator
      initialRouteName="TabOne"
      screenOptions={{
        tabBarActiveTintColor: Colors[colorScheme].tint,
        headerShown: false,
      }}
    >
      <BottomTab.Screen
        name="Homepage"
        component={HomeNavigator}
        options={({ navigation }: RootTabScreenProps<"Homepage">) => ({
          title: "Homepage",
          tabBarIcon: ({ color }) => <FeatherIcon name="home" color={color} />,
          tabBarLabelPosition: "below-icon",
          tabBarLabel: "Trang chủ",
        })}
      />
      <BottomTab.Screen
        name="Rides"
        component={RideNavigator}
        options={{
          title: "Rides",
          tabBarLabel: "Chuyến đi",
          tabBarIcon: ({ color }) => <FeatherIcon name="list" color={color} />,
          tabBarLabelPosition: "below-icon",
        }}
      />
      <BottomTab.Screen
        name="Messages"
        component={Messages}
        options={{
          title: "Messages",
          tabBarLabel: "Tin nhắn",
          tabBarIcon: ({ color }) => (
            <FeatherIcon name="message-circle" color={color} />
          ),
          tabBarLabelPosition: "below-icon",
        }}
      />
      <BottomTab.Screen
        name="Personal"
        component={Personal}
        options={{
          title: "Personal",
          tabBarLabel: "Thông tin cá nhân",
          tabBarIcon: ({ color }) => <FeatherIcon name="user" color={color} />,
          tabBarLabelPosition: "below-icon",
        }}
      />
    </BottomTab.Navigator>
  );
}

/**
 * You can explore the built-in icon families and icons on the web at https://icons.expo.fyi/
 */
function TabBarIcon(props: {
  name: React.ComponentProps<typeof FontAwesome>["name"];
  color: string;
}) {
  return <FontAwesome size={30} style={{ marginBottom: -3 }} {...props} />;
}
