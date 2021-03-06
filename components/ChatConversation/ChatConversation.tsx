import Ionicons from "@expo/vector-icons/Ionicons";
import { API_ENDPOINT } from "app/constants";
import { getSocket } from "app/module/socketModule";
import { getDetailConversation } from "app/redux/message/messageSlice";
import { useAppDispatch } from "app/redux/store";
import { selectUser } from "app/redux/user/userSlice";
import { getUserFromLocal } from "app/utils/AppAsyncStorage";
import { Text, TextTW, ViewTW } from "components/Themed";
import { FixMeLater } from "interfaces/migration";
import { MessageReceieved } from "models/MessageReceived.model";
import React, { useEffect, useState } from "react";
import { ScrollView, TextInput, TouchableOpacity } from "react-native";
import { Avatar } from "react-native-elements";
import { useSelector } from "react-redux";
import { io } from "socket.io-client";

type Props = {};

export default function ChatConversation({ route }: any) {
	const [textInput, setTextInput] = useState("");

	const [socket, setSocket] = useState<any>(null);

	const [currentUserId, setCurrentUserId] = useState<any>();

	const [opponentUser, setOpponentUser] = useState<FixMeLater>();

	const [listMessage, setListMessage] = useState<FixMeLater>([]);

	const userSelector = useSelector(selectUser);

	const [conversationId, setConversationId] = useState();

	const dispatch = useAppDispatch();

	const handleSendMessage = () => {
		if (socket && currentUserId && conversationId && textInput) {
			socket.emit("private_message", {
				userId: currentUserId,
				conversationId: conversationId,
				message: textInput,
			});
			setTextInput("");
		}
	};

	const handleMessageReceived = (data: MessageReceieved) => {
		// setDataReceived(data.message);
		// console.log("Receieve data ne", data);
		setListMessage((messages: FixMeLater) => [...messages, data]);
		console.log(data);
	};

	useEffect(() => {
		getUserFromLocal().then((data) => {
			setCurrentUserId(data?.info.id);
			const socket = io(API_ENDPOINT, {
				reconnectionDelayMax: 10000,
				auth: {
					token: data?.tokens.accessToken,
				},
			});
			socket.connect();
			setSocket(socket);

			socket.on("connect", () => {
				// console.log("connected ne");
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
			// console.log("receive");
			socket.on("message-received", handleMessageReceived);
		}
	}, [socket]);

	useEffect(() => {
		const id = route?.params?.id;
		if (id) {
			setConversationId(id);
			dispatch(getDetailConversation(id))
				.unwrap()
				.then((data: FixMeLater) => {
					setListMessage(data?.messages);
					console.log(data?.messages);
					const opponentUser = data?.user.find(
						(user: FixMeLater) => user.id != userSelector?.id
					);
					setOpponentUser(opponentUser);
					// console.log("detail message data", data);
				});
		}
	}, [route?.params]);

	const ClientMess = ({ mess }: { mess: string }) => (
		<ViewTW className="w-full bg-inherit mb-2 flex items-start bg-gray-100 mb-2">
			<ViewTW className="bg-[#bde952] max-w-[80%] py-3 px-4 rounded-xl ">
				<TextTW className="text-[#29282f]">{mess}</TextTW>
			</ViewTW>
		</ViewTW>
	);

	const MyMess = ({ mess }: { mess: string }) => (
		<ViewTW className=" w-full bg-inherit items-end bg-gray-100 mb-2">
			<ViewTW className="bg-[#7EBC36] max-w-[80%] py-3 px-4 rounded-xl text-white ">
				<TextTW className="text-white">{mess}</TextTW>
			</ViewTW>
		</ViewTW>
	);

	const SystemMess = ({ mess }: { mess: string }) => (
		<ViewTW className=" w-full bg-inherit items-center bg-gray-100 mb-2">
			<ViewTW className="bg-[#c4c4c4] max-w-[80%] py-2 px-4 rounded-xl text-white ">
				<TextTW className="text-white">{mess}</TextTW>
			</ViewTW>
		</ViewTW>
	);

	const Space = () => <ViewTW className="h-10 bg-inherit bg-gray-100" />;

	const MessagesComponent = ({
		listMessage,
	}: {
		listMessage: FixMeLater;
	}) => (
		<ViewTW className="bg-inherit px-2">
			<Space />
			{listMessage &&
				listMessage.map((mess: FixMeLater, index: number) => {
					if (
						mess.senderId != currentUserId &&
						mess?.type === "regular"
					) {
						return <ClientMess mess={mess.message} key={index} />;
					}
					if (
						mess.senderId == currentUserId &&
						mess?.type === "regular"
					) {
						return <MyMess mess={mess.message} key={index} />;
					}
					return <SystemMess mess={mess.message} key={index} />;
				})}
		</ViewTW>
	);

	return (
		<ViewTW className="pt-5">
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
							source={{
								uri: opponentUser && opponentUser?.picture,
							}}
						/>
					</ViewTW>
					<TextTW className="flex-1 font-bold text-lg">
						{opponentUser && opponentUser?.name}
					</TextTW>
				</ViewTW>
				<ViewTW className="flex-1 bg-gray-100">
					<ScrollView className="bg-inherit">
						{listMessage && (
							<MessagesComponent listMessage={listMessage} />
						)}
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
