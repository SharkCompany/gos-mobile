import {
	FlatList,
	Image,
	ScrollView,
	StyleSheet,
	Touchable,
	TouchableOpacity,
} from "react-native";
import React from "react";
import { Text, View } from "components/Themed";
import Map from "components/Map";
import tw from "twrnc";
import { SafeAreaView } from "react-native-safe-area-context";
import SwitchSelector from "react-native-switch-selector";
import { FixMeLater } from "interfaces/migration";
import Ionicons from "@expo/vector-icons/Ionicons";
import { GooglePlacesAutocomplete } from "react-native-google-places-autocomplete";
import { GOOGLE_MAPS_APIKEY } from "@env";
import PlaceOption from "components/PlaceOption";
import { placeIconInSearch } from "assets/images";

type Props = {};

const MapScreen = (props: Props) => {
	const options = [
		{
			label: "Tìm kiếm",
			value: "1",
			testID: "switch-one",
			accessibilityLabel: "switch-one",
		},
		{
			label: "Có sẵn",
			value: "1.5",
			testID: "switch-one-thirty",
			accessibilityLabel: "switch-one-thirty",
		},
	];

	return (
		<SafeAreaView style={tw`flex-1 bg-white`}>
			<View style={tw`flex-row justify-between h-1/10 items-center px-6`}>
				<TouchableOpacity>
					<Ionicons name="caret-back" size={26} color="#7EBC36" />
				</TouchableOpacity>

				<SwitchSelector
					options={options}
					initial={0}
					onPress={(value: FixMeLater) =>
						console.log(`Call onPress with value: ${value}`)
					}
					style={{ width: "55%" }}
					buttonColor="#7EBC36"
					selectedColor="#FCF9F9"
					fontSize={16}
					borderColor="#7EBC36"
					hasPadding
				/>

				<TouchableOpacity>
					<Ionicons name="add-circle" size={26} color="#7EBC36" />
				</TouchableOpacity>
			</View>
			<View style={tw`h-2/5`}>
				<Map />
			</View>
			<View style={tw`flex-1 `}>
				<TouchableOpacity
					style={tw`mx-6 flex-row my-4 h-12 rounded-lg px-3 items-center bg-gray-100 shadow-md  `}
				>
					<Image
						source={placeIconInSearch}
						style={tw`h-8 w-8 mr-3`}
					/>
					<Text style={tw`text-xl text-gray-500`}>
						Bạn muốn đi đâu?{" "}
					</Text>
					{/* <GooglePlacesAutocomplete
						placeholder="Where from ?"
						styles={{
							container: {
								flex: 0,
								marginTop: 12,
							},
							textInput: {
								fontSize: 18,
								backgroundColor: "#E5E5E5",
								color: "#96989B",
							},
						}}
						onPress={(data, details = null) => {
							// 'details' is provided when fetchDetails = true
							console.log(data, details);
						}}
						query={{
							// key: GOOGLE_MAPS_APIKEY,
							key: "",
							language: "vn",
						}}
						debounce={400}
					/> */}
				</TouchableOpacity>

				<FlatList
					style={tw`px-6`}
					data={[
						{ id: 1 },
						{ id: 2 },
						{ id: 3 },
						{ id: 4 },
						{ id: 4323 },
					]}
					renderItem={PlaceOption}
				/>
			</View>
		</SafeAreaView>
	);
};

export default MapScreen;

const styles = StyleSheet.create({});
