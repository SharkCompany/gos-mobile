import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { HomeScreenParamList } from "types";
import Homepage from "screens/homepage/Homepage";
import MapScreen from "screens/mapscreen/MapScreen";
import MainSearchScreen from "screens/places-search-screen/MainSearchScreen";

type Props = {};

const Stack = createNativeStackNavigator<HomeScreenParamList>();

const HomeNavigator = (props: Props) => {
	return (
		<Stack.Navigator screenOptions={{ headerShown: false }}>
			<Stack.Screen name="Home" component={Homepage} />
			<Stack.Screen name="MapScreen" component={MapScreen} />
			<Stack.Group
				screenOptions={{
					animation: "fade_from_bottom",
					presentation: "modal",
				}}
			>
				<Stack.Screen
					name="MainSearchScreen"
					component={MainSearchScreen}
				/>
			</Stack.Group>
		</Stack.Navigator>
	);
};

export default HomeNavigator;

const styles = StyleSheet.create({});
