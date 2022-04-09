import { NavigationContainer } from "@react-navigation/native";

import AppNavigator from "./app/navigation/AppNavigator";
import theme from "./app/navigation/theme";

export default function App() {
	return (
		<NavigationContainer theme={theme}>
			<AppNavigator />
		</NavigationContainer>
	);
}
