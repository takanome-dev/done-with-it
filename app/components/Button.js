import { StyleSheet, Text, TouchableOpacity } from "react-native";
import colors from "../config/colors";

export default function Button({ title, color = "primary" }) {
	return (
		<TouchableOpacity
			style={[styles.button, { backgroundColor: colors[color] }]}
		>
			<Text style={styles.text}>{title}</Text>
		</TouchableOpacity>
	);
}

const styles = StyleSheet.create({
	button: {
		width: "100%",
		padding: 15,
		borderRadius: 10,
		marginVertical: 10,
		justifyContent: "center",
		alignItems: "center",
	},
	text: {
		color: colors.white,
		fontSize: 20,
		textTransform: "uppercase",
		fontWeight: "bold",
	},
});
