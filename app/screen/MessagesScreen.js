import React, { useState } from "react";
import { StyleSheet, FlatList, View } from "react-native";

import colors from "../config/colors";
import ListItem from "../components/ListItem";
import ListItemSeparator from "../components/ListItemSeparator";
import messagesApi from "../api/messages";
import Screen from "../components/Screen";
import useQuery from "../hooks/useQuery";
import ActivityIndicator from "../components/ActivityIndicator";

export default function MessagesScreen({ renderRightActions }) {
	const [refresh, setRefresh] = useState(false);
	const { data: messages, loading } = useQuery(messagesApi.getMessages);

	return (
		<>
			<ActivityIndicator visible={loading} />
			<Screen style={styles.screen}>
				<FlatList
					data={messages}
					keyExtractor={(m) => m.id.toString()}
					renderItem={({ item }) => (
						<ListItem
							title={item.fromUser.name}
							subTitle={item.content}
							renderRightActions={() => (
								<View style={{ backgroundColor: "red", width: 70 }}></View>
							)}
						/>
					)}
					ItemSeparatorComponent={ListItemSeparator}
					refreshing={refresh}
					onRefresh={() => console.log}
				/>
			</Screen>
		</>
	);
}

const styles = StyleSheet.create({
	screen: {
		backgroundColor: colors.light,
		marginTop: -40,
	},
});
