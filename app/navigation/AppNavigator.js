import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import { ListingEditScreen } from "../screen";
import AccountNavigator from "./AccountNavigator";
import FeedNavigator from "./FeedNavigator";
import NewEditButton from "./NewEditButton";
import routes from "./routes";

const Tab = createBottomTabNavigator();

export default function AppNavigator() {
	return (
		<Tab.Navigator screenOptions={{ headerShown: false }}>
			<Tab.Screen
				name="Feed"
				component={FeedNavigator}
				options={{
					tabBarIcon: ({ color, size }) => (
						<MaterialCommunityIcons name="home" color={color} size={size} />
					),
				}}
			/>
			<Tab.Screen
				name="ListingEdit"
				component={ListingEditScreen}
				options={({ navigation }) => ({
					tabBarButton: () => (
						<NewEditButton
							onPress={() => navigation.navigate(routes.LISTING_EDIT)}
						/>
					),
				})}
			/>
			<Tab.Screen
				name="Account"
				component={AccountNavigator}
				options={{
					tabBarIcon: ({ color, size }) => (
						<MaterialCommunityIcons name="account" color={color} size={size} />
					),
				}}
			/>
		</Tab.Navigator>
	);
}
