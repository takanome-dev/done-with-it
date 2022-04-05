import React from "react";
import { StyleSheet, View, TouchableOpacity } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import Text from "./Text";
import Icon from "./Icon";

export default function PickerItem({ label, icon, onPress }) {
	return (
		<TouchableOpacity style={styles.container} onPress={onPress}>
			{icon && <Icon name={icon} size={60} />}
			<Text style={styles.item}>{label}</Text>
		</TouchableOpacity>
	);
}

const styles = StyleSheet.create({
	container: {},
	item: {},
});
