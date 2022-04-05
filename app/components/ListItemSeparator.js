import { StyleSheet, View } from "react-native";
import React from "react";
import colors from "../config/colors";

export default function ListItemSeparator() {
	return <View style={styles.separator} />;
}

const styles = StyleSheet.create({
	separator: {
		backgroundColor: colors.light,
		height: 1,
	},
});
