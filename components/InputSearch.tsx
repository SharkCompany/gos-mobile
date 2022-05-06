import { View, Text, TouchableOpacity, Image, TextInput } from "react-native";
import React from "react";
import tw from "twrnc";
import { placeIconInSearch } from "assets/images";
import { useState } from "react";
import { FixMeLater } from "interfaces/migration";

type Props = {};

const InputSearch = ({
	identify,
	placeHolder,
	value,
	setInputTextChange,
	focusHandler,
}: FixMeLater) => {
	return (
		<View
			style={tw`flex-row h-12 rounded-lg px-3 items-center bg-gray-100 shadow-md`}
		>
			<Image source={placeIconInSearch} style={tw`h-8 w-8 mr-3`} />
			<TextInput
				style={tw` flex-1`}
				value={value}
				placeholder={placeHolder}
				onChangeText={(searchString) => {
					if (setInputTextChange) {
						setInputTextChange(searchString);
					}
				}}
				underlineColorAndroid="transparent"
				onFocus={() => focusHandler(identify)}
			/>
		</View>
	);
};

export default InputSearch;
