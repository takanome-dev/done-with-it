import React, { useEffect } from "react";
import {
	Alert,
	Image,
	StyleSheet,
	TouchableWithoutFeedback,
	View,
} from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import * as ImagePicker from "expo-image-picker";

import colors from "../config/colors";

export default function ImageInput({ imageUri, onChangeImage }) {
	const requestPermission = async () => {
		const { granted } = await ImagePicker.requestMediaLibraryPermissionsAsync();

		if (!granted) alert("You need to enable permission to access the library");
	};

	useEffect(() => {
		requestPermission();
	}, []);

	const handleSelectImage = async () => {
		try {
			const result = await ImagePicker.launchImageLibraryAsync({
				mediaTypes: ImagePicker.MediaTypeOptions.Images,
				quality: 0.5,
			});

			if (!result.cancelled) onChangeImage(result.uri);
		} catch (error) {
			console.log({ error });
		}
	};

	const handlePress = () => {
		if (!imageUri) handleSelectImage();
		else
			Alert.alert(
				"Delete Image",
				"Are you sure you want to delete this image?",
				[{ text: "Yes", onPress: () => onChangeImage(null) }, { text: "No" }]
			);
	};

	return (
		<TouchableWithoutFeedback onPress={handlePress}>
			<View style={styles.container}>
				{imageUri ? (
					<Image source={{ uri: imageUri }} style={styles.image} />
				) : (
					<MaterialCommunityIcons
						name="camera"
						size={40}
						color={colors.medium}
					/>
				)}
			</View>
		</TouchableWithoutFeedback>
	);
}

const styles = StyleSheet.create({
	container: {
		alignItems: "center",
		borderRadius: 10,
		backgroundColor: colors.light,
		justifyContent: "center",
		overflow: "hidden",
		width: 100,
		height: 100,
	},
	image: {
		width: "100%",
		height: "100%",
	},
});
