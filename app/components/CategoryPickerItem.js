import React from "react";
import { StyleSheet, TouchableOpacity } from "react-native";

import Text from "./Text";
import Icon from "./Icon";

export default function CategoryPickerItem({ item, onPress }) {
	return (
		<TouchableOpacity style={styles.container} onPress={onPress}>
			<Icon name={item.icon} size={80} backgroundColor={item.backgroundColor} />
			<Text style={styles.item}>{item.label}</Text>
		</TouchableOpacity>
	);
}

const styles = StyleSheet.create({
	container: {
		paddingVertical: 10,
		alignItems: "center",
		width: "33%",
	},
	item: {
		marginTop: 5,
		textAlign: "center",
	},
});
