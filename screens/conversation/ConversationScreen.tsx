import ChatConversation from "components/ChatConversation/ChatConversation";
import EditScreenInfo from "components/EditScreenInfo";
import { SafeAreaViewTW, Text, View } from "components/Themed";
import { SafeAreaView, StyleSheet } from "react-native";
import { RootTabScreenProps } from "types";
import io from "socket.io-client";
import { useEffect, useState } from "react";
import { FixMeLater } from "interfaces/migration";
import { useAppDispatch } from "app/redux/store";
import { getDetailConversation } from "app/redux/messages/messageSlice";

const socket = io("https://8a01-115-75-223-58.ngrok.io");

export default function ConversationScreen({
	navigation,
	route,
}: RootTabScreenProps<"Messages">) {
	const dispatch = useAppDispatch();

	const [conversationID, setConversationID] = useState(null);

	const [listMessages, setListMessages] = useState([]);

	const [chatingUser, setChatingUser] = useState(null);

	const sendMessage = (content: FixMeLater) => {
		socket.emit("private_message", {
			message: content,
			senderId: 5,
			conversationId: 1,
		});
	};

	socket.on("connect_error", (err) => {
		console.log("connect error ne", err);
		socket.disconnect();
	});
	socket.on("connect_failed", (err) => console.log("failed connect", err));
	socket.on("disconnect", (err) => console.log("disconect cmnr", err));

	useEffect(() => {
		socket.on("message_recieved", (data) => {
			// console.log(data.message);
		});
		socket.on("connect", () => {
			console.log(socket.id); // true
		});
	}, [socket]);

	useEffect(() => {
		if (route) {
			// console.log("id ne", route.params);
			const paramsList: FixMeLater = route?.params;
			if (paramsList.conversationID) {
				setConversationID(paramsList.conversationID);

				dispatch(getDetailConversation(paramsList.conversationID))
					.unwrap()
					.then((data: any) => {
						console.log("data conversation ne", data);
						// setChatingUser(data.users);
						// setListMessages(data.messages);
					});
			}
		}
	}, [route.params]);

	return (
		<SafeAreaViewTW className="flex-1 bg-white">
			<ChatConversation sendHandler={sendMessage} />
		</SafeAreaViewTW>
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
