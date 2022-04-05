import { StyleSheet, View, Image } from "react-native";
import React from "react";

import Text from "./Text";
import colors from "../config/colors";
export default function ListItem({ title, subTitle, image, IconComponent }) {
	return (
		<View style={styles.container}>
			{IconComponent}
			{image && <Image style={styles.image} source={image} />}
			<View style={styles.detailsContainer}>
				<Text style={styles.title}>{title}</Text>
				{subTitle && <Text style={styles.subTitle}>{subTitle}</Text>}
			</View>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flexDirection: "row",
		backgroundColor: colors.white,
		padding: 20,
	},
	image: {
		width: 70,
		height: 70,
		borderRadius: 70 / 2,
	},
	detailsContainer: {
		marginLeft: 10,
		justifyContent: "center",
	},
	title: {
		fontWeight: "600",
		fontSize: 22,
	},
	subTitle: {
		color: colors.medium,
	},
});
