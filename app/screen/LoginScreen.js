import React, { useState } from "react";
import { StyleSheet, Image } from "react-native";
import * as Yup from "yup";

import authApi from "../api/auth";
import ActivityIndicator from "../components/ActivityIndicator";
import ErrorMessage from "../components/ErrorMessage";
import { Form, FormField } from "../components/forms";
import Screen from "../components/Screen";
import SubmitButton from "../components/SubmitButton";
import useAuth from "../hooks/useAuth";
import useQuery from "../hooks/useQuery";

const validationSchema = Yup.object().shape({
	email: Yup.string().email().required().label("Email"),
	password: Yup.string().min(8).required().label("Password"),
});

export default function LoginScreen() {
	const [error, setError] = useState(false);
	const authApiReq = useQuery(authApi.login);
	const auth = useAuth();

	const handleSubmit = async (userInfo) => {
		const res = await authApiReq.request(userInfo);

		if (!res.ok) return setError(true);

		setError(false);
		auth.logIn(res.data);
	};

	return (
		<>
			<ActivityIndicator visible={authApiReq.loading} />
			<Screen style={styles.screen}>
				<Image style={styles.logo} source={require("../assets/logo-red.png")} />
				<Form
					initialValues={{ email: "", password: "" }}
					onSubmit={handleSubmit}
					validationSchema={validationSchema}
				>
					<ErrorMessage error="Invalid email or/and password" visible={error} />
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
		marginVertical: 50,
		alignSelf: "center",
	},
});
