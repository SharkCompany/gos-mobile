import React from "react";
import { Text, View } from "components/Themed";
import { SafeAreaView } from "react-native-safe-area-context";
import tw from "twrnc";
import { GooglePlacesAutocomplete } from "react-native-google-places-autocomplete";
import { FlatList, Image, ScrollView } from "react-native";
import { compassIcon, placeIconInSearch } from "assets/images";
import GoogleSearchBar from "components/GoogleSearchBar";
import PlaceOption from "components/PlaceOption";

type Props = {};

const MainSearchScreen = (props: Props) => {
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

	return (
		<SafeAreaView style={tw`flex-1 bg-white px-6 py-6`}>
			<View style={tw`px-4 border-b-2 border-gray-200 pb-6`}>
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

			<ScrollView>
				<View>
					<Text style={tw`font-bold text-lg mt-2 mx-2`}>Gần đây</Text>
					<View>
						<PlaceOption />
						<PlaceOption />
					</View>
				</View>

				<View>
					<Text style={tw`font-bold text-lg mt-2 mx-2`}>
						Địa điểm
					</Text>
					<View>
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
