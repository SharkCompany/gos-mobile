import { TouchableOpacity, Image, StyleSheet } from "react-native";
import React from "react";
import tw from "twrnc";
import { FixMeLater } from "interfaces/migration";
import { avatarTest } from "assets/images";
import { Text, View } from "components/Themed";

type Props = {
	title?: string;
	eventHandler?: FixMeLater;
	user?: FixMeLater;
	content?: string;
};

const NotificationTag = (props: Props) => {
	return (
		<View style={tw`px-4 pt-1`}>
			<TouchableOpacity
				style={tw`h-18 w-full flex-row items-center rounded-3xl bg-white shadow-md  mb-2 px-4`}
			>
				<Image
					source={avatarTest}
					style={tw`h-12 w-12 rounded-full mr-4`}
				/>
				<View style={tw`justify-between`}>
					<Text>{props.content}</Text>
					<Text style={tw`opacity-50 mt-1`}>10 phút trước</Text>
				</View>
				<View
					style={tw`w-3 h-3 bg-[#BDE952] rounded-full absolute top-4 right-6`}
				/>
			</TouchableOpacity>
		</View>
	);
};

export default NotificationTag;
