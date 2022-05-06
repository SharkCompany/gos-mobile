import { View, Text, Image, TouchableOpacity } from "react-native";
import React from "react";
import tw from "twrnc";
import { placeIcon } from "assets/images";
import Ionicons from "@expo/vector-icons/Ionicons";

const RideOption = () => {
	return (
		<View style={tw`px-4 pt-1`}>
			<TouchableOpacity
				style={tw` items-center justify-between mb-2 px-3 shadow-md rounded-md flex-row py-2 bg-white`}
			>
				<View>
					<View style={tw`flex-row items-center mb-1 `}>
						<Image source={placeIcon} style={tw`h-5 w-5 mr-3`} />
						<Text style={tw`font-bold`}>Chuyến đi: </Text>
						<Text>#nguyenkiet</Text>
					</View>
					<View style={tw`flex-row items-center mb-1 `}>
						<Image source={placeIcon} style={tw`h-5 w-5 mr-3`} />
						<Text style={tw`font-bold`}>Khởi hành lúc: </Text>
						<Text>7:00 ngày 29 tháng 9</Text>
					</View>

					<View style={tw`flex-row items-center mb-1`}>
						<Image source={placeIcon} style={tw`h-5 w-5 mr-3`} />
						<Text style={tw`font-bold`}>Tài xế: </Text>
						<Text>Nguyễn Anh Kiệt</Text>
					</View>
				</View>
				<View>
					<Ionicons
						name="caret-forward-outline"
						size={22}
						style={tw`opacity-80`}
						color="#29282F"
					/>
				</View>
			</TouchableOpacity>
		</View>
	);
};

export default RideOption;
