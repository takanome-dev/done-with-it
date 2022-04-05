import React, { useState } from "react";
import { StyleSheet, FlatList, View } from "react-native";

import Screen from "../components/Screen";
import ListItem from "../components/ListItem";
import ListItemSeparator from "../components/ListItemSeparator";
import colors from "../config/colors";

const initialMessages = [
	{
		id: 1,
		title: "Takanome",
		subTitle: "Lorem Ipsum Lorem Ipsum ",
		image: require("../assets/takanome.png"),
	},
	{
		id: 2,
		title: "Takanome",
		subTitle: "Lorem Ipsum Lorem Ipsum",
		image: require("../assets/takanome.png"),
	},
];

export default function MessagesScreen({ renderRightActions }) {
	const [messages, setMessages] = useState(initialMessages);
	const [refresh, setRefresh] = useState(false);

	return (
		<Screen style={styles.screen}>
			<FlatList
				data={messages}
				keyExtractor={(m) => m.id.toString()}
				renderItem={({ item }) => (
					<ListItem
						title={item.title}
						subTitle={item.subTitle}
						image={item.image}
						renderRightActions={() => (
							<View style={{ backgroundColor: "red", width: 70 }}></View>
						)}
					/>
				)}
				ItemSeparatorComponent={ListItemSeparator}
				refreshing={refresh}
				onRefresh={() =>
					setMessages([
						{
							id: 2,
							title: "Takanome ",
							subTitle: "Lorem Ipsum Lorem Ipsum",
							image: require("../assets/takanome.png"),
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
	},
});
