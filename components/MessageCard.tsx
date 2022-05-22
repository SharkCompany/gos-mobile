import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import tw from "twrnc";
import { avatarTest } from "assets/images";
import { FixMeLater } from "interfaces/migration";

type Props = {};

const MessageCard = ({ item, onSelectHandler }: FixMeLater) => {
	const onPressHandler = () => {
		if (onSelectHandler) {
			onSelectHandler(item);
		}
	};

	return (
		<View style={tw`px-2 pt-1 mb-2`}>
			<TouchableOpacity
				style={tw`py-2 w-full flex-row items-center rounded-3xl bg-white shadow-md  mb-2 px-4`}
				onPress={onPressHandler}
			>
				<Image
					source={avatarTest}
					style={tw`h-12 w-12 rounded-full mr-4`}
				/>
				<View style={tw`justify-between`}>
					<View style={tw`flex-row mt-1`}>
						<Text style={tw`mr-2 font-bold`}>Chuyến đi:</Text>
						<Text style={tw``}>#a66asdh</Text>
					</View>
					<Text style={tw`font-bold mt-1`}>
						{item?.name ? item?.name : "Nguyen Kiet"}
					</Text>
					<Text style={tw`opacity-50 mt-1`}>
						{item?.name ? item?.name : "Oke hẹn ông ở đó nhe"}
					</Text>
				</View>
				<View
					style={tw`w-3 h-3 bg-[#BDE952] rounded-full absolute top-4 right-6`}
				/>
			</TouchableOpacity>
		</View>
	);
};

export default MessageCard;

const styles = StyleSheet.create({});
