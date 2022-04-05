import { StyleSheet, View } from "react-native";
import React from "react";

import Screen from "../components/Screen";
import TextInput from "../components/TextInput";

export default function RegisterScreen() {
	return (
		<Screen>
			<TextInput icon="user" placeholder="Name" />
			<TextInput icon="email" placeholder="Email" />
			<TextInput icon="lock" placeholder="Password" />
		</Screen>
	);
}

const styles = StyleSheet.create({});
