import React from "react";
import { useFormikContext } from "formik";

import ListImageInput from "../ListImageInput";
import ErrorMessage from "../ErrorMessage";

export default function FormImagePicker({ name }) {
	const { errors, setFieldValue, touched, values } = useFormikContext();
	const imageUris = values[name];

	const handleAddImage = (uri) => setFieldValue(name, [...imageUris, uri]);

	const handleRemoveImage = (uri) =>
		setFieldValue(
			name,
			imageUris.filter((imageUri) => imageUri !== uri)
		);

	return (
		<>
			<ListImageInput
				imageUris={imageUris}
				onAddImage={handleAddImage}
				onRemoveImage={handleRemoveImage}
			/>
			<ErrorMessage error={errors[name]} visible={touched[name]} />
		</>
	);
}
