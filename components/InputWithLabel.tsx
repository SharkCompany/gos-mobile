import { StyleSheet, TextInput } from "react-native";
import React from "react";
import { Text, View } from "components/Themed";
import { FixMeLater } from "interfaces/migration";

type Props = {};

const InputWithLabel = ({ label, placeholder }: FixMeLater) => {
	const s = require("../globalStyles");

	return (
		<View>
			<View style={styles.inputPairContainer}>
				<Text style={styles.labelInput}>{label}</Text>
				<TextInput
					style={[styles.inputBasic, s.dropShadowButton]}
					placeholder="aba"
				/>
			</View>
		</View>
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
