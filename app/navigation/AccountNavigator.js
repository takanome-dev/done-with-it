import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { AccountScreen, MessagesScreen, UserListingsScreen } from "../screen";

const Stack = createNativeStackNavigator();

export default function AccountNavigator() {
	return (
		<Stack.Navigator>
			<Stack.Screen
				name="AccountScreen"
				component={AccountScreen}
				options={{ headerShown: false }}
			/>
			<Stack.Screen name="Messages" component={MessagesScreen} />
			<Stack.Screen name="MyListings" component={UserListingsScreen} />
		</Stack.Navigator>
	);
}
