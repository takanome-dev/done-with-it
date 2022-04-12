import React from "react";
import { StyleSheet, FlatList, View } from "react-native";

import ActivityIndicator from "../components/ActivityIndicator";
import Button from "../components/Button";
import Card from "../components/Card";
import colors from "../config/colors";
import listingsApi from "../api/listings";
import routes from "../navigation/routes";
import Screen from "../components/Screen";
import Text from "../components/Text";
import useQuery from "../hooks/useQuery";

export default function ListingsScreen({ navigation }) {
	const {
		data: listings,
		loading,
		error,
		request: loadListings,
	} = useQuery(listingsApi.getUserListings);

	return (
		<>
			<ActivityIndicator visible={loading} />
			<Screen style={styles.screen}>
				{error && (
					<View>
						<Text>Couldn't get the listings.</Text>
						<Button title="Retry" onPress={loadListings} />
					</View>
				)}
				<FlatList
					data={listings}
					keyExtractor={(l) => l.id.toString()}
					renderItem={({ item }) => (
						<Card
							title={item.title}
							subTitle={`$${item.price}`}
							imageUrl={item.images[0].url}
							onPress={() => navigation.navigate(routes.LISTING_DETAILS, item)}
						/>
					)}
					refreshing={false}
					onRefresh={() => console.log("Refreshing")}
				/>
			</Screen>
		</>
	);
}

const styles = StyleSheet.create({
	screen: {
		backgroundColor: colors.light,
		padding: 20,
		// marginTop: -35,
	},
});
