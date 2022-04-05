import { StyleSheet, Text, Platform } from "react-native";
import React from "react";
import colors from "../config/colors";

export default function AppText({ children, style }) {
	return <Text style={[styles.text, style]}>{children}</Text>;
}

const styles = StyleSheet.create({
	text: {
		fontSize: 20,
		fontFamily: Platform.OS === "android" ? "Roboto" : "Avenir",
		color: colors.black,
	},
});
