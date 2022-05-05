import React, { useState } from "react";
import { Text, View } from "components/Themed";
import { SafeAreaView } from "react-native-safe-area-context";
import tw from "twrnc";
import { GooglePlacesAutocomplete } from "react-native-google-places-autocomplete";
import {
	FlatList,
	Image,
	ListRenderItemInfo,
	ScrollView,
	TextInput,
} from "react-native";
import { compassIcon, placeIconInSearch } from "assets/images";
import GoogleSearchBar from "components/GoogleSearchBar";
import PlaceOption from "components/PlaceOption";
import { useNavigation } from "@react-navigation/native";
import { HomeScreenProps } from "types";
import { useEffect } from "react";
import { FixMeLater } from "interfaces/migration";
import InputSearch from "components/InputSearch";
import jsonData from "constants/destination.json";
import { useAppDispatch, useAppSelector } from "app/redux/store";
import { setDeparture, setDestination } from "app/redux/ride/rideSlice";
import { ListItem } from "react-native-elements/dist/list/ListItem";

type Props = {};

const MainSearchScreen = ({ navigation }: HomeScreenProps<"MapScreen">) => {
	const onGobackEvent = () => {
		navigation.navigate("MapScreen");
	};

	const dispatch = useAppDispatch();
	const rideSelector = useAppSelector((state) => state.ride);

	const [inputDeparture, setInputDeparture] = useState("");
	const [inputDestination, setInputDestination] = useState("");

	const [currentInputSelect, setCurrentInputSelect] = useState("departure");

	const listPlaces = useAppSelector((state) => state.place.listPlaces);

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

	const selectPlace = (item: FixMeLater) => {
		if (currentInputSelect === "departure") {
			dispatch(setDeparture(item));
			setInputDeparture(item?.title + ", " + item?.address);
		} else if (currentInputSelect === "destination") {
			dispatch(setDestination(item));
			setInputDestination(item?.title + ", " + item?.address);
		}
	};

	useEffect(() => {
		if (rideSelector.destination && rideSelector.departure) {
			navigation.goBack();
		}

		if (rideSelector?.departure) {
			setInputDeparture(
				rideSelector?.departure?.title +
					", " +
					rideSelector?.departure?.address
			);
			setCurrentInputSelect("destination");
		}
	}, [rideSelector]);

	return (
		<SafeAreaView style={tw`flex-1 bg-white py-6`}>
			<View style={tw`border-b-2 border-gray-200 px-10 pb-6`}>
				<View style={tw`mb-3`}>
					{/* <GoogleSearchBar
						placeHolder="Diem di"
						leftIcon={departureIcon}
					/> */}
					{/* <InputSearch /> */}

					<TextInput
						style={tw`border`}
						value={inputDeparture}
						onChangeText={(text) => setInputDeparture(text)}
						onFocus={() => setCurrentInputSelect("departure")}
					/>
				</View>
				<View>
					<TextInput
						style={tw`border`}
						value={inputDestination}
						onChangeText={(text) => setInputDestination(text)}
						onFocus={() => setCurrentInputSelect("destination")}
					/>
				</View>
			</View>

			<ScrollView style={tw`px-6`}>
				<View>
					{currentInputSelect === "departure" && (
						<Text style={tw`font-bold text-lg mt-2 mx-2`}>
							Bạn đang ở?
						</Text>
					)}
					{currentInputSelect === "destination" && (
						<Text style={tw`font-bold text-lg mt-2 mx-2`}>
							Bạn muốn đến?
						</Text>
					)}
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
				</View>
			</ScrollView>
		</SafeAreaView>
	);
};

export default MainSearchScreen;
