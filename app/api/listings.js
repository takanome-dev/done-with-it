import apiClient from "./client";

const endpoint = "/listings";

const getListings = () => apiClient.get(endpoint);

const getUserListings = () => apiClient.get("/userListings/listings");

const addListing = (listing, onUploadProgress) => {
	const data = new FormData();
	data.append("title", listing.title);
	data.append("description", listing.description);
	data.append("price", listing.price);
	data.append("categoryId", listing.category.value);

	listing.images.forEach((image, i) => {
		data.append("images", {
			name: `image${i}`,
			type: "image/jpeg",
			uri: image,
		});
	});

	if (listing.location)
		data.append("location", JSON.stringify(listing.location));

	return apiClient.post(endpoint, data, {
		onUploadProgress: (progress) =>
			onUploadProgress(progress.loaded / progress.total),
	});
};

export default {
	getListings,
	getUserListings,
	addListing,
};
