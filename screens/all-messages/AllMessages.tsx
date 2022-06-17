import {
	View,
	Text,
	ScrollView,
	TouchableOpacity,
	RefreshControl,
} from "react-native";
import React, { useEffect, useState } from "react";
import tw from "twrnc";
import { SafeAreaView } from "react-native-safe-area-context";
import { Ionicons } from "@expo/vector-icons";
import { MessageScreenProps } from "types";
import MessageCard from "components/MessageCard";
import { useAppDispatch } from "app/redux/store";
import { getMessages } from "app/redux/message/messageSlice";

type Props = {};

const AllMessages = ({ navigation }: MessageScreenProps<"AllMessage">) => {
	const [listMessages, setListMessages] = useState([]);

	const dispatch = useAppDispatch();

	const [refreshing, setRefreshing] = React.useState(false);

	const pressOnMessageCard = (item: any) => {
		// console.log(item);
		navigation.navigate("DetailMessage", { id: item?.id });
	};

	const getAllMessages = () => {
		dispatch(getMessages())
			.unwrap()
			.then((data: any) => {
				if (data) {
					setListMessages(data);
					setRefreshing(false);
				}
				console.log("data message", data);
			});
	};

	const onRefresh = React.useCallback(() => {
		setRefreshing(true);
		getAllMessages();
	}, []);

	useEffect(() => {
		getAllMessages();
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

			<ScrollView
				style={tw`px-6`}
				refreshControl={
					<RefreshControl
						refreshing={refreshing}
						onRefresh={onRefresh}
					/>
				}
			>
				{listMessages &&
					listMessages.map((item: any) => (
						<MessageCard
							key={item?.id}
							item={item}
							onSelectHandler={pressOnMessageCard}
						/>
					))}
			</ScrollView>
		</SafeAreaView>
	);
};

export default AllMessages;
