import ChatConversation from "components/ChatConversation/ChatConversation";
import EditScreenInfo from "components/EditScreenInfo";
import { SafeAreaViewTW, Text, View } from "components/Themed";
import { SafeAreaView, StyleSheet } from "react-native";
import { RootTabScreenProps } from "types";

export default function ConversationScreen({
	navigation,
}: RootTabScreenProps<"Messages">) {
	return (
		<SafeAreaViewTW className="flex-1 bg-white">
			<ChatConversation />
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
