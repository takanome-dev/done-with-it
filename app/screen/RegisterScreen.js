import React from "react";
import { StyleSheet, Image } from "react-native";
import * as Yup from "yup";

import { Form, FormField } from "../components/forms";
import Screen from "../components/Screen";
import SubmitButton from "../components/SubmitButton";

const validationSchema = Yup.object().shape({
	name: Yup.string().required().label("Name"),
	email: Yup.string().email().required().label("Email"),
	password: Yup.string().min(8).required().label("Password"),
});

export default function RegisterScreen() {
	return (
		<Screen style={styles.screen}>
			<Image style={styles.logo} source={require("../assets/logo-red.png")} />
			<Form
				initialValues={{ name: "", email: "", password: "" }}
				onSubmit={(values) => console.log({ values })}
				validationSchema={validationSchema}
			>
				<FormField
					autoCorrect={false}
					icon="account"
					name="name"
					placeholder="Name"
					textContentType="name"
				/>
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
				<SubmitButton title="Register" />
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
