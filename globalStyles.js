"use strict";
import { StyleSheet } from "react-native";

module.exports = StyleSheet.create({
	headerH1: {
		fontSize: 24,
		marginBottom: 45,
		fontWeight: "700",
	},
	standardContainer: {
		flex: 1,
		alignItems: "center",
		paddingTop: 60,
	},
	containerWithHeader: {
		flex: 1,
		alignItems: "center",
		marginTop: 20,
	},
	mainButton: {
		backgroundColor: "#7EBC36",
	},
	secondaryButton: {
		backgroundColor: "#BDE952",
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
