import React, { useEffect, useState } from "react";
import {
	TouchableWithoutFeedback,
	StyleSheet,
	View,
	ScrollView,
} from "react-native";

import categoriesApi from "../api/categories";
import colors from "../config/colors";
import Text from "./Text";

export default function FilterListings({ selectedItem, onSelectedItem }) {
	const [categories, setCategories] = useState([]);

	const loadCategories = async () => {
		const res = await categoriesApi.getCategories();
		if (!res.ok) return;
		return setCategories(res.data);
	};

	useEffect(() => {
		loadCategories();
	}, []);

	return (
		<View style={styles.container}>
			<ScrollView horizontal>
				{categories.map((c) => (
					<TouchableWithoutFeedback
						key={c.id}
						onPress={() => onSelectedItem({ id: c.id, name: c.name })}
					>
						<View
							style={[
								styles.filterItemContainer,
								{
									backgroundColor:
										selectedItem.id === c.id ? colors.secondary : colors.white,
								},
							]}
						>
							<Text
								style={[
									styles.filterItem,
									{
										color:
											selectedItem.id === c.id ? colors.white : colors.medium,
									},
								]}
							>
								{c.name}
							</Text>
						</View>
					</TouchableWithoutFeedback>
				))}
			</ScrollView>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		marginBottom: 20,
	},
	filterItemContainer: {
		alignItems: "center",
		borderRadius: 15,
		paddingVertical: 5,
		paddingHorizontal: 15,
		marginHorizontal: 5,
		justifyContent: "center",
	},
	filterItem: {
		fontWeight: "600",
	},
});
