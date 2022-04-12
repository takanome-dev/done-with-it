import React, { useEffect, useState } from "react";
import {
	Alert,
	Image,
	KeyboardAvoidingView,
	Platform,
	ScrollView,
	StyleSheet,
	View,
} from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import colors from "../config/colors";
import ContactSellerForm from "../components/ContactSellerForm";
import ListItem from "../components/ListItem";
import Text from "../components/Text";
import usersApi from "../api/users";
import Screen from "../components/Screen";

export default function ListingDetailsScreen({ navigation, route }) {
	const [userListing, setUserListing] = useState({
		name: "",
		numberOfListings: 0,
	});
	const listing = route.params;

	const loadUser = async () => {
		const res = await usersApi.getUser(listing.userId);
		if (!res.ok) {
			console.log(res);
			return Alert.alert("Error", "Error while getting user info");
		}

		setUserListing({
			name: res.data.name,
			numberOfListings: res.data.listings,
		});
	};

	useEffect(() => {
		loadUser();
	}, []);

	return (
		// <KeyboardAvoidingView
		// 	behavior="position"
		// 	keyboardVerticalOffset={Platform.OS === "ios" ? 0 : 100}
		// >
		<>
			{Platform.OS === "android" && (
				<MaterialCommunityIcons
					name="arrow-left"
					size={40}
					color={colors.white}
					style={styles.backButton}
					onPress={() => navigation.goBack()}
				/>
			)}
			<ScrollView>
				<Image style={styles.image} source={{ uri: listing.images[0].url }} />
				<View style={styles.detailsContainer}>
					<Text style={styles.title}>{listing.title}</Text>
					<Text style={styles.price}>${listing.price}</Text>
					<View style={styles.listItemContainer}>
						<ListItem
							title={userListing.name}
							subTitle={`${userListing.numberOfListings} listings`}
							image={require("../assets/takanome.png")}
						/>
					</View>
					<ContactSellerForm listing={listing} />
				</View>
			</ScrollView>
		</>
		// </KeyboardAvoidingView>
	);
}

const styles = StyleSheet.create({
	backButton: {
		position: "absolute",
		top: 40,
		left: 10,
		zIndex: 1,
	},
	detailsContainer: {
		padding: 20,
	},
	image: {
		width: "100%",
		height: 300,
	},
	listItemContainer: {
		paddingVertical: 10,
	},
	price: {
		marginVertical: 10,
		color: colors.secondary,
		fontWeight: "bold",
		fontSize: 22,
	},
	title: {
		fontSize: 25,
		fontWeight: "500",
	},
});
