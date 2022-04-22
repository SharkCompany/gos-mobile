import { useAppSelector } from 'app/redux/store';
import { selectUser } from 'app/redux/user/userSlice';
import { Text, View } from 'components/Themed'
import React from 'react'
import { TouchableOpacity, Image, StyleSheet } from 'react-native';
import { logo1, googleLogo } from "../../assets/images";
import * as WebBrowser from 'expo-web-browser';
import * as Google from 'expo-auth-session/providers/google';
import { useNavigation } from '@react-navigation/native';
import LoginFirebase from './LoginFirebase';

WebBrowser.maybeCompleteAuthSession();

type Props = {}



export default function LoginGoogle({ }: Props) {
    const user = useAppSelector(selectUser);
    const [request, response, promptAsync] = Google.useAuthRequest({
        expoClientId: '694675116554-l94l395jc66mjdcktunvpk9mvpgsq7nj.apps.googleusercontent.com',
        // androidClientId: 'GOOGLE_GUID.apps.googleusercontent.com',
    });

    async function getUserData(accessToken: string | undefined) {
        const navigator = useNavigation();

        let userInfoResponse = await fetch("https://www.googleapis.com/userinfo/v2/me", {
            headers: { Authorization: `Bearer ${accessToken}` }
        });

        userInfoResponse.json().then(data => {
            console.log(data);
        });

        React.useEffect(() => {
            if (response?.type === 'success') {
                const { authentication } = response;
                getUserData(response.authentication?.accessToken);
                navigator.navigate("EnterInfor");
            }
        }, [response]);
        const handleGoogleLogin = () => {
            promptAsync();
            console.log("re--------");



        }
        return (
            // <TouchableOpacity
            //     style={[styles.button, styles.buttonGoogle]}
            //     onPress={handleGoogleLogin}
            // >
            //     <Image
            //         source={googleLogo}
            //         width={32}
            //         style={styles.googleLogo}
            //     />
            //     <Text style={[styles.buttonText, styles.buttonTextGoogle]}>
            //         Continue with Google
            //     </Text>
            // </TouchableOpacity>
            <LoginFirebase />

        )
    }
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
