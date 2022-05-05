import { Image } from "react-native";
import React from "react";
import { GooglePlacesAutocomplete } from "react-native-google-places-autocomplete";
import { placeIconInSearch } from "assets/images";
import tw from "twrnc";
import { FixMeLater } from "interfaces/migration";
import { GOOGLE_MAPS_APIKEY } from "@env";

type Props = {};

const GoogleSearchBar = ({
	placeHolder,
	leftIcon,
	propsStyle,
	onPressSearch,
}: FixMeLater) => {
	const handlePressSearch = (
		data: FixMeLater,
		details: FixMeLater
	): FixMeLater => {
		// console.log(data.description);
		console.log(details.geometry);
	};

	return (
		<GooglePlacesAutocomplete
			placeholder={placeHolder}
			styles={{
				container: {
					backgroundColor: "#E5E5E5",
					justifyContent: "center",
					alignItems: "center",
					flex: 0,
					borderRadius: 10,
					...propsStyle,
				},
				textInput: {
					fontSize: 18,
					color: "#2C294E",
					backgroundColor: "#E5E5E5",
					borderRadius: 10,
					height: "100%",
				},
				// listView: {
				// 	backgroundColor: "green",
				// },
			}}
			renderLeftButton={() => leftIcon}
			// onPress={handlePressSearch as FixMeLater}
			onPress={(data, details = null) => {
				console.log(details?.geometry.location);
				console.log(data.description);
			}}
			query={{
				// key: GOOGLE_MAPS_APIKEY,
				key: "",
				language: "en",
			}}
			fetchDetails={true}
			enablePoweredByContainer={false}
			debounce={1000}
			nearbyPlacesAPI="GooglePlacesSearch"
			onFail={(error) => {
				console.log(error);
			}}
			onNotFound={() => {
				console.log("not found");
			}}
			minLength={2}
		/>
	);
};

export default GoogleSearchBar;
