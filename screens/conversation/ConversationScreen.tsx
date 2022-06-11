import { getDetailConversation } from "app/redux/messages/messageSlice";
import { useAppDispatch } from "app/redux/store";
import ChatConversation from "components/ChatConversation/ChatConversation";
import { SafeAreaViewTW } from "components/Themed";
import { FixMeLater } from "interfaces/migration";
import { useEffect, useState } from "react";
import { StyleSheet } from "react-native";
import { io } from "socket.io-client";
import { RootTabScreenProps } from "types";

import { socket } from "app/modules/chatModule";

export default function ConversationScreen({
	navigation,
	route,
}: RootTabScreenProps<"Messages">) {
	const dispatch = useAppDispatch();

	const [conversationID, setConversationID] = useState(null);

	const [listMessages, setListMessages] = useState([]);

	const [chatingUser, setChatingUser] = useState(null);

	const sendMessage = (content: FixMeLater) => {
		// sendSocketMessage({
		// 	message: content,
		// 	senderId: 5,
		// 	conversationId: 1,
		// });
	};

	useEffect(() => {
		// socket.on("message_recieved", (data: any) => {
		// 	// console.log(data.message);
		// });

		// socket.on("connect", () => {
		// 	console.log("connect", socket.id); // true
		// });
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
