import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { HomeScreenParamList, RideHistoryScreenParamsList } from "types";
import Homepage from "screens/homepage/Homepage";
import MapScreen from "screens/mapscreen/MapScreen";
import MainSearchScreen from "screens/places-search-screen/MainSearchScreen";
import RideHistory from "screens/rides/RideHistory";
import CreateRide from "screens/create-ride-screen/CreateRide";
import CreateRidesSearchPlaces from "screens/create-ride-search-places/CreateRidesSearchPlaces";

type Props = {};

const Stack = createNativeStackNavigator<RideHistoryScreenParamsList>();

const RideNavigator = (props: Props) => {
	return (
		<Stack.Navigator screenOptions={{ headerShown: false }}>
			<Stack.Screen name="RideHistory" component={RideHistory} />

			<Stack.Screen name="CreateRide" component={CreateRide} />
			<Stack.Screen
				name="CreateRideSearchPlaces"
				component={CreateRidesSearchPlaces}
			/>
		</Stack.Navigator>
	);
};

export default RideNavigator;

const styles = StyleSheet.create({});
