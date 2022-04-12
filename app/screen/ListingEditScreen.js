import React, { useState } from "react";
import { StyleSheet } from "react-native";
import * as Yup from "yup";

import CategoryPickerItem from "../components/CategoryPickerItem";
import {
	Form,
	FormField,
	FormPicker,
	FormImagePicker,
} from "../components/forms";
import listingsApi from "../api/listings";
import Screen from "../components/Screen";
import SubmitButton from "../components/SubmitButton";
import useLocation from "../hooks/useLocation";
import UploadScreen from "./UploadScreen";

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
	category: Yup.object().required().nullable().label("Category"),
	images: Yup.array().min(1, "Please select at least one image"),
});

export default function ListingEditScreen() {
	const [progress, setProgress] = useState(0);
	const [uploadVisible, setUploadVisible] = useState(false);
	const location = useLocation();

	const handleSubmit = async (listing, { resetForm }) => {
		setProgress(0);
		setUploadVisible(true);
		const result = await listingsApi.addListing(
			{ ...listing, location },
			(progress) => setProgress(progress)
		);

		if (!result.ok) {
			setUploadVisible(false);
			return alert("Could not save listing");
		}

		resetForm();
	};

	return (
		<Screen style={styles.screen}>
			<UploadScreen
				onDone={() => setUploadVisible(false)}
				progress={progress}
				visible={uploadVisible}
			/>
			<Form
				initialValues={{
					title: "",
					price: "",
					description: "",
					category: null,
					images: [],
				}}
				validationSchema={validationSchema}
				onSubmit={handleSubmit}
			>
				<FormImagePicker name="images" />
				<FormField
					maxLength={255}
					name="title"
					placeholder="Title"
					icon="pencil-outline"
				/>
				<FormField
					maxLength={8}
					name="price"
					keyboardType="numeric"
					placeholder="Price"
					width={120}
					icon="bitcoin"
				/>
				<FormPicker
					items={categories}
					icon="apps"
					name="category"
					PickerItemComponent={CategoryPickerItem}
					placeholder="Category"
					numberOfColumns={3}
					width="60%"
				/>
				<FormField
					maxLength={255}
					multiline
					numberOfLines={3}
					name="description"
					placeholder="Description"
					icon="note-text-outline"
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
