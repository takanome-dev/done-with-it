import apiClient from "./client";

const getCategories = () => apiClient.get("/categories");

export default {
	getCategories,
};
