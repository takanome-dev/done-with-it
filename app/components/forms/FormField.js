import React from "react";
import { useFormikContext } from "formik";

import ErrorMessage from "../ErrorMessage";
import TextInput from "../TextInput";

export default function FormField({ name, ...props }) {
	const { errors, setFieldValue, setFieldTouched, touched, values } =
		useFormikContext();

	return (
		<>
			<TextInput
				onBlur={() => setFieldTouched(name)}
				onChangeText={(text) => setFieldValue(name, text)}
				value={values[name]}
				{...props}
			/>
			<ErrorMessage error={errors[name]} visible={touched[name]} />
		</>
	);
}
