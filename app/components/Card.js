import {
	StyleSheet,
	TouchableWithoutFeedback,
	View,
	Image,
} from "react-native";
import colors from "../config/colors";
import Text from "../components/Text";

export default function Card({ title, subTitle, image, onPress }) {
	return (
		<TouchableWithoutFeedback onPress={onPress}>
			<View style={styles.container}>
				<Image style={styles.image} source={image} />
				<View style={styles.detailsContainer}>
					<Text style={styles.title}>{title}</Text>
					<Text style={styles.subTitle}>{subTitle}</Text>
				</View>
			</View>
		</TouchableWithoutFeedback>
	);
}

const styles = StyleSheet.create({
	container: {
		backgroundColor: colors.white,
		borderRadius: 15,
		overflow: "hidden",
		marginBottom: 20,
	},
	detailsContainer: {
		padding: 20,
	},
	image: {
		width: "100%",
		height: 200,
	},
	title: {
		marginBottom: 6,
	},
	subTitle: {
		color: colors.secondary,
		fontWeight: "bold",
	},
});
