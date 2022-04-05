import React from "react";
import { StyleSheet, TextInput, View } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import colors from "../config/colors";
import defaultStyles from "../config/defaultStyles";

export default function AppTextInput({ icon, ...props }) {
	return (
		<View style={styles.container}>
			{icon && (
				<MaterialCommunityIcons
					style={styles.icon}
					name={icon}
					size={30}
					color={colors.medium}
				/>
			)}
			<TextInput style={defaultStyles.text} {...props} />
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flexDirection: "row",
		backgroundColor: colors.light,
		borderRadius: 10,
		padding: 15,
		marginVertical: 10,
		width: "100%",
	},
	icon: {
		marginRight: 10,
	},
});
