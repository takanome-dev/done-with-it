import React from "react";
import { StyleSheet, Image, View, ImageBackground, Text } from "react-native";

import Button from "../components/Button";

export default function WelcomeScreen() {
	return (
		<ImageBackground
			blurRadius={5}
			style={styles.container}
			source={require("../assets/background.jpg")}
		>
			<View style={styles.logoContainer}>
				<Image style={styles.logo} source={require("../assets/logo-red.png")} />
				<Text style={styles.tagline}>Sell What You Don't Need</Text>
			</View>
			<View style={styles.buttonsContainer}>
				<Button title="Login" />
				<Button title="Register" color="secondary" />
			</View>
		</ImageBackground>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: "flex-end",
		alignItems: "center",
	},
	logoContainer: {
		position: "absolute",
		top: 80,
	},
	logo: {
		width: 100,
		height: 100,
		alignSelf: "center",
	},
	buttonsContainer: {
		padding: 20,
		width: "100%",
	},
	tagline: {
		fontSize: 25,
		fontWeight: "600",
		marginVertical: 15,
	},
});
