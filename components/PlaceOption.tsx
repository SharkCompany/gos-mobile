import {
	View,
	Text,
	Image,
	TouchableOpacity,
	ListRenderItemInfo,
} from "react-native";
import React from "react";
import tw from "twrnc";
import { placeIcon } from "assets/images";
import Ionicons from "@expo/vector-icons/Ionicons";
import { FixMeLater } from "interfaces/migration";
import { useNavigation } from "@react-navigation/native";

type Props = {};

type Place = {
	id?: number;
	place?: string;
	description?: string;
};

const PlaceOption = ({ item, behavior, goBackHandler }: FixMeLater) => {
	const handleSelectPlace = () => {
		if (behavior === "to-ride-result") {
			// Set redux dep hoac des o day
			if (goBackHandler) {
				goBackHandler();
			}
		}
	};

	return (
		<View style={tw`px-2 pt-1 mb-2`}>
			<TouchableOpacity
				onPress={handleSelectPlace}
				style={tw`flex-row bg-white items-center h-22 px-3 shadow-md rounded-md`}
			>
				<View>
					<Image source={placeIcon} style={tw`h-8 w-8 mr-3`} />
				</View>
				<View style={tw`flex-1 justify-center mr-2`}>
					<Text style={tw`text-lg font-bold `}>{item?.title}</Text>
					<Text style={tw``}>{item?.address}</Text>
				</View>
				<View style={tw``}>
					<Ionicons
						name="caret-forward-outline"
						size={22}
						color="#96989B"
					/>
				</View>
			</TouchableOpacity>
		</View>
	);
};

export default PlaceOption;
