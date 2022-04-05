import React, { useState } from "react";
import { StyleSheet, FlatList } from "react-native";

import Screen from "../components/Screen";
import Card from "../components/Card";
import colors from "../config/colors";

const initialListings = [
	{
		id: 1,
		title: "Red jacket for sale",
		price: "$100",
		image: require("../assets/jacket.jpg"),
	},
	{
		id: 2,
		title: "Couch in great condition",
		price: "$800",
		image: require("../assets/couch.jpg"),
	},
];

export default function ListingsScreen() {
	const [refresh, setRefresh] = useState(false);
	const [listings, setListings] = useState(initialListings);

	return (
		<Screen style={styles.screen}>
			<FlatList
				data={listings}
				keyExtractor={(l) => l.id.toString()}
				renderItem={({ item }) => (
					<Card title={item.title} subTitle={item.price} image={item.image} />
				)}
				refreshing={refresh}
				onRefresh={() =>
					setListings([
						{
							id: 2,
							title: "Couch in great condition",
							price: "$800",
							image: require("../assets/couch.jpg"),
						},
					])
				}
			/>
		</Screen>
	);
}

const styles = StyleSheet.create({
	screen: {
		backgroundColor: colors.light,
		padding: 20,
	},
});
