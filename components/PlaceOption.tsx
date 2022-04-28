import { View, Text, Image, TouchableOpacity } from "react-native";
import React from "react";
import tw from "twrnc";
import { placeIcon } from "assets/images";
import Ionicons from "@expo/vector-icons/Ionicons";
type Props = {};

const PlaceOption = (props: Props) => {
	return (
		<View style={tw`px-2 pt-1 mb-2`}>
			<TouchableOpacity
				style={tw`flex-row bg-white items-center h-22 px-3 shadow-md rounded-md`}
			>
				<View>
					<Image source={placeIcon} style={tw`h-8 w-8 mr-3`} />
				</View>
				<View style={tw`flex-1 justify-center mr-2`}>
					<Text style={tw`text-lg font-bold `}>Ki tuc xa khu A</Text>
					<Text style={tw``}>
						161 Nguyen Anh Kiet, phuong Binh Bong, Tp Hcm
					</Text>
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
