import {
  NavigationHelpersContext,
  useNavigation,
} from "@react-navigation/native";
import { authApi } from "app/api/auth.api";
import { setAppLoading } from "app/redux/setting/settingSlice";
import { useAppDispatch } from "app/redux/store";
import { setUser } from "app/redux/user/userSlice";
import { storeUserToLocal } from "app/utils/AppAsyncStorage";
import { Text } from "components/Themed";
import { AuthSessionResult } from "expo-auth-session";
import * as Google from "expo-auth-session/providers/google";
import * as WebBrowser from "expo-web-browser";
import { initializeApp } from "firebase/app";
import {
  getAuth,
  GoogleAuthProvider,
  signInWithCredential,
} from "firebase/auth";
import { AuthUserModel } from "models/User.model";
import * as React from "react";
import {
  Image,
  StyleSheet,
  ToastAndroid,
  TouchableOpacity,
} from "react-native";
import { googleLogo } from "../../assets/images";

// Initialize Firebase
initializeApp({
  apiKey: "AIzaSyCtMAns2Lfps0OFr5q9up3M4B4LM7dLQ9c",
  authDomain: "gos-authentication.firebaseapp.com",
  projectId: "gos-authentication",
  storageBucket: "gos-authentication.appspot.com",
  messagingSenderId: "1085941473784",
  appId: "1:1085941473784:web:fae8a7bba28a07ec60f60d",
  measurementId: "G-VY1S0Z43X4",
});

WebBrowser.maybeCompleteAuthSession();

export default function LoginFirebase() {
  const dispatch = useAppDispatch();
  const [request, response, promptAsync] = Google.useIdTokenAuthRequest({
    clientId:
      "1085941473784-mc7hcttobtvieq1m4giea7mq8dg9kbqs.apps.googleusercontent.com",
  });

  const navigator = useNavigation();

  async function LoginGoogleHandler(response: AuthSessionResult | null) {
    if (response?.type === "success") {
      dispatch(setAppLoading(true));
      const { id_token } = response.params;

      const auth = getAuth() as any;
      const credential = GoogleAuthProvider.credential(id_token);
      await signInWithCredential(auth, credential);

      let token = await auth.currentUser?.getIdToken(true);

      try {
        const data = await authApi.login(token);
        if (data) {
          let user: AuthUserModel = data;
          console.log("Đăng nhập thành công, thông tin user:", data);
          storeUserToLocal(user);
          dispatch(setUser(user.info));
          if (user.info.phone) {
            ToastAndroid.show("Đăng nhập thành công", ToastAndroid.BOTTOM);
            navigator.navigate("Root");
          } else navigator.navigate("EnterInfor");
        }
      } catch (error) {
        ToastAndroid.show("Đăng nhập thất bại", ToastAndroid.BOTTOM);
        navigator.navigate("SocialLogin");
      } finally {
        dispatch(setAppLoading(false));
      }
    }

    //   const provider = new GoogleAuthProvider();
  }

  React.useEffect(() => {
    LoginGoogleHandler(response);
  }, [response]);

  return (
    <TouchableOpacity
      style={[styles.button, styles.buttonGoogle]}
      onPress={() => promptAsync()}
    >
      <Image source={googleLogo} width={32} style={styles.googleLogo} />
      <Text style={[styles.buttonText, styles.buttonTextGoogle]}>
        Continue with Google
      </Text>
    </TouchableOpacity>
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
