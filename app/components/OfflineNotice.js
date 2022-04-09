import React from "react";
import { StyleSheet, View, StatusBar } from "react-native";
import { useNetInfo } from "@react-native-community/netinfo";

import Text from "./Text";
import colors from "../config/colors";

export default function OfflineNotice() {
	const netInfo = useNetInfo();

	if (netInfo.type !== "unknown" && netInfo.isInternetReachable === false)
		return (
			<View style={styles.container}>
				<Text style={styles.text}>No Internet Connection</Text>
			</View>
		);
	return null;
}

const styles = StyleSheet.create({
	container: {
		alignItems: "center",
		backgroundColor: colors.primary,
		height: 50,
		position: "absolute",
		top: StatusBar.currentHeight,
		width: "100%",
		zIndex: 1,
		justifyContent: "center",
		elevation: 5,
	},
	text: {
		color: colors.white,
	},
});
