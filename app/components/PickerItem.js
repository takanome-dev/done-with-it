import React from "react";
import { StyleSheet, TouchableOpacity } from "react-native";

import Text from "./Text";

export default function PickerItem({ item, onPress }) {
	return (
		<TouchableOpacity style={styles.container} onPress={onPress}>
			<Text style={styles.item}>{item.label}</Text>
		</TouchableOpacity>
	);
}

const styles = StyleSheet.create({
	container: {
		padding: 10,
	},
	item: {
		fontSize: 22,
	},
});
