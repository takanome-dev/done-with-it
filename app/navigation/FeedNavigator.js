import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { ListingsScreen, ListingDetailsScreen } from "../screen";

const Stack = createNativeStackNavigator();

export default function FeedNavigator() {
	return (
		<Stack.Navigator
			screenOptions={{
				headerShown: false,
				presentation: "modal",
				animation: "slide_from_bottom",
			}}
		>
			<Stack.Screen name="Listings" component={ListingsScreen} />
			<Stack.Screen
				name="ListingDetails"
				component={ListingDetailsScreen}
				// options={{ presentation: "modal" }}
			/>
		</Stack.Navigator>
	);
}
