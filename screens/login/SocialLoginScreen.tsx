import {
	Button,
	Image,
	StyleSheet,
	Text,
	TouchableOpacity,
	View,
} from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";
import { logo1, googleLogo } from "../../assets/images";
import Ionicons from "@expo/vector-icons/Ionicons";

export default function SocialLoginScreen() {
	const navigator = useNavigation();

	const SocialButton = ({
		iconName,
		onClick,
		color,
		children,
		propsStyle,
	}: any) => {
		return (
			<TouchableOpacity
				style={[styles.button, propsStyle]}
				onPress={onClick}
			>
				<Ionicons
					name={iconName}
					size={32}
					color={color}
					style={{ marginRight: 15 }}
				/>
				<Text style={styles.buttonText}>{children}</Text>
			</TouchableOpacity>
		);
	};

	const handleFacebookLogin = () => {
		console.log("login facebook");
	};

	const handleGoogleLogin = () => {
		console.log("login google");
		navigator.navigate("EnterInfor");
	};

	return (
		<View style={styles.container}>
			<Text style={styles.titleh1}>Welcome Aboard, Mates!</Text>
			<Image source={logo1} style={styles.logo} />
			<Text style={styles.titleh2}>Sign In To Continue</Text>

			<TouchableOpacity
				style={[styles.button, styles.buttonGoogle]}
				onPress={handleGoogleLogin}
			>
				<Image
					source={googleLogo}
					width={32}
					style={styles.googleLogo}
				/>
				<Text style={[styles.buttonText, styles.buttonTextGoogle]}>
					Continue with Facebook
				</Text>
			</TouchableOpacity>

			<TouchableOpacity
				style={[styles.button, styles.buttonFacebook]}
				onPress={handleFacebookLogin}
			>
				<Ionicons name={"logo-facebook"} size={32} color={"white"} />
				<Text style={[styles.buttonText, styles.buttonTextFacebook]}>
					Continue with Facebook
				</Text>
			</TouchableOpacity>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		alignItems: "center",
		marginTop: 60,
	},
	titleh1: {
		fontSize: 24,
		marginBottom: 45,
		fontWeight: "700",
	},
	titleh2: {
		fontSize: 20,
		marginBottom: 20,
		fontWeight: "700",
	},
	logo: {
		width: 144,
		height: 144,
		borderRadius: 999,
		marginBottom: 40,
	},
	googleLogo: {
		width: 32,
		height: 32,
		resizeMode: "contain",
	},
	button: {
		flexDirection: "row",
		alignItems: "center",
		paddingHorizontal: 20,
		paddingVertical: 15,
		width: 310,
		borderRadius: 15,
		marginBottom: 20,
	},
	buttonFacebook: {
		backgroundColor: "#1877F2",
	},
	buttonGoogle: {
		backgroundColor: "white",
	},
	buttonText: {
		fontSize: 20,
		fontWeight: "700",
		color: "#fff",
		marginLeft: 15,
	},
	buttonTextFacebook: {
		color: "#fff",
	},
	buttonTextGoogle: {
		color: "#000000",
		opacity: 0.6,
	},
});
