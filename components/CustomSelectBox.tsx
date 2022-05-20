import { View, Text, StyleSheet, TextInput, Switch } from "react-native";
import React, { useState } from "react";
import { FixMeLater } from "interfaces/migration";
import tw from "twrnc";

import DropDownPicker from "react-native-dropdown-picker";
import ModalSelector from "react-native-modal-selector";

type Props = {};

const CustomSelectBox = ({
	listItems,
	selectItemHandler,
	label,
}: FixMeLater) => {
	const [textInputValue, setTextInputValue] = useState<FixMeLater>("");

	let index = 0;
	const data = [
		{ key: index++, section: true, label: "Fruits" },
		{ key: index++, label: "Red Apples" },
		{ key: index++, label: "Cherries" },
		{
			key: index++,
			label: "Cranberries",
			accessibilityLabel: "Tap here for cranberries",
		},
		// etc...
		// Can also add additional custom keys which are passed to the onChange callback
		{ key: index++, label: "Vegetable", customKey: "Not a fruit" },
	];

	return (
		<View style={{ flex: 1, justifyContent: "space-around", padding: 50 }}>
			<ModalSelector
				data={data}
				initValue="Select something yummy!"
				onChange={(option) => {
					alert(`${option.label} (${option.key}) nom nom nom`);
				}}
			/>
			<ModalSelector
				data={data}
				initValue="Select something yummy!"
				supportedOrientations={["landscape"]}
				accessible={true}
				scrollViewAccessibilityLabel={"Scrollable options"}
				cancelButtonAccessibilityLabel={"Cancel Button"}
				onChange={(option) => {
					setTextInputValue({ textInputValue: option.label });
				}}
			>
				<TextInput
					style={{
						borderWidth: 1,
						borderColor: "#ccc",
						padding: 10,
						height: 30,
					}}
					editable={false}
					placeholder="Select something yummy!"
					value={textInputValue}
				/>
			</ModalSelector>
			<ModalSelector
				data={data}
				ref={(selector) => {
					selector = selector;
				}}
				customSelector={<Switch />}
			/>
		</View>
	);
};

export default CustomSelectBox;
