import React, { useState } from "react";
import { StyleSheet, Image } from "react-native";
import * as Yup from "yup";

import usersApi from "../api/users";
import ActivityIndicator from "../components/ActivityIndicator";
import ErrorMessage from "../components/ErrorMessage";
import { Form, FormField } from "../components/forms";
import Screen from "../components/Screen";
import SubmitButton from "../components/SubmitButton";
import useAuth from "../hooks/useAuth";
import useQuery from "../hooks/useQuery";

const validationSchema = Yup.object().shape({
	name: Yup.string().required().label("Name"),
	email: Yup.string().email().required().label("Email"),
	password: Yup.string().min(8).required().label("Password"),
});

export default function RegisterScreen() {
	const [error, setError] = useState();
	const registerApi = useQuery(usersApi.register);
	const auth = useAuth();

	const handleSubmit = async (userInfo) => {
		const res = await registerApi.request(userInfo);
		if (!res.ok) return setError(res.data.error);
		auth.logIn(res.data);
	};

	return (
		<>
			<ActivityIndicator visible={registerApi.loading} />
			<Screen style={styles.screen}>
				<Image style={styles.logo} source={require("../assets/logo-red.png")} />
				<Form
					initialValues={{ name: "", email: "", password: "" }}
					onSubmit={handleSubmit}
					validationSchema={validationSchema}
				>
					<ErrorMessage error={error} visible={error} />
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
		</>
	);
}

const styles = StyleSheet.create({
	screen: {
		padding: 20,
	},
	logo: {
		width: 90,
		height: 90,
		marginVertical: 20,
		alignSelf: "center",
	},
});
