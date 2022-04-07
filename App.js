import { NavigationContainer } from "@react-navigation/native";

import { AppNavigator, theme } from "./app/navigation";

export default function App() {
	return (
		<NavigationContainer theme={theme}>
			<AppNavigator />
		</NavigationContainer>
	);
}
