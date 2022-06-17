import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { HomeScreenParamList } from "types";
import Homepage from "screens/homepage/Homepage";
import MapScreen from "screens/mapscreen/MapScreen";
import MainSearchScreen from "screens/places-search-screen/MainSearchScreen";
import RideDetail from "screens/ride-detail/RideDetail";
import ConversationScreen from "screens/conversation/ConversationScreen";
import ConnectSuccessfully from "screens/ConnectSuccessfully";
import CreateRide from "screens/create-ride-screen/CreateRide";
import CreateRidesSearchPlaces from "screens/create-ride-search-places/CreateRidesSearchPlaces";

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
			<Stack.Screen name="RideDetail" component={RideDetail} />
			<Stack.Screen
				name="ConnectSucessfully"
				component={ConnectSuccessfully}
			/>
			<Stack.Screen
				name="ConversationScreen"
				component={ConversationScreen}
			/>
			<Stack.Screen name="CreateRide" component={CreateRide} />

			<Stack.Group
				screenOptions={{
					animation: "fade_from_bottom",
					presentation: "modal",
				}}
			>
				<Stack.Screen
					name="CreateRideSearchPlaces"
					component={CreateRidesSearchPlaces}
				/>
			</Stack.Group>
		</Stack.Navigator>
	);
};

export default HomeNavigator;

const styles = StyleSheet.create({});
