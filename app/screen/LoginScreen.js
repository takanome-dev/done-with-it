import React from "react";
import { StyleSheet, Image } from "react-native";

import * as Yup from "yup";

import Screen from "../components/Screen";
import FormField from "../components/FormField";
import SubmitButton from "../components/SubmitButton";
import Form from "../components/Form";

const validationSchema = Yup.object().shape({
	email: Yup.string().email().required().label("Email"),
	password: Yup.string().min(8).required().label("Password"),
});

export default function LoginScreen() {
	return (
		<Screen style={styles.screen}>
			<Image style={styles.logo} source={require("../assets/logo-red.png")} />
			<Form
				initialValues={{ email: "", password: "" }}
				onSubmit={(values) => console.log({ values })}
				validationSchema={validationSchema}
			>
				<FormField
					autoCapitalize="none"
					autoCorrect={false}
					icon="email"
					keyboardType="email-address"
					name="email"
					placeholder="Email"
					textContentType="emailAddress"
				/>
				<FormField
					autoCapitalize="none"
					autoCorrect={false}
					icon="lock"
					name="password"
					placeholder="Password"
					secureTextEntry
					textContentType="password"
				/>
				<SubmitButton title="Login" />
			</Form>
		</Screen>
	);
}

const styles = StyleSheet.create({
	screen: {
		padding: 20,
	},
	logo: {
		width: 90,
		height: 90,
		marginTop: 70,
		marginBottom: 50,
		alignSelf: "center",
	},
});
