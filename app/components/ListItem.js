import React from "react";
import { StyleSheet, View, Image, TouchableHighlight } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Swipeable } from "react-native-gesture-handler";

import Text from "./Text";
import colors from "../config/colors";

export default function ListItem({
	title,
	subTitle,
	image,
	onPress,
	IconComponent,
	renderRightActions,
}) {
	return (
		<Swipeable renderRightActions={renderRightActions}>
			<TouchableHighlight underlayColor={colors.medium} onPress={onPress}>
				<View style={styles.container}>
					{IconComponent}
					{image && <Image style={styles.image} source={image} />}
					<View style={styles.detailsContainer}>
						<Text style={styles.title} numberOfLines={1}>
							{title}
						</Text>
						{subTitle && (
							<Text style={styles.subTitle} numberOfLines={2}>
								{subTitle}
							</Text>
						)}
					</View>
					<MaterialCommunityIcons
						name="chevron-right"
						size={30}
						color={colors.medium}
					/>
				</View>
			</TouchableHighlight>
		</Swipeable>
	);
}

const styles = StyleSheet.create({
	container: {
		flexDirection: "row",
		backgroundColor: colors.white,
		// padding: 20,
		alignItems: "center",
	},
	image: {
		width: 70,
		height: 70,
		borderRadius: 70 / 2,
	},
	detailsContainer: {
		flex: 1,
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
