import EditScreenInfo from "components/EditScreenInfo";
import { Text, View } from "components/Themed";
import {
	FlatList,
	ScrollView,
	StyleSheet,
	TouchableOpacity,
} from "react-native";
import { RootTabScreenProps } from "types";
import tw from "twrnc";
import { SafeAreaView } from "react-native-safe-area-context";
import { Ionicons } from "@expo/vector-icons";
import SwitchSelector from "react-native-switch-selector";
import { FixMeLater } from "interfaces/migration";
import PlaceOption from "components/PlaceOption";
import RideOption from "components/RideOption";
import RideHistoryOption from "components/RideHistoryOption";

export default function Rides({ navigation }: RootTabScreenProps<"Rides">) {
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
		<SafeAreaView style={tw`flex-1 bg-white px-6`}>
			<View style={tw`flex-row justify-between h-1/10 items-center `}>
				<TouchableOpacity>
					<Ionicons name="caret-back" size={26} color="#7EBC36" />
				</TouchableOpacity>

				<Text style={tw`text-2xl font-bold`}>Lịch sử chuyến đi</Text>

				<TouchableOpacity>
					<Ionicons name="add-circle" size={26} color="#7EBC36" />
				</TouchableOpacity>
			</View>

			<ScrollView>
				<RideHistoryOption />
				<RideHistoryOption />
			</ScrollView>
		</SafeAreaView>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		alignItems: "center",
		justifyContent: "center",
	},
	title: {
		fontSize: 20,
		fontWeight: "bold",
	},
	separator: {
		marginVertical: 30,
		height: 1,
		width: "80%",
	},
});
