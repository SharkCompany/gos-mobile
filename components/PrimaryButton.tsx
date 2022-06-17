import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { FixMeLater } from "interfaces/migration";

const PrimaryButton = ({ children, eventHandler }: FixMeLater) => {
	const globalStyles = require("../globalStyles");

	const handleOnPress = () => {
		if (eventHandler) {
			eventHandler();
		}
	};

	return (
		<TouchableOpacity style={styles.container} onPress={handleOnPress}>
			<Text style={styles.textColor}>{children}</Text>
		</TouchableOpacity>
	);
};

export default PrimaryButton;

const styles = StyleSheet.create({
	container: {
		height: 50,
		padding: 10,
		justifyContent: "center",
		alignItems: "center",
		borderStyle:"solid",
		borderWidth:1,
		borderColor:"#7EBC36",
		borderRadius: 15,
		paddingHorizontal: 20,
		paddingVertical: 15,
	},
	textColor: {
		color: "#7EBC36",
		fontSize: 16,
		fontWeight: "700",
	},
});
