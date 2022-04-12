import apiClient from "./client";

const endpoint = "/messages";

const getMessages = () => apiClient.get(endpoint);

export default {
	getMessages,
};
