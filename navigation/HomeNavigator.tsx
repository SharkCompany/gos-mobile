import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { HomeScreenParamList } from "types";
import Homepage from "screens/homepage/Homepage";
import Searcher from "screens/searcher/Searcher";

type Props = {};

const Stack = createNativeStackNavigator<HomeScreenParamList>();

const HomeNavigator = (props: Props) => {
	return (
		<Stack.Navigator screenOptions={{ headerShown: false }}>
			<Stack.Screen name="Home" component={Homepage} />
			<Stack.Screen name="Searcher" component={Searcher} />
		</Stack.Navigator>
	);
};

export default HomeNavigator;

const styles = StyleSheet.create({});
