import React from "react";
import { Alert, Keyboard, StyleSheet } from "react-native";
import * as Yup from "yup";
import * as Notifications from "expo-notifications";

import { Form, FormField } from "./forms";
import messagesApi from "../api/messages";
import SubmitButton from "./SubmitButton";

const validationSchema = Yup.object().shape({
	message: Yup.string().required().min(1).label("Message"),
});

Notifications.setNotificationHandler({
	handleNotification: async () => ({
		shouldPlaySound: true,
		shouldShowAlert: true,
		shouldSetBadge: true,
	}),
});

export default function ContactSellerForm({ listing }) {
	const handleSubmit = async ({ message }, { resetForm }) => {
		Keyboard.dismiss();

		const res = await messagesApi.sendMessage({
			message,
			listingId: listing.id,
		});

		if (!res.ok) {
			console.log({ res });
			return Alert.alert("Error", "Could not send the message to the seller");
		}

		resetForm();

		Notifications.scheduleNotificationAsync({
			content: {
				title: "Awesome!",
				body: "Your message was sent to the seller",
			},
			trigger: null,
		});
	};

	return (
		<Form
			initialValues={{ message: "" }}
			validationSchema={validationSchema}
			onSubmit={handleSubmit}
		>
			<FormField
				maxLength={255}
				multiline
				name="message"
				numberOfLines={3}
				placeholder="Message..."
			/>
			<SubmitButton title="Contact Seller" />
		</Form>
	);
}

const styles = StyleSheet.create({});
