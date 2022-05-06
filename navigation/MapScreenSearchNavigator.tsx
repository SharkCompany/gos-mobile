import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { FixMeLater } from "interfaces/migration";
import React from "react";
import PlaceResult from "screens/mapscreen/PlaceResult";
import RideResult from "screens/mapscreen/RideResult";
import { MapSearchScreenParamList } from "types";

type Props = {};

const Stack = createNativeStackNavigator<MapSearchScreenParamList>();

const MapScreenSearchNavigator = (props: Props) => {
	return (
		<Stack.Navigator
			screenOptions={{
				headerShown: false,
				animation: "simple_push",
			}}
		>
			<Stack.Screen name="PlaceResult" component={PlaceResult} />
			<Stack.Screen name="RideResult" component={RideResult} />
		</Stack.Navigator>
	);
};

export default MapScreenSearchNavigator;
