import { View, Text, ScrollView, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import tw from "twrnc";
import { SafeAreaView } from "react-native-safe-area-context";
import { Ionicons } from "@expo/vector-icons";
import { MessageScreenProps } from "types";
import MessageCard from "components/MessageCard";
import { useEffect } from "react";
import { useAppDispatch } from "app/redux/store";
import { getConversations } from "app/redux/messages/messageSlice";
import { FixMeLater } from "interfaces/migration";

type Props = {};

const AllMessages = ({ navigation }: MessageScreenProps<"AllMessage">) => {
	const dispatch = useAppDispatch();

	const pressOnMessageCard = (item: FixMeLater) => {
		navigation.navigate("DetailMessage", { conversationID: 1 });
	};

	const [listMessages, setListMessages] = useState([]);

	useEffect(() => {
		dispatch(getConversations())
			.unwrap()
			.then((data: FixMeLater) => {
				console.log(data);
				setListMessages(data);
			});
	}, []);

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
