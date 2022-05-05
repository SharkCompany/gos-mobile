import { FlatList, TouchableOpacity } from "react-native";
import React, { useEffect } from "react";
import tw from "twrnc";
import { Text, View } from "components/Themed";
import { Ionicons } from "@expo/vector-icons";
import RideOption from "components/RideOption";

type Props = {};

const RideResult = (props: Props) => {
	// useEffect(() => {
	// 	// Cho nay get data dua nao thang redux ne
	// }, []);

	return (
		<View style={tw`flex-1`}>
			<View style={tw`flex-row justify-center mx-6 mb-3`}>
				<TouchableOpacity style={tw`absolute top-0 left-0`}>
					<Ionicons
						name="caret-back-outline"
						size={24}
						color="#BDE952"
					/>
				</TouchableOpacity>

				<Text style={tw`text-xl font-bold`}>Chuyến đi gợi ý</Text>
			</View>
			<FlatList
				style={tw`px-4`}
				data={[
					{ id: 1 },
					{ id: 2 },
					{ id: 3 },
					{ id: 4 },
					{ id: 4323 },
				]}
				renderItem={RideOption}
			/>
		</View>
	);
};

export default RideResult;
