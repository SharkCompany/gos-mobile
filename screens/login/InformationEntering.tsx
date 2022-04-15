import {
	Button,
	StyleSheet,
	KeyboardAvoidingView,
	Platform,
	ScrollView,
	Image,
} from "react-native";
import React, { useEffect, useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { Avatar, Input } from "react-native-elements";
import { logo1 } from "../../assets/images";
import Icon from "react-native-vector-icons/FontAwesome";
import { FloatingLabelInput } from "react-native-floating-label-input";
import { TextInput } from "react-native";
import { Text, View } from "../../components/Themed";
import MainButton from "components/MainButton";
import * as ImagePicker from "expo-image-picker";
import { FixMeLater } from "interfaces/migration";

type Props = {};

const InformationEntering = (props: Props) => {
	const navigator = useNavigation();
	const s = require("../../globalStyles");
	const widthRelative = "80%";

	const [phonenumber, setPhonenumber] = useState<string>("");
	const [bienSoXe, setBienSoXe] = useState<string>("");
	const [bio, setBio] = useState<string>("");

	const [image, setImage] = useState<FixMeLater>(null);

	const pickImage = async () => {
		// No permissions request is necessary for launching the image library
		let result = await ImagePicker.launchImageLibraryAsync({
			mediaTypes: ImagePicker.MediaTypeOptions.Images,
			allowsEditing: true,
			aspect: [1, 1],
			quality: 1,
		});

		if (!result.cancelled) {
			setImage(result.uri);
		}
	};

	const handleSaveInformation = () => {
		console.log("Handle save");
		navigator.navigate("Root");
	};

	return (
		<View style={s.standardContainer}>
			<KeyboardAvoidingView
				style={{
					flex: 1,
					alignItems: "center",
					width: "100%",
					padding: 10,
				}}
			>
				<Text style={s.headerH1}>Sign Up To Join Us!</Text>
				<ScrollView
					style={{
						width: "100%",
						flex: 1,
						paddingHorizontal: "10%",
					}}
				>
					{!image && (
						<Avatar
							size={160}
							rounded
							icon={{
								name: "camera",
								type: "font-awesome",
								size: 56,
							}}
							containerStyle={{
								marginBottom: 30,
								alignSelf: "center",
								backgroundColor: "#c3c3c3",
							}}
							onPress={pickImage}
						/>
					)}

					{image && (
						<Avatar
							size={160}
							rounded
							source={{ uri: image }}
							containerStyle={{
								marginBottom: 30,
								alignSelf: "center",
								backgroundColor: "#c3c3c3",
							}}
							onPress={pickImage}
						/>
					)}

					<View
						style={{
							borderBottomColor: "#E5E5E5",
							borderBottomWidth: 1,
							marginBottom: 20,
						}}
					/>

					<View style={styles.inputPairContainer}>
						<Text style={styles.labelInput}>Số điện thoại</Text>
						<TextInput
							style={[styles.inputBasic, s.dropShadowButton]}
							value={phonenumber}
							onChangeText={(text) => setPhonenumber(text)}
							placeholder="090743265"
						/>
					</View>
					<View style={styles.inputPairContainer}>
						<Text style={styles.labelInput}>Biển số xe</Text>
						<TextInput
							style={[styles.inputBasic, s.dropShadowButton]}
							value={bienSoXe}
							onChangeText={(text) => setBienSoXe(text)}
							placeholder="72E1-73202"
						/>
					</View>
					<View style={styles.inputPairContainer}>
						<Text style={styles.labelInput}>Giới thiệu</Text>
						<TextInput
							multiline
							numberOfLines={4}
							scrollEnabled
							style={[styles.inputMultiLine, s.dropShadowButton]}
							value={bio}
							onChangeText={(text) => setBio(text)}
							placeholder="Hi tui la Kiet. Sinh vien nam 3 UIT"
						/>
					</View>
					<MainButton eventHandler={handleSaveInformation}>
						Finish
					</MainButton>
				</ScrollView>
			</KeyboardAvoidingView>
		</View>
	);
};

const styles = StyleSheet.create({
	headerH1: {
		fontSize: 24,
		marginBottom: 45,
		fontWeight: "700",
	},
	inputBasic: {
		height: 50,
		backgroundColor: "#fff",
		borderRadius: 15,
		paddingHorizontal: 20,
		paddingVertical: 15,
	},
	inputMultiLine: {
		padding: 10,
		backgroundColor: "#fff",
		borderRadius: 15,
		textAlignVertical: "top",
		paddingHorizontal: 20,
		paddingVertical: 15,
	},
	labelInput: {
		fontSize: 18,
		paddingBottom: 3,
		paddingLeft: 6,
	},
	inputPairContainer: {
		marginBottom: 24,
		padding: 2,
	},
});

export default InformationEntering;