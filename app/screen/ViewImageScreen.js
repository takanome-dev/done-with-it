import React from "react";
import { StyleSheet, Image } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import Screen from "../components/Screen";
import colors from "../config/colors";

export default function ViewImageScreen() {
	return (
		<Screen style={styles.screen}>
			<MaterialCommunityIcons
				style={styles.closeIcon}
				name="close"
				size={40}
				color="#fff"
			/>
			<MaterialCommunityIcons
				style={styles.trashIcon}
				name="trash-can-outline"
				size={40}
				color="#fff"
			/>
			<Image
				resizeMode="contain"
				style={styles.image}
				source={require("../assets/chair.jpg")}
			/>
		</Screen>
	);
}

const styles = StyleSheet.create({
	screen: {
		backgroundColor: colors.black,
	},
	image: {
		width: "100%",
		height: "100%",
	},
	closeIcon: {
		position: "absolute",
		top: 40,
		left: 30,
	},
	trashIcon: {
		position: "absolute",
		top: 40,
		right: 30,
	},
});
