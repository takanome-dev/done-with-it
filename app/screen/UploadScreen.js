import React from "react";
import { StyleSheet, Modal, View } from "react-native";
import LottieView from "lottie-react-native";
import * as Progress from "react-native-progress";

import colors from "../config/colors";

export default function UploadScreen({ onDone, progress, visible }) {
	if (!visible) return null;

	return (
		<Modal visible={visible}>
			<View style={styles.container}>
				{progress < 1 ? (
					<Progress.Bar
						color={colors.primary}
						progress={progress}
						width={200}
					/>
				) : (
					<LottieView
						autoPlay
						loop={false}
						onAnimationFinish={onDone}
						source={require("../assets/animations/done.json")}
					/>
				)}
			</View>
		</Modal>
	);
}

const styles = StyleSheet.create({
	container: {
		alignItems: "center",
		justifyContent: "center",
		flex: 1,
	},
});
