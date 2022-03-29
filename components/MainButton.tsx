import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { FixMeLater } from "interfaces/migration";

const MainButton = ({ children, eventHandler }: FixMeLater) => {
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

export default MainButton;

const styles = StyleSheet.create({
	container: {
		height: 50,
		padding: 10,
		backgroundColor: "#7EBC36",
		justifyContent: "center",
		alignItems: "center",
		borderRadius: 15,
		paddingHorizontal: 20,
		paddingVertical: 15,
	},
	textColor: {
		color: "white",
		fontSize: 16,
		fontWeight: "700",
	},
});
