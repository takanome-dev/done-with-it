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

export default function Picker({ icon, placeholder, items }) {
	const [isVisible, setIsVisible] = useState(false);
	const [selectedItem, setSelectedItem] = useState(items[0].label);

	return (
		<>
			<TouchableWithoutFeedback onPress={() => setIsVisible(!isVisible)}>
				<View style={styles.container}>
					{icon && (
						<MaterialCommunityIcons
							style={styles.icon}
							name={icon}
							size={30}
							color={colors.medium}
						/>
					)}
					{/* {selectedItem ? ( */}
					<Text style={styles.text}>{selectedItem}</Text>
					{/* ) : (
						<Text style={styles.text}>{placeholder}</Text>
					)} */}
					<MaterialCommunityIcons
						name="chevron-down"
						size={30}
						color={colors.medium}
					/>
				</View>
			</TouchableWithoutFeedback>
			<Modal animationType="slide" visible={isVisible}>
				<Pressable
					onPress={() => setIsVisible(!isVisible)}
					style={styles.closeButton}
				>
					<Text style={{ color: colors.white }}>Close</Text>
				</Pressable>
				<View style={styles.pickerItemContainer}>
					<FlatList
						data={items}
						keyExtractor={(i) => i.value.toString()}
						renderItem={({ item }) => (
							<PickerItem
								label={item.label}
								onPress={() => {
									setSelectedItem(item.label);
									setIsVisible(!isVisible);
								}}
							/>
						)}
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
		width: "100%",
	},
	icon: {
		marginRight: 10,
	},
	text: {
		flex: 1,
	},
	closeButton: {
		backgroundColor: colors.secondary,
		padding: 15,
		margin: 10,
		borderRadius: 10,
		justifyContent: "center",
		alignItems: "center",
		elevation: 5,
	},
	pickerItemContainer: {
		margin: 20,
	},
});
