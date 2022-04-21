import { Image } from "react-native";
import React from "react";
import { GooglePlacesAutocomplete } from "react-native-google-places-autocomplete";
import { placeIconInSearch } from "assets/images";
import tw from "twrnc";
import { FixMeLater } from "interfaces/migration";

type Props = {};

const GoogleSearchBar = ({ placeHolder, leftIcon, propsStyle }: FixMeLater) => {
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
					// marginBottom: 4,
					...propsStyle,
				},
				textInput: {
					fontSize: 18,
					color: "#2C294E",
					backgroundColor: "#E5E5E5",
					borderRadius: 10,
					height: "100%",
				},
			}}
			renderLeftButton={() => leftIcon}
			onPress={(data, details = null) => {
				// 'details' is provided when fetchDetails = true
				console.log(data, details);
			}}
			query={{
				// key: GOOGLE_MAPS_APIKEY,
				key: "",
				language: "vn",
			}}
			debounce={400}
		/>
	);
};

export default GoogleSearchBar;
