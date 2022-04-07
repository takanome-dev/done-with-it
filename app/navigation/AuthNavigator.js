import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { LoginScreen, RegisterScreen, WelcomeScreen } from "../screen";

const Stack = createNativeStackNavigator();

export default function AuthNavigator() {
	return (
		<Stack.Navigator>
			<Stack.Screen
				name="Welcome"
				component={WelcomeScreen}
				options={{ headerShown: false }}
			/>
			<Stack.Screen name="Login" component={LoginScreen} />
			<Stack.Screen name="Register" component={RegisterScreen} />
		</Stack.Navigator>
	);
}
