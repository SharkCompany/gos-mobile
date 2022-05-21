import { StyleSheet } from "react-native";
import React from "react";
import RadioButtonRN from "radio-buttons-react-native";
import { Text, View } from "./Themed";
import { FixMeLater } from "interfaces/migration";
import tw from "twrnc";

type Props = {};

const CustomRadioButton = ({ data, label, onChangeHandler }: FixMeLater) => {
	const handleSelectChange = (item: FixMeLater) => {
		if (onChangeHandler) {
			onChangeHandler(item);
		}
	};

	return (
		<View style={styles.inputPairContainer}>
			<Text style={styles.labelInput}>{label}</Text>
			<RadioButtonRN
				data={data}
				selectedBtn={handleSelectChange}
				initial={1}
				boxStyle={[styles.inputBasic, styles.dropShadowButton]}
			/>
		</View>
	);
};

export default CustomRadioButton;

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
	dropShadowButton: {
		borderRadius: 15,
		shadowColor: "rgba(0, 0, 0, 0.7)",
		shadowOpacity: 0.8,
		elevation: 6,
		shadowRadius: 10,
		shadowOffset: { width: 1, height: 10 },
	},
});
