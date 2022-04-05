import React from "react";
import { Platform, StyleSheet, SafeAreaView, StatusBar } from "react-native";

export default function Screen({ children, style }) {
	return <SafeAreaView style={[styles.screen, style]}>{children}</SafeAreaView>;
}

const styles = StyleSheet.create({
	screen: {
		flex: 1,
		paddingTop: StatusBar.currentHeight,
		fontFamily: Platform.OS === "android" ? "Roboto" : "Avenir",
	},
});
