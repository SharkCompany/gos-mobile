import { View, Text, Button } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";

type Props = {};

const InformationEntering = (props: Props) => {
	const navigator = useNavigation();

	return (
		<View>
			<Text>InformationEntering</Text>
			<Button
				title="Go to root"
				onPress={() => navigator.navigate("Root")}
			/>
		</View>
	);
};

export default InformationEntering;
