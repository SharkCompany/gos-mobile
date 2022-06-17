import Ionicons from "@expo/vector-icons/Ionicons";
import { API_ENDPOINT } from "app/constants";
import { getSocket } from "app/module/socketModule";
import { getDetailConversation } from "app/redux/message/messageSlice";
import { useAppDispatch } from "app/redux/store";
import { getUserFromLocal } from "app/utils/AppAsyncStorage";
import { Text, TextTW, ViewTW } from "components/Themed";
import { MessageReceieved } from "models/MessageReceived.model";
import React, { useEffect, useState } from "react";
import { ScrollView, TextInput, TouchableOpacity } from "react-native";
import { Avatar } from "react-native-elements";
import { io } from "socket.io-client";

type Props = {};

const mess_data: { id: number; mess: string }[] = [
	{
		id: 1,
		mess: "kakakkaak",
	},
	{
		id: 1,
		mess: "kakakkaak",
	},
	{
		id: 2,
		mess: "fjjfjfjjf",
	},
];

export default function ChatConversation({ route }: any) {
	const [textInput, setTextInput] = useState("");

	const [socket, setSocket] = useState<any>(null);

	const [userId, setUserId] = useState<any>();

	const [userToken, setUserToken] = useState<any>();

	const [conversationId, setConversationId] = useState();

	const [dataReceived, setDataReceived] = useState("");

	const dispatch = useAppDispatch();

	const handleSendMessage = () => {
		if (socket && userId && conversationId && textInput) {
			socket.emit("private_message", {
				senderId: userId,
				conversationId: conversationId,
				message: textInput,
			});
			// setTextInput("");
		}
	};

	const handleMessageReceived = (data: MessageReceieved) => {
		// setDataReceived(data.message);
		console.log("Receieve data ne");
	};

	useEffect(() => {
		getUserFromLocal().then((data) => {
			setUserId(data?.info.id);
			setUserToken(data?.tokens);
			const socket = io(API_ENDPOINT, {
				query: { token: data?.tokens },
				withCredentials: true,
			});
			setSocket(socket);

			socket.on("connect", () => {
				console.log("connected ne");
			});
			socket.on("connect_error", (err: any) => {
				console.log("Connect error ne", err);
				socket.close();
			});
		});
		return () => {
			if (socket) {
				socket.close();
			}
		};
	}, []);

	useEffect(() => {
		if (socket) {
			console.log("receive");
			socket.on("message-received", handleMessageReceived);
		}
	}, [socket]);

	useEffect(() => {
		const id = route?.params?.id;
		if (id) {
			setConversationId(id);
			dispatch(getDetailConversation(id))
				.unwrap()
				.then((data) => {
					console.log("thong tin chat detail", data);
				});
		}
	}, [route?.params]);

	const ClientMess = ({ mess }: { mess: string }) => (
		<ViewTW className="w-full bg-inherit mb-2 flex items-start bg-gray-100">
			<ViewTW className="bg-[#bde952] max-w-[80%] py-3 px-4 rounded-xl ">
				<TextTW className="text-[#29282f]">{mess}</TextTW>
			</ViewTW>
		</ViewTW>
	);

	const MyMess = ({ mess }: { mess: string }) => (
		<ViewTW className=" w-full bg-inherit items-end bg-gray-100">
			<ViewTW className="bg-[#7EBC36] max-w-[80%] py-3 px-4 rounded-xl text-white ">
				<TextTW className="text-white">{mess}</TextTW>
			</ViewTW>
		</ViewTW>
	);

	const Space = () => <ViewTW className="h-10 bg-inherit bg-gray-100" />;

	const MessagesComponent = () => (
		<ViewTW className="bg-inherit px-2">
			<Space />
			{mess_data.map((mess, index) => {
				if (mess.id === 1)
					return <ClientMess mess={mess.mess} key={index} />;
				else return <MyMess mess={mess.mess} key={index} />;
			})}
		</ViewTW>
	);

	return (
		<ViewTW>
			<ViewTW className="w-full h-full bg-red-400  flex">
				<ViewTW className="flex flex-row items-center py-5 w-full   px-4 border-b-2 border-[#7EBC36] bg-white">
					<ViewTW className="mr-2">
						<Avatar
							size={50}
							rounded
							containerStyle={{
								borderColor: "#7EBC36",
								borderStyle: "solid",
								borderWidth: 2,
							}}
							source={{ uri: "https://picsum.photos/300/300" }}
						/>
					</ViewTW>
					<TextTW className="flex-1 font-bold text-lg">
						Nguyễn Anh Kiệt
					</TextTW>
				</ViewTW>
				<ViewTW className="flex-1 bg-gray-100">
					<ScrollView className="bg-inherit">
						<MessagesComponent />
						<Text>{dataReceived}</Text>
					</ScrollView>
				</ViewTW>
				<ViewTW className="px-4 py-4 flex flex-row bg-white">
					<ViewTW className="flex-1">
						<ViewTW className="w-full">
							<TextInput
								value={textInput}
								onChangeText={(text) => setTextInput(text)}
							></TextInput>
						</ViewTW>
					</ViewTW>
					<ViewTW className="">
						<TouchableOpacity onPress={handleSendMessage}>
							<Ionicons
								name="send-outline"
								size={22}
								color="#7EBC36"
							/>
						</TouchableOpacity>
					</ViewTW>
				</ViewTW>
			</ViewTW>
		</ViewTW>
	);
}
