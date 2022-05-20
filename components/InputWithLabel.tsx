import { StyleSheet, TextInput, TouchableOpacity } from "react-native";
import React from "react";
import { Text, View } from "components/Themed";
import { FixMeLater } from "interfaces/migration";
import { Keyboard } from "react-native";
type Props = {};

const InputWithLabel = ({
	label,
	placeholder,
	pressInHandler,
	value,
	numeric,
}: FixMeLater) => {
	const s = require("../globalStyles");

	const handleOnPressIn = () => {
		Keyboard.dismiss();
		if (pressInHandler) {
			pressInHandler();
		}
	};

	return (
		<View>
			<View style={styles.inputPairContainer}>
				<Text style={styles.labelInput}>{label}</Text>
				<TextInput
					style={[styles.inputBasic, s.dropShadowButton]}
					placeholder={placeholder}
					onPressIn={handleOnPressIn}
					value={value}
					keyboardType={numeric && "numeric"}
				/>
			</View>
		</View>
	);
};

export const TouchableInputWithLabel = ({
	label,
	placeholder,
	pressInHandler,
	value,
	setValue,
}: FixMeLater) => {
	const s = require("../globalStyles");

	const handleOnPressIn = () => {
		if (pressInHandler) {
			pressInHandler();
		}
	};

	return (
		<TouchableOpacity onPress={handleOnPressIn}>
			<View style={styles.inputPairContainer}>
				<Text style={styles.labelInput}>{label}</Text>
				<TextInput
					style={[
						styles.inputTouchableOpacity,
						styles.inputBasic,
						s.dropShadowButton,
					]}
					placeholder={placeholder}
					value={value}
					editable={false}
					selectTextOnFocus={false}
				/>
			</View>
		</TouchableOpacity>
	);
};

export default InputWithLabel;

const styles = StyleSheet.create({
	inputBasic: {
		height: 50,
		backgroundColor: "#fff",
		borderRadius: 15,
		paddingHorizontal: 20,
		paddingVertical: 15,
	},
	inputTouchableOpacity: {
		color: "black",
	},

	labelInput: {
		fontSize: 18,
		paddingBottom: 3,
		paddingLeft: 6,
	},
	inputPairContainer: {
		// flex: 1,
		marginBottom: 24,
		padding: 2,
		paddingHorizontal: 10,
	},
});
