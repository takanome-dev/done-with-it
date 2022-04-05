import { Platform } from "react-native";

export default {
	text: {
		fontSize: 20,
		fontWeight: "500",
		fontFamily: Platform.OS === "android" ? "Roboto" : "Avenir",
	},
};
