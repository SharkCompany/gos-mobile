import * as React from 'react';
import * as WebBrowser from 'expo-web-browser';
import * as Facebook from 'expo-auth-session/providers/facebook';
import { ResponseType } from 'expo-auth-session';
import { initializeApp } from 'firebase/app';
import { getAuth, FacebookAuthProvider, signInWithCredential } from 'firebase/auth';
import { Button } from 'react-native';

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

export default function LoginFacebook() {
  const [request, response, promptAsync] = Facebook.useAuthRequest({
    responseType: ResponseType.Token,
    clientId: '128181532642280',
  });

  React.useEffect(() => {
    if (response?.type === 'success') {
      const { access_token } = response.params;
      
      const auth = getAuth();
      const provider = new FacebookAuthProvider();
      const credential = FacebookAuthProvider.credential(access_token);
      // Sign in with the credential from the Facebook user.
      signInWithCredential(auth, credential);
    }
  }, [response]);

  return (
    <Button
      disabled={!request}
      title="Login FB"
      onPress={() => {
        promptAsync();
      }}
    />
  );
}