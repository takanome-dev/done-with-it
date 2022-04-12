import React from "react";
import { useFormikContext } from "formik";

import Picker from "../Picker";
import ErrorMessage from "../ErrorMessage";

export default function FormPicker({
	items,
	icon,
	name,
	numberOfColumns,
	PickerItemComponent,
	placeholder,
	width,
}) {
	const { errors, setFieldValue, touched, values } = useFormikContext();

	return (
		<>
			<Picker
				items={items}
				icon={icon}
				onSelectedItem={(item) => setFieldValue(name, item)}
				numberOfColumns={numberOfColumns}
				PickerItemComponent={PickerItemComponent}
				placeholder={placeholder}
				selectedItem={values[name]}
				width={width}
			/>
			<ErrorMessage error={errors[name]} visible={touched[name]} />
		</>
	);
}
