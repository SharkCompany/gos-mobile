import EditScreenInfo from "components/EditScreenInfo";
import { Text, View } from "components/Themed";
import {
	FlatList,
	ScrollView,
	StyleSheet,
	TouchableOpacity,
} from "react-native";
import { RideHistoryScreenProps, RootTabScreenProps } from "types";
import tw from "twrnc";
import { SafeAreaView } from "react-native-safe-area-context";
import { Ionicons } from "@expo/vector-icons";
import SwitchSelector from "react-native-switch-selector";
import { FixMeLater } from "interfaces/migration";
import PlaceOption from "components/PlaceOption";
import RideOption from "components/RideOption";
import RideHistoryOption from "components/RideHistoryOption";

export default function RideHistory({
	navigation,
}: RideHistoryScreenProps<"RideHistory">) {
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
		<SafeAreaView style={tw`flex-1 bg-white `}>
			<View style={tw`flex-row justify-between my-4 items-center px-6 `}>
				<TouchableOpacity>
					<Ionicons name="caret-back" size={26} color="#7EBC36" />
				</TouchableOpacity>

				<Text style={tw`text-2xl font-bold`}>Lịch sử chuyến đi</Text>

				<TouchableOpacity
					onPress={() => navigation.navigate("CreateRide")}
				>
					<Ionicons name="add-circle" size={26} color="#7EBC36" />
				</TouchableOpacity>
			</View>

			<View style={tw`px-2 items-center mb-4 px-6`}>
				<SwitchSelector
					options={options}
					initial={0}
					onPress={(value: FixMeLater) =>
						console.log(`Call onPress with value: ${value}`)
					}
					buttonColor="#7EBC36"
					selectedColor="#FCF9F9"
					fontSize={14}
					borderColor="#7EBC36"
					hasPadding
				/>
			</View>

			<ScrollView style={tw`px-6`}>
				<RideHistoryOption />
				<RideHistoryOption />
				<RideHistoryOption />
				<RideHistoryOption />
				<RideHistoryOption />
				<RideHistoryOption />
			</ScrollView>
		</SafeAreaView>
	);
}
