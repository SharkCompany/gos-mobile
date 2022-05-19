import { View, Text } from "react-native";
import React, { useEffect, useRef } from "react";
import MapView, { Marker } from "react-native-maps";
import tw from "twrnc";
import { useSelector } from "react-redux";
import { useAppSelector } from "app/redux/store";
import MapViewDirections from "react-native-maps-directions";
import { GOOGLE_MAPS_APIKEY } from "@env";

type Props = {};

const Map = (props: Props) => {
	const mapRef = useRef<MapView>(null);

	const destination = useAppSelector((state) => state.ride.destination);
	const departure = useAppSelector((state) => state.ride.departure);

	useEffect(() => {
		if (!departure || !destination) return;

		mapRef.current?.fitToSuppliedMarkers(["departure", "destination"], {
			edgePadding: {
				top: 50,
				right: 50,
				bottom: 50,
				left: 50,
			},
		});
	}, [departure, destination]);

	return (
		<MapView
			ref={mapRef}
			style={tw`flex-1`}
			mapType="mutedStandard"
			initialRegion={{
				latitude: departure
					? departure.geometry.latitude
					: 10.87844457701,
				longitude: departure
					? departure.geometry.longitude
					: 106.80632278358,
				// latitude: origin.location.lat,
				// longitude: origin.location.lng,
				latitudeDelta: 0.01,
				longitudeDelta: 0.01,
			}}
		>
			{departure && destination && (
				<MapViewDirections
					origin={departure.geometry}
					destination={destination.geometry}
					apikey={"GOOGLE_MAPS_APIKEY"}
					strokeWidth={3}
					strokeColor="#7EBC36"
					onError={(e) => console.log(e)}
				/>
			)}

			{departure && (
				<Marker
					coordinate={departure?.geometry}
					title="Điểm xuất phát"
					description={"Nơi bắt đầu di chuyển"}
					identifier="departure"
					pinColor="#7EBC36"
				/>
			)}
			{destination && (
				<Marker
					coordinate={destination.geometry}
					title="Điểm đến"
					description={"Nơi đến"}
					identifier="destination"
					pinColor="#7EBC36"
				/>
			)}
		</MapView>
	);
};

export default Map;
