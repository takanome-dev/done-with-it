import { NavigationContainer } from "@react-navigation/native";
import OfflineNotice from "./app/components/OfflineNotice";

import AppNavigator from "./app/navigation/AppNavigator";
import theme from "./app/navigation/theme";

export default function App() {
	return (
		<>
			<OfflineNotice />
			<NavigationContainer theme={theme}>
				<AppNavigator />
			</NavigationContainer>
		</>
	);
}
