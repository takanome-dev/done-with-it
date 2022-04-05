import { useState } from "react";
import { StyleSheet, Text, View, Image } from "react-native";
import "react-native-gesture-handler";
import Picker from "./app/components/Picker";

import Screen from "./app/components/Screen";

const items = [
	{ label: "Furniture", value: 1 },
	{ label: "Camera", value: 2 },
	{ label: "Sport", value: 3 },
];

export default function App() {
	return (
		<Screen>
			<View style={{ margin: 20 }}>
				<Picker icon="apps" placeholder="Category" items={items} />
			</View>
		</Screen>
	);
}

const styles = StyleSheet.create({});
