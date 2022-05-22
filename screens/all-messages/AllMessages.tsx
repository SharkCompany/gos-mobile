import { View, Text, ScrollView, TouchableOpacity } from "react-native";
import React from "react";
import tw from "twrnc";
import { SafeAreaView } from "react-native-safe-area-context";
import { Ionicons } from "@expo/vector-icons";
import { MessageScreenProps } from "types";
import MessageCard from "components/MessageCard";

type Props = {};

const AllMessages = ({ navigation }: MessageScreenProps<"AllMessage">) => {
	const pressOnMessageCard = () => {
		navigation.navigate("DetailMessage");
	};

	return (
		<SafeAreaView style={tw`flex-1 bg-white `}>
			<View style={tw`px-6`}>
				<View style={tw`justify-center my-4  `}>
					<View style={tw`items-center`}>
						<Text style={tw`text-2xl font-bold`}>
							Tất cả tin nhắn
						</Text>
					</View>

					<TouchableOpacity
						style={tw`absolute `}
						onPress={() => navigation.goBack()}
					>
						<Ionicons name="caret-back" size={26} color="#7EBC36" />
					</TouchableOpacity>
				</View>
			</View>

			<ScrollView style={tw`px-6`}>
				<MessageCard onSelectHandler={pressOnMessageCard} />
				<MessageCard onSelectHandler={pressOnMessageCard} />
				<MessageCard onSelectHandler={pressOnMessageCard} />
			</ScrollView>
		</SafeAreaView>
	);
};

export default AllMessages;
