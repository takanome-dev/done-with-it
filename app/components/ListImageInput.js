import React, { useRef } from "react";
import { StyleSheet, ScrollView, View } from "react-native";
import ImageInput from "./ImageInput";

export default function ListImageInput({
	imageUris = [],
	onAddImage,
	onRemoveImage,
}) {
	const scrollView = useRef();

	return (
		<View>
			<ScrollView
				horizontal
				ref={scrollView}
				onContentSizeChange={() => scrollView.current.scrollToEnd()}
			>
				<View style={styles.container}>
					{imageUris.map((imageUri) => (
						<View key={imageUri} style={styles.image}>
							<ImageInput
								imageUri={imageUri}
								onChangeImage={() => onRemoveImage(imageUri)}
							/>
						</View>
					))}
					<ImageInput onChangeImage={(uri) => onAddImage(uri)} />
				</View>
			</ScrollView>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flexDirection: "row",
	},
	image: {
		marginRight: 10,
	},
});
