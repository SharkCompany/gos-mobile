import { Text, View } from 'components/Themed'
import React from 'react'
import { TouchableOpacity, Image, StyleSheet } from 'react-native';
import { logo1, googleLogo } from "../../assets/images";

type Props = {}

export default function LoginGoogle({ }: Props) {
    const handleGoogleLogin = () => {

    }
    return (
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
                Continue with Google
            </Text>
        </TouchableOpacity>

    )
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
