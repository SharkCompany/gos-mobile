import { StyleSheet, Touchable, TouchableOpacity } from "react-native";
import React from "react";
import { Text, View } from "components/Themed";
import Map from "components/Map";
import tw from "twrnc";
import { SafeAreaView } from "react-native-safe-area-context";
import SwitchSelector from "react-native-switch-selector";
import { FixMeLater } from "interfaces/migration";
import Ionicons from "@expo/vector-icons/Ionicons";

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
				<Text></Text>
			</View>
		</SafeAreaView>
	);
};

export default MapScreen;

const styles = StyleSheet.create({});
