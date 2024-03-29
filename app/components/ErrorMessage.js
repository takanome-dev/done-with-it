import React from "react";
import { StyleSheet, View } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import Text from "./Text";
import colors from "../config/colors";

export default function ErrorMessage({ error, visible }) {
	if (!visible || !error) return null;

	return (
		<View style={styles.container}>
			<MaterialCommunityIcons
				name="alert-circle"
				size={30}
				color={colors.danger}
			/>
			<Text style={styles.error}>{error}</Text>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		padding: 5,
		flexDirection: "row",
		alignItems: "center",
	},
	error: {
		color: colors.danger,
		marginLeft: 10,
	},
});
