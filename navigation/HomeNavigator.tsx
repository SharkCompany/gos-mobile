import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { HomeScreenParamList } from "types";
import Homepage from "screens/homepage/Homepage";
import MapScreen from "screens/mapscreen/MapScreen";

type Props = {};

const Stack = createNativeStackNavigator<HomeScreenParamList>();

const HomeNavigator = (props: Props) => {
	return (
		<Stack.Navigator screenOptions={{ headerShown: false }}>
			{/* <Stack.Screen name="Home" component={Homepage} /> */}
			<Stack.Screen name="MapScreen" component={MapScreen} />
		</Stack.Navigator>
	);
};

export default HomeNavigator;

const styles = StyleSheet.create({});
