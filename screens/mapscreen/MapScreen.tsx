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
import { useNavigation } from "@react-navigation/native";
import { HomeScreenProps } from "types";

type Props = {};

const MapScreen = ({ navigation }: HomeScreenProps<"MapScreen">) => {
	const options = [
		{
			label: "Đi nhờ xe",
			value: "1",
			testID: "switch-one",
			accessibilityLabel: "switch-one",
		},
		{
			label: "Tìm yên sau",
			value: "2",
			testID: "switch-one",
			accessibilityLabel: "switch-one",
		},
	];

	const onNavigateToMainSearchScreen = () => {
		// navigator.navigate("")
		navigation.navigate("MainSearchScreen");
	};

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
					fontSize={14}
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
					onPress={onNavigateToMainSearchScreen}
					style={tw`mx-6 flex-row my-4 h-12 rounded-lg px-3 items-center bg-gray-100 shadow-md  `}
				>
					<Image
						source={placeIconInSearch}
						style={tw`h-8 w-8 mr-3`}
					/>
					<Text style={tw`text-xl text-gray-500`}>
						Bạn muốn đi đâu?{" "}
					</Text>
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
