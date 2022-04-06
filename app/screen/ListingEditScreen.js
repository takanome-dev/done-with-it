import React, { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import * as Yup from "yup";

import Screen from "../components/Screen";
import TextInput from "../components/TextInput";
import Button from "../components/Button";
import Picker from "../components/Picker";
import CategoryPickerItem from "../components/CategoryPickerItem";
import FormField from "../components/FormField";
import Form from "../components/Form";
import FormPicker from "../components/FormPicker";
import SubmitButton from "../components/SubmitButton";

const categories = [
	{
		backgroundColor: "#fc5c65",
		icon: "floor-lamp",
		label: "Furniture",
		value: 1,
	},
	{
		backgroundColor: "#fd9644",
		icon: "car",
		label: "Cars",
		value: 2,
	},
	{
		backgroundColor: "#fed330",
		icon: "camera",
		label: "Cameras",
		value: 3,
	},
	{
		backgroundColor: "#26de81",
		icon: "cards",
		label: "Games",
		value: 4,
	},
	{
		backgroundColor: "#2bcbba",
		icon: "shoe-heel",
		label: "Clothing",
		value: 5,
	},
	{
		backgroundColor: "#45aaf2",
		icon: "basketball",
		label: "Sports",
		value: 6,
	},
	{
		backgroundColor: "#4b7bec",
		icon: "headphones",
		label: "Movies & Music",
		value: 7,
	},
	{
		backgroundColor: "#a55eea",
		icon: "book-open-variant",
		label: "Books",
		value: 8,
	},
	{
		backgroundColor: "#778ca3",
		icon: "application",
		label: "Other",
		value: 9,
	},
];

const validationSchema = Yup.object().shape({
	title: Yup.string().required().min(1).label("Title"),
	price: Yup.number().required().min(1).max(10000).label("Price"),
	description: Yup.string().required().label("Description"),
	category: Yup.object().required().nullable().label("Description"),
});

export default function ListingEditScreen() {
	const [category, setCategory] = useState("Category");

	return (
		<Screen style={styles.screen}>
			<Form
				initialValues={{
					title: "",
					price: "",
					description: "",
					category: null,
				}}
				validationSchema={validationSchema}
				onSubmit={(values) => console.log({ values })}
			>
				<FormField maxLength={255} name="title" placeholder="Title" />
				<FormField
					maxLength={8}
					name="price"
					keyboardType="numeric"
					placeholder="Price"
				/>
				<FormPicker
					items={categories}
					name="category"
					PickerItemComponent={CategoryPickerItem}
					placeholder="Category"
					numberOfColumns={3}
				/>
				<FormField
					maxLength={255}
					multiline
					numberOfLines={3}
					name="description"
					placeholder="Description"
				/>
				<SubmitButton title="Post" />
			</Form>
		</Screen>
	);
}

const styles = StyleSheet.create({
	screen: {
		padding: 20,
		justifyContent: "center",
	},
});
