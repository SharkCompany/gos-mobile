import { StyleSheet, TouchableOpacity, Image, FlatList } from "react-native";
import React, { useEffect } from "react";
import tw from "twrnc";
import { HomeScreenProps } from "types";
import { FixMeLater } from "interfaces/migration";
import { placeIconInSearch } from "assets/images";
import { Text, View } from "components/Themed";
import PlaceOption from "components/PlaceOption";

type Props = {};

const PlaceResult = ({ navigation }: FixMeLater, props: Props) => {
	useEffect(() => {
		// Cho nay get data dua nao thang redux ne
	}, []);

	const onNavigateToMainSearchScreen = () => {
		// navigator.navigate("")
		navigation.navigate("MainSearchScreen");
	};

	const data = [{ id: 1 }, { id: 2 }, { id: 323 }, { id: 123 }];

	return (
		<View style={tw`flex-1 `}>
			<TouchableOpacity
				onPress={onNavigateToMainSearchScreen}
				style={tw`mx-6 flex-row my-4 h-12 rounded-lg px-3 items-center bg-gray-100 shadow-md  `}
			>
				<Image source={placeIconInSearch} style={tw`h-8 w-8 mr-3`} />
				<Text style={tw`text-xl text-gray-500`}>Bạn muốn đi đâu? </Text>
			</TouchableOpacity>

			<FlatList style={tw`px-4`} data={data} renderItem={PlaceOption} />
		</View>
	);
};

export default PlaceResult;

const styles = StyleSheet.create({});
