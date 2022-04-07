import React from "react";
import { StyleSheet, TextInput, View } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import colors from "../config/colors";
import defaultStyles from "../config/defaultStyles";

export default function AppTextInput({ icon, width = "100%", ...props }) {
	return (
		<View style={[styles.container, { width }]}>
			{icon && (
				<MaterialCommunityIcons
					style={styles.icon}
					name={icon}
					size={30}
					color={colors.medium}
				/>
			)}
			<TextInput style={[defaultStyles.text, { width: "100%" }]} {...props} />
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
	},
	icon: {
		marginRight: 10,
	},
});
