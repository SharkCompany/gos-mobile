import { setDeparture, setDestination } from "app/redux/ride/rideSlice";
import { useAppDispatch, useAppSelector } from "app/redux/store";
import InputSearch from "components/InputSearch";
import PlaceOption from "components/PlaceOption";
import { Text, View } from "components/Themed";
import { FixMeLater } from "interfaces/migration";
import React, { useEffect, useState } from "react";
import { ScrollView } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import tw from "twrnc";
import { MapSearchScreenProps } from "types";

type Props = {};

const MainSearchScreen = ({
	navigation,
}: MapSearchScreenProps<"MainSearchScreen">) => {
	const dispatch = useAppDispatch();
	const rideSelector = useAppSelector((state) => state.ride);

	const [inputDeparture, setInputDeparture] = useState("");
	const [inputDestination, setInputDestination] = useState("");

	const [currentInputSelect, setCurrentInputSelect] = useState("departure");

	const listPlaces = useAppSelector((state) => state.place.listPlaces);

	const handleInputTextChange = () => {};

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
			navigation.navigate("RideResult");
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
				<View style={tw`mb-4`}>
					{/* <GoogleSearchBar
						placeHolder="Diem di"
						leftIcon={departureIcon}
					/> */}
					<InputSearch
						identify="departure"
						placeHolder="Điểm đi"
						value={inputDeparture}
						setInputTextChange={setCurrentInputSelect}
						focusHandler={setCurrentInputSelect}
					/>
				</View>
				<View>
					<InputSearch
						identify="destination"
						placeHolder="Điểm đến"
						value={inputDestination}
						setInputTextChange={setCurrentInputSelect}
						focusHandler={setCurrentInputSelect}
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
