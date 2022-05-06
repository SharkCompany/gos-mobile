import { StyleSheet, TouchableOpacity, Image, FlatList } from "react-native";
import React, { useEffect } from "react";
import tw from "twrnc";
import { HomeScreenProps, MapSearchScreenProps } from "types";
import { FixMeLater } from "interfaces/migration";
import { placeIconInSearch } from "assets/images";
import { Text, View } from "components/Themed";
import PlaceOption from "components/PlaceOption";
import { useAppDispatch, useAppSelector } from "app/redux/store";
import { setDeparture } from "app/redux/ride/rideSlice";

type Props = {};

const PlaceResult = (
	{ navigation }: MapSearchScreenProps<"PlaceResult">,
	props: Props
) => {
	const dispatch = useAppDispatch();
	const rideSelector = useAppSelector((state) => state.ride);

	const onNavigateToMainSearchScreen = () => {
		navigation.navigate("MainSearchScreen");
	};

	const places = useAppSelector((state) => state.place.listPlaces);

	const selectOption = (item: FixMeLater) => {
		dispatch(setDeparture(item));
		onNavigateToMainSearchScreen();
	};

	return (
		<View style={tw`flex-1 `}>
			<TouchableOpacity
				onPress={onNavigateToMainSearchScreen}
				style={tw`mx-6 flex-row my-4 h-12 rounded-lg px-3 items-center bg-gray-100 shadow-md  `}
			>
				<Image source={placeIconInSearch} style={tw`h-8 w-8 mr-3`} />
				<Text style={tw`text-xl text-gray-500`}>Bạn muốn đi đâu? </Text>
			</TouchableOpacity>

			<FlatList
				style={tw`px-4`}
				data={places}
				renderItem={({ item }) => (
					<PlaceOption item={item} selectOptionEvent={selectOption} />
				)}
			/>
		</View>
	);
};

export default PlaceResult;

const styles = StyleSheet.create({});
