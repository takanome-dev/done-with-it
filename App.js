import { NavigationContainer } from "@react-navigation/native";

import { AuthNavigator, theme } from "./app/navigation";

export default function App() {
	return (
		<NavigationContainer theme={theme}>
			<AuthNavigator />
		</NavigationContainer>
	);
}
