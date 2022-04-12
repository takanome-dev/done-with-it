import { StyleSheet, Text, TouchableOpacity } from "react-native";
import colors from "../config/colors";

export default function Button({
	title,
	color = "primary",
	textColor = "white",
	onPress,
}) {
	return (
		<TouchableOpacity
			onPress={onPress}
			style={[styles.button, { backgroundColor: colors[color] }]}
		>
			<Text style={[styles.text, { color: colors[textColor] }]}>{title}</Text>
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
		elevation: 3,
	},
	text: {
		fontSize: 20,
		textTransform: "uppercase",
		fontWeight: "bold",
	},
});
