import React from "react";
import { useFormikContext } from "formik";

import Picker from "../Picker";
import ErrorMessage from "../ErrorMessage";

export default function FormPicker({
	items,
	name,
	numberOfColumns,
	PickerItemComponent,
	placeholder,
}) {
	const { errors, setFieldValue, touched, values } = useFormikContext();

	return (
		<>
			<Picker
				items={items}
				onSelectedItem={(item) => setFieldValue(name, item)}
				numberOfColumns={numberOfColumns}
				PickerItemComponent={PickerItemComponent}
				placeholder={placeholder}
				selectedItem={values[name]}
			/>
			<ErrorMessage error={errors[name]} visible={touched[name]} />
		</>
	);
}
