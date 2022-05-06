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
				latitude: 10.878444577010265,
				longitude: 106.8063227835844,
				// latitude: origin.location.lat,
				// longitude: origin.location.lng,
				latitudeDelta: 0.02,
				longitudeDelta: 0.02,
			}}
		>
			<Marker
				coordinate={{
					latitude: 10.878444577010265,
					longitude: 106.8063227835844,
				}}
				title="Origin"
				description={"Description ne"}
				identifier="origin"
			/>
		</MapView>
	);
};

export default Map;
