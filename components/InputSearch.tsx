import { View, Text, TouchableOpacity, Image, TextInput } from "react-native";
import React from "react";
import tw from "twrnc";
import { placeIconInSearch } from "assets/images";
import { useState } from "react";

type Props = {};

const InputSearch = (props: Props) => {
	const [textInput, setTextInput] = useState<string>("");

	return (
		<View
			style={tw`mx-6 flex-row my-4 h-12 rounded-lg px-3 items-center bg-gray-100 shadow-md  `}
		>
			<Image source={placeIconInSearch} style={tw`h-8 w-8 mr-3`} />
			<TextInput
				// style={tw``}
				placeholder="User Nickname"
				onChangeText={(searchString) => {
					setTextInput(searchString);
				}}
				underlineColorAndroid="transparent"
			/>
		</View>
	);
};

export default InputSearch;
