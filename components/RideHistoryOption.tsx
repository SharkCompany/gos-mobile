import { View, Text, Image, TouchableOpacity } from "react-native";
import React from "react";
import tw from "twrnc";
import { placeIcon } from "assets/images";
import Ionicons from "@expo/vector-icons/Ionicons";
import { FixMeLater } from "interfaces/migration";

const RideHistoryOption = ({ selectHandler }: FixMeLater) => {
	const onSelectItem = () => {
		if (selectHandler) {
			selectHandler();
		}
	};

	return (
		<View style={tw`px-2 pt-1`}>
			<TouchableOpacity
				style={tw` items-center justify-between mb-2 px-4 shadow-md rounded-md flex-row py-2 bg-white`}
				onPress={onSelectItem}
			>
				<View>
					<View style={tw`flex-row items-center mb-1 `}>
						<Text style={tw`font-bold`}>Điểm đi: </Text>
						<Text>#nguyenkiet</Text>
					</View>
					<View style={tw`flex-row items-center mb-1 `}>
						<Text style={tw`font-bold`}>Điểm đến: </Text>
						<Text>7:00 ngày 29 tháng 9</Text>
					</View>

					<View style={tw`flex-row items-center mb-2`}>
						<Text style={tw`font-bold`}>Khởi hành lúc: </Text>
						<Text>Nguyễn Anh Kiệt</Text>
					</View>

					<View style={tw`flex-row items-center mb-2`}>
						<Text></Text>
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
				{/* <View
					style={tw`flex-row items-end mb-1 bg-[#BDE952] px-2 rounded-full absolute right-4 bottom-2`}
				>
					<Text>Đã kết nối</Text>
				</View> */}
				{/* 
				<View
					style={tw`flex-row items-end mb-1 bg-[#F1F673] px-2 rounded-full absolute right-4 bottom-2`}
				>
					<Text>Đang chờ tài xế</Text>
				</View> */}

				<View
					style={tw`flex-row items-end mb-1 bg-[#7EBC36] px-2 rounded-full absolute right-4 bottom-2`}
				>
					<Text>Đã hoàn thành</Text>
				</View>
			</TouchableOpacity>
		</View>
	);
};

export default RideHistoryOption;
