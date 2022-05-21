import { ScrollView, StyleSheet } from "react-native";
import React from "react";
import { Text, View } from "components/Themed";
import { SafeAreaView } from "react-native-safe-area-context";
import tw from "twrnc";
import PlaceOption from "components/PlaceOption";
import { useAppSelector } from "app/redux/store";
import { FixMeLater } from "interfaces/migration";
import { RideHistoryScreenProps } from "types";

type Props = {};

const CreateRidesSearchPlaces = ({
	navigation,
}: RideHistoryScreenProps<"CreateRideSearchPlaces">) => {
	const listPlaces = useAppSelector((state) => state.place.listPlaces);

	const selectPlace = (item: FixMeLater) => {
		// console.log(item);
		navigation.navigate("CreateRide", { place: item });
	};
	return (
		<SafeAreaView style={tw`flex-1 bg-white`}>
			<View style={tw`items-center `}>
				<Text style={tw`text-2xl font-bold my-4`}>
					Tất cả các địa điểm
				</Text>
			</View>
			<ScrollView style={tw`px-6`}>
				<View>
					{listPlaces &&
						listPlaces.map(
							(item: FixMeLater, index: FixMeLater) => (
								<PlaceOption
									key={index}
									item={item}
									selectOptionEvent={selectPlace}
								/>
							)
						)}
				</View>
			</ScrollView>
		</SafeAreaView>
	);
};

export default CreateRidesSearchPlaces;

const styles = StyleSheet.create({});
