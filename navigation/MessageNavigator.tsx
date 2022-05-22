import { createNativeStackNavigator } from "@react-navigation/native-stack";
import AllMessages from "screens/all-messages/AllMessages";
import ConversationScreen from "screens/conversation/ConversationScreen";
import PlaceResult from "screens/mapscreen/PlaceResult";
import RideResult from "screens/mapscreen/RideResult";
import { MapSearchScreenParamList, MessageScreenParamsList } from "types";

type Props = {};
const Stack = createNativeStackNavigator<MessageScreenParamsList>();

const MessageNavigator = (props: Props) => {
	return (
		<Stack.Navigator
			screenOptions={{
				headerShown: false,
				animation: "simple_push",
			}}
		>
			<Stack.Screen name="AllMessage" component={AllMessages} />
			<Stack.Screen name="DetailMessage" component={ConversationScreen} />
		</Stack.Navigator>
	);
};

export default MessageNavigator;
