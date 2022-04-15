import { StatusBar } from "expo-status-bar";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { Provider } from "react-redux";

import useCachedResources from "./hooks/useCachedResources";
import useColorScheme from "./hooks/useColorScheme";
import Navigation from "./navigation";
import LoginScreen from "./screens/login/SocialLoginScreen";

export default function App() {
	const isLoadingComplete = useCachedResources();
	const colorScheme = useColorScheme();

	if (!isLoadingComplete) {
		return null;
	} else {
		return (
				<SafeAreaProvider>
					<Navigation colorScheme={colorScheme} />
					{/* <StatusBar /> */}
					{/* <LoginScreen /> */}
				</SafeAreaProvider>
		);
	}
}
