import { useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import AppLoading from "expo-app-loading";

import AppNavigator from "./app/navigation/AppNavigator";
import AuthNavigator from "./app/navigation/AuthNavigator";
import AuthContext from "./app/auth/context";
// import OfflineNotice from "./app/components/OfflineNotice";
import theme from "./app/navigation/theme";
import authStorage from "./app/auth/storage";

export default function App() {
	const [user, setUser] = useState();
	const [isReady, setIsReady] = useState();

	const restoreUser = async () => {
		const user = await authStorage.getUser();
		if (user) setUser(user);
	};

	if (!isReady)
		return (
			<AppLoading
				startAsync={restoreUser}
				onFinish={() => setIsReady(true)}
				onError={console.warn}
			/>
		);

	return (
		<AuthContext.Provider value={{ user, setUser }}>
			{/* <OfflineNotice /> */}
			<NavigationContainer theme={theme}>
				{user ? <AppNavigator /> : <AuthNavigator />}
			</NavigationContainer>
		</AuthContext.Provider>
	);
}
