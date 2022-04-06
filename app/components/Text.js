import React from "react";
import { Text } from "react-native";

import defaultStyles from "../config/defaultStyles";
import colors from "../config/colors";

export default function AppText({ children, style, numberOfLines }) {
	return (
		<Text
			placeholderTextColor={colors.medium}
			style={[defaultStyles.text, style]}
			numberOfLines={numberOfLines}
		>
			{children}
		</Text>
	);
}
