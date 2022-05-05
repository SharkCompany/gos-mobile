import { SafeAreaProvider } from "react-native-safe-area-context";
import { Provider } from "react-redux";
import store from "./app/redux/store";
import useCachedResources from "./hooks/useCachedResources";
import useColorScheme from "./hooks/useColorScheme";
import Navigation from "./navigation";

export default function App() {
	const isLoadingComplete = useCachedResources();
	const colorScheme = useColorScheme();

	if (!isLoadingComplete) {
		return null;
	} else {
		return (
			<Provider store={store}>
				<SafeAreaProvider>
					<Navigation colorScheme={colorScheme} />
					{/* <StatusBar /> */}
					{/* <LoginScreen /> */}
				</SafeAreaProvider>
			</Provider>
		);
	}
}
