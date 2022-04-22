import { Button, Image, StyleSheet, TouchableOpacity } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";
import { logo1, googleLogo } from "../../assets/images";
import Ionicons from "@expo/vector-icons/Ionicons";
import { Text, View } from "../../components/Themed";
import LoginGoogle from "./LoginGoogle";
import LoginFirebase from "./LoginFirebase";
import LoginFacebook from "./LoginFirebaseFacebook";

export default function SocialLoginScreen() {
  const navigator = useNavigation();

  const s = require("../../globalStyles");

  const handleFacebookLogin = () => {
    console.log("login facebook");
    navigator.navigate("EnterInfor");
  };

  return (
    <View style={s.standardContainer}>
      <Text style={[s.headerH1]}>Welcome Aboard, Mates!</Text>
      <Image source={logo1} style={styles.logo} />
      <Text style={styles.titleh2}>Sign In To Continue</Text>

      {/* <LoginGoogle /> */}

      <LoginFirebase />
	  <LoginFacebook />
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
  titleh2: {
    fontSize: 20,
    marginBottom: 30,
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
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 20,
    paddingVertical: 15,
    width: 310,
    borderRadius: 15,
    marginBottom: 26,
    shadowColor: "rgba(0, 0, 0, 0.7)",
    shadowOpacity: 0.8,
    elevation: 6,
    shadowRadius: 15,
    shadowOffset: { width: 1, height: 13 },
  },
  buttonFacebook: {
    backgroundColor: "#1877F2",
  },
  buttonGoogle: {
    backgroundColor: "white",
    borderColor: "#000000",
  },
  buttonText: {
    fontSize: 18,
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
