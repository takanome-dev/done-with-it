import { Text } from "react-native";
import React from "react";
import defaultStyles from "../config/defaultStyles";

export default function AppText({ children, style, numberOfLines }) {
	return (
		<Text style={[defaultStyles.text, style]} numberOfLines={numberOfLines}>
			{children}
		</Text>
	);
}
