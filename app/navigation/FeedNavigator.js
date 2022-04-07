import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { ListingsScreen, ListingDetailsScreen } from "../screen";

const Stack = createNativeStackNavigator();

export default function FeedNavigator() {
	return (
		<Stack.Navigator screenOptions={{ headerShown: false }}>
			<Stack.Screen name="Listings" component={ListingsScreen} />
			<Stack.Screen
				name="ListingDetails"
				component={ListingDetailsScreen}
				options={{ presentation: "modal" }}
			/>
		</Stack.Navigator>
	);
}
