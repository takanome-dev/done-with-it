import React, { useState } from "react";
import {
	Modal,
	StyleSheet,
	View,
	TouchableWithoutFeedback,
	Pressable,
	FlatList,
} from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import colors from "../config/colors";
import Text from "../components/Text";
import PickerItem from "./PickerItem";
import Button from "./Button";

export default function Picker({
	icon,
	items,
	PickerItemComponent = PickerItem,
	placeholder,
	numberOfColumns = 1,
	selectedItem,
	onSelectedItem,
	width = "100%",
}) {
	const [isVisible, setIsVisible] = useState(false);

	return (
		<>
			<TouchableWithoutFeedback onPress={() => setIsVisible(!isVisible)}>
				<View style={[styles.container, { width }]}>
					{icon && (
						<MaterialCommunityIcons
							style={styles.icon}
							name={icon}
							size={30}
							color={colors.medium}
						/>
					)}
					{selectedItem ? (
						<Text style={styles.text}>{selectedItem.label}</Text>
					) : (
						<Text style={styles.placeholder}>{placeholder}</Text>
					)}
					<MaterialCommunityIcons
						name="chevron-down"
						size={30}
						color={colors.medium}
					/>
				</View>
			</TouchableWithoutFeedback>
			<Modal animationType="slide" visible={isVisible}>
				<View style={styles.modalCOntainer}>
					<Button
						title="Close"
						onPress={() => setIsVisible(!isVisible)}
						color="secondary"
					/>
					<FlatList
						data={items}
						keyExtractor={(i) => i.value.toString()}
						renderItem={({ item }) => (
							<PickerItemComponent
								item={item}
								onPress={() => {
									onSelectedItem(item);
									setIsVisible(!isVisible);
								}}
							/>
						)}
						numColumns={numberOfColumns}
					/>
				</View>
			</Modal>
		</>
	);
}

const styles = StyleSheet.create({
	container: {
		flexDirection: "row",
		alignItems: "center",
		backgroundColor: colors.light,
		borderRadius: 10,
		padding: 15,
		marginVertical: 10,
	},
	icon: {
		marginRight: 10,
	},
	modalCOntainer: {
		margin: 10,
	},
	placeholder: {
		color: colors.medium,
		flex: 1,
	},
	text: {
		flex: 1,
	},
});
