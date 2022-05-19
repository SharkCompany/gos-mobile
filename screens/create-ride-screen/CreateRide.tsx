import EditScreenInfo from "components/EditScreenInfo";
import { Text, View } from "components/Themed";
import {
	FlatList,
	ScrollView,
	StyleSheet,
	TextInput,
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
import InputWithLabel from "components/InputWithLabel";
import MainButton from "components/MainButton";

export default function CreateRide({
	navigation,
}: RideHistoryScreenProps<"RideHistory">) {
	const s = require("../../globalStyles");

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
			<View style={tw`justify-center h-1/10 `}>
				<View style={tw`items-center`}>
					<Text style={tw`text-2xl font-bold`}>Tạo chuyến đi</Text>
				</View>

				<TouchableOpacity style={tw`absolute `}>
					<Ionicons name="caret-back" size={26} color="#7EBC36" />
				</TouchableOpacity>
			</View>

			<View>
				<InputWithLabel label="Điểm xuất phát" />
				<InputWithLabel label="Điểm đến" />
				<InputWithLabel label="Giá" />
				{/* <InputWithLabel label="Thời gian" /> */}
			</View>
			<View style={tw`items-center`}>
				<View style={tw`w-[50%]`}>
					<MainButton>Tạo chuyến đi</MainButton>
				</View>
			</View>
		</SafeAreaView>
	);
}
