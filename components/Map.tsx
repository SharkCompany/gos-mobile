import { View, Text } from "react-native";
import React, { useRef } from "react";
import MapView, { Marker } from "react-native-maps";
import tw from "twrnc";

type Props = {};

const Map = (props: Props) => {
	const mapRef = useRef(null);

	return (
		<MapView
			ref={mapRef}
			style={tw`flex-1`}
			mapType="mutedStandard"
			initialRegion={{
				latitude: 37.78825,
				longitude: -122.4324,
				// latitude: origin.location.lat,
				// longitude: origin.location.lng,
				latitudeDelta: 0.008,
				longitudeDelta: 0.008,
			}}
		>
			{/* <Marker
				coordinate={{
					latitude: 37.78825,
					longitude: -122.4324,
				}}
				title="Origin"
				description={"Description ne"}
				identifier="origin"
			/> */}
		</MapView>
	);
};

export default Map;
