import React from "react";
import { StyleSheet, View, Image } from "react-native";

import colors from "../config/colors";
import ListItem from "../components/ListItem";
import Text from "../components/Text";
import Screen from "../components/Screen";

export default function ListingDetailScreen() {
	return (
		<Screen>
			<Image style={styles.image} source={require("../assets/jacket.jpg")} />
			<View style={styles.detailsContainer}>
				<Text style={styles.title}>Red jacket for sale</Text>
				<Text style={styles.price}>$100</Text>
				<View style={styles.userContainer}>
					<ListItem
						title="Takanome Dev"
						subTitle="takanomedev221@gmail.com"
						image={require("../assets/takanome.png")}
					/>
				</View>
			</View>
		</Screen>
	);
}

const styles = StyleSheet.create({
	image: {
		width: "100%",
		height: 300,
	},
	detailsContainer: {
		padding: 20,
	},
	title: {
		fontSize: 25,
		fontWeight: "500",
	},
	price: {
		marginVertical: 10,
		color: colors.secondary,
		fontWeight: "bold",
		fontSize: 22,
	},
	userContainer: {
		marginVertical: 20,
	},
});
