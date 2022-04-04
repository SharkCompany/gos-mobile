import EditScreenInfo from "components/EditScreenInfo";
import { Text, View } from "components/Themed";
import {
	Button,
	FlatList,
	ScrollView,
	StyleSheet,
	TouchableOpacity,
} from "react-native";
import { HomeScreenProps, RootTabScreenProps } from "types";
import tw from "twrnc";
import { MaterialCommunityIcons, MaterialIcons } from "@expo/vector-icons";
import NotificationTag from "components/NotificationTag";

export default function Homepage({ navigation }: HomeScreenProps<"Home">) {
	const handlePressDiNhoXe = () => {
		navigation.navigate("Searcher");
	};

	const handleTimYenSau = () => {
		navigation.navigate("Searcher");
	};

	return (
		<View style={tw`flex-1 items-center`}>
			<View
				style={tw`h-[50%] bg-[#7EBC36] w-full pt-10 px-6 rounded-b-3xl`}
			>
				<Text style={tw`text-2xl font-bold`}>Welcome Nguyen Kiet</Text>
				<View style={tw`bg-inherit items-center justify-center h-full`}>
					<Text>Banner gi do </Text>
				</View>
			</View>
			<View style={tw`w-full px-6 flex-row justify-between px-10`}>
				<TouchableOpacity
					onPress={handlePressDiNhoXe}
					style={tw`w-36 h-44 bg-white -mt-20 rounded-2xl items-center justify-center shadow-lg space-y-1`}
				>
					<MaterialCommunityIcons
						name="motorbike"
						size={80}
						color="#7EBC36"
					/>

					<Text style={tw`text-xl font-bold text-[#7EBC36]`}>
						Đi nhờ xe
					</Text>
				</TouchableOpacity>
				<TouchableOpacity
					onPress={handleTimYenSau}
					style={tw`w-36 h-44 bg-white -mt-20 rounded-2xl items-center justify-center shadow-lg`}
				>
					<MaterialIcons name="person" size={80} color="#7EBC36" />
					<Text style={tw`text-xl font-bold text-[#7EBC36]`}>
						Tìm yên sau
					</Text>
				</TouchableOpacity>
			</View>
			<View style={tw`mt-8 items-start w-full px-6 `}>
				<Text style={tw`text-2xl font-bold`}>Thông báo</Text>
				<NotificationTag content="Bạn và Kiệt đã kết nối với nhau" />

				<FlatList
					style={tw`w-full`}
					data={[
						{ id: 1 },
						{ id: 2 },
						{ id: 3 },
						{ id: 22 },
						{ id: 2232 },
					]}
					renderItem={({ item }) => (
						<NotificationTag content="Bạn và Kiệt đã kết nối với nhau" />
					)}
					keyExtractor={(item: any) => item.id}
					scrollToOverflowEnabled
					scrollEnabled
				/>
			</View>
		</View>
	);
}
