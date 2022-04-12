import React from "react";
import { StyleSheet, FlatList, View } from "react-native";

import colors from "../config/colors";
import Icon from "../components/Icon";
import ListItem from "../components/ListItem";
import ListItemSeparator from "../components/ListItemSeparator";
import Screen from "../components/Screen";
import useAuth from "../hooks/useAuth";

const menuItems = [
	{
		title: "My Listing",
		icon: {
			name: "format-list-bulleted",
			backgroundColor: colors.primary,
		},
		targetScreen: "MyListings",
	},
	{
		title: "My Messages",
		icon: {
			name: "email",
			backgroundColor: colors.secondary,
		},
		targetScreen: "Messages",
	},
];

export default function AccountScreen({ navigation }) {
	const { user, logOut } = useAuth();

	return (
		<Screen style={styles.screen}>
			<View style={[styles.listItemContainer, { marginVertical: 30 }]}>
				<ListItem
					title={user.name}
					subTitle={user.email}
					image={require("../assets/takanome.png")}
				/>
			</View>
			<View style={styles.container}>
				<FlatList
					data={menuItems}
					keyExtractor={(l) => l.title}
					renderItem={({ item }) => (
						<View style={styles.listItemContainer}>
							<ListItem
								title={item.title}
								IconComponent={
									<Icon
										name={item.icon.name}
										backgroundColor={item.icon.backgroundColor}
									/>
								}
								onPress={() => navigation.navigate(item.targetScreen)}
							/>
						</View>
					)}
					ItemSeparatorComponent={ListItemSeparator}
				/>
			</View>
			<View style={[styles.listItemContainer, { marginTop: 30 }]}>
				<ListItem
					title="Log Out"
					IconComponent={<Icon name="logout" backgroundColor="#ffe66d" />}
					onPress={logOut}
				/>
			</View>
		</Screen>
	);
}

const styles = StyleSheet.create({
	screen: {
		backgroundColor: colors.light,
	},
	container: {
		// marginVertical: 20,
	},
	listItemContainer: {
		padding: 20,
		backgroundColor: colors.white,
	},
});
