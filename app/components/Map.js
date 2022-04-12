import React from "react";
import { StyleSheet } from "react-native";
import MapView from "react-native-maps";

export default function Map({ latitude, longitude }) {
	return (
		<MapView
			loadingEnabled={true}
			region={{
				latitude,
				longitude,
				latitudeDelta: 0.0922,
				longitudeDelta: 0.0421,
			}}
			style={styles.map}
		/>
	);
}

const styles = StyleSheet.create({
	map: {
		width: "100%",
		height: 300,
	},
});
