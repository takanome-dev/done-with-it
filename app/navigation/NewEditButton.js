import { TouchableOpacity, StyleSheet, View } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import colors from "../config/colors";

export default function NewEditButton({ onPress }) {
	return (
		<TouchableOpacity onPress={onPress}>
			<View style={styles.container}>
				<MaterialCommunityIcons
					name="plus-circle"
					size={40}
					color={colors.white}
				/>
			</View>
		</TouchableOpacity>
	);
}

const styles = StyleSheet.create({
	container: {
		alignItems: "center",
		backgroundColor: colors.primary,
		borderRadius: 40,
		borderColor: colors.white,
		borderWidth: 10,
		bottom: 25,
		justifyContent: "center",
		width: 80,
		height: 80,
	},
});
