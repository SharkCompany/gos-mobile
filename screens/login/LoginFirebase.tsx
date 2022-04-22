import * as React from "react";
import * as WebBrowser from "expo-web-browser";
import * as Google from "expo-auth-session/providers/google";
import { initializeApp } from "firebase/app";
import {
  getAuth,
  GoogleAuthProvider,
  signInWithCredential,
} from "firebase/auth";
import { Button } from "react-native";

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
  const [request, response, promptAsync] = Google.useIdTokenAuthRequest({
    clientId:
      "1085941473784-mc7hcttobtvieq1m4giea7mq8dg9kbqs.apps.googleusercontent.com",
  });

  React.useEffect(() => {
    if (response?.type === "success") {
      const { id_token } = response.params;
      console.log(response);

      const auth = getAuth();

      const getToken = async () => {

        let token = await auth.currentUser?.getIdToken();
        console.log("token",token);
      };
      getToken();

      //   const provider = new GoogleAuthProvider();
      const credential = GoogleAuthProvider.credential(id_token);
      signInWithCredential(auth, credential);
    }
  }, [response]);

  return (
    <Button
      disabled={!request}
      title="Login"
      onPress={() => {
        promptAsync();
      }}
    />
  );
}
