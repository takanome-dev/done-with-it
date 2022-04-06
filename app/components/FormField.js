import React from "react";
import { useFormikContext } from "formik";

import ErrorMessage from "./ErrorMessage";
import TextInput from "./TextInput";

export default function FormField({ name, ...props }) {
	const { errors, handleChange, setFieldTouched, touched } = useFormikContext();

	return (
		<>
			<TextInput
				onBlur={() => setFieldTouched(name)}
				onChangeText={handleChange(name)}
				{...props}
			/>
			<ErrorMessage error={errors[name]} visible={touched[name]} />
		</>
	);
}
