import { StyleSheet, Text, Platform } from "react-native";
import React from "react";
import colors from "../config/colors";

export default function AppText({ children, style, numberOfLines }) {
	return (
		<Text style={[styles.text, style]} numberOfLines={numberOfLines}>
			{children}
		</Text>
	);
}

const styles = StyleSheet.create({
	text: {
		fontSize: 20,
		fontFamily: Platform.OS === "android" ? "Roboto" : "Avenir",
		color: colors.black,
	},
});
