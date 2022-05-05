import React, { useState } from "react";
import { Text, View } from "components/Themed";
import { SafeAreaView } from "react-native-safe-area-context";
import tw from "twrnc";
import { GooglePlacesAutocomplete } from "react-native-google-places-autocomplete";
import { FlatList, Image, ListRenderItemInfo, ScrollView } from "react-native";
import { compassIcon, placeIconInSearch } from "assets/images";
import GoogleSearchBar from "components/GoogleSearchBar";
import PlaceOption from "components/PlaceOption";
import { useNavigation } from "@react-navigation/native";
import { HomeScreenProps } from "types";
import { useEffect } from "react";
import { FixMeLater } from "interfaces/migration";

type Props = {};

const MainSearchScreen = ({ navigation }: HomeScreenProps<"MapScreen">) => {
	const onGobackEvent = () => {
		navigation.navigate("MapScreen");
	};

	const [listPlaces, setListPlaces] = useState<FixMeLater>([]);

	const departureIcon = (
		<Image
			source={compassIcon}
			style={tw`h-8 w-8 ml-3  self-center content-center`}
		/>
	);

	const destinationIcon = (
		<Image
			source={placeIconInSearch}
			style={tw`h-8 w-8 ml-3  self-center content-center`}
		/>
	);

	useEffect(() => {
		const getStaticPlaces = () => {
			fetch;
		};
	}, []);

	return (
		<SafeAreaView style={tw`flex-1 bg-white py-6`}>
			<View style={tw`border-b-2 border-gray-200 px-10 pb-6`}>
				<View style={tw`mb-3`}>
					<GoogleSearchBar
						placeHolder="Diem di"
						leftIcon={departureIcon}
					/>
				</View>
				<View>
					<GoogleSearchBar
						placeHolder="Diem den"
						leftIcon={destinationIcon}
					/>
				</View>
			</View>

			<ScrollView style={tw`px-6`}>
				<View>
					<Text style={tw`font-bold text-lg mt-2 mx-2`}>
						Địa điểm
					</Text>
					<View>
						<PlaceOption />
						<PlaceOption />
						<PlaceOption />
						<PlaceOption />
						<PlaceOption />
					</View>
				</View>
			</ScrollView>
		</SafeAreaView>
	);
};

export default MainSearchScreen;
