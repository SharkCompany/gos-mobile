import Ionicons from "@expo/vector-icons/Ionicons";
import { placeIconInSearch } from "assets/images";
import Map from "components/Map";
import PlaceOption from "components/PlaceOption";
import RideOption from "components/RideOption";
import { Text, View } from "components/Themed";
import { FixMeLater } from "interfaces/migration";
import MapScreenSearchNavigator from "navigation/MapScreenSearchNavigator";
import React from "react";
import { FlatList, Image, StyleSheet, TouchableOpacity } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import SwitchSelector from "react-native-switch-selector";
import tw from "twrnc";
import { HomeScreenProps } from "types";
import PlaceResult from "./PlaceResult";

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

			<MapScreenSearchNavigator />
		</SafeAreaView>
	);
};

export default MapScreen;

const styles = StyleSheet.create({});
