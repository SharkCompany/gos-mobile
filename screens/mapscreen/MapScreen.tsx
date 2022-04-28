import Ionicons from "@expo/vector-icons/Ionicons";
import { placeIconInSearch } from "assets/images";
import Map from "components/Map";
import PlaceOption from "components/PlaceOption";
import RideOption from "components/RideOption";
import { Text, View } from "components/Themed";
import { FixMeLater } from "interfaces/migration";
import React from "react";
import { FlatList, Image, StyleSheet, TouchableOpacity } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import SwitchSelector from "react-native-switch-selector";
import tw from "twrnc";
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

	const isPlaceSearching = false;

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

			{/* truong hop departure and destination chua co gi  */}
			{isPlaceSearching && (
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
						style={tw`px-4`}
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
			)}

			{/* truong hop depart and des co gia tri rui  */}
			{!isPlaceSearching && (
				<View style={tw`flex-1 mt-5`}>
					<View style={tw`flex-row justify-center mx-6 mb-3`}>
						<TouchableOpacity style={tw`absolute top-0 left-0`}>
							<Ionicons
								name="caret-back-outline"
								size={24}
								color="#BDE952"
							/>
						</TouchableOpacity>

						<Text style={tw`text-xl font-bold`}>
							Chuyến đi gợi ý
						</Text>
					</View>
					<FlatList
						style={tw`px-4`}
						data={[
							{ id: 1 },
							{ id: 2 },
							{ id: 3 },
							{ id: 4 },
							{ id: 4323 },
						]}
						renderItem={RideOption}
					/>
				</View>
			)}
		</SafeAreaView>
	);
};

export default MapScreen;

const styles = StyleSheet.create({});
