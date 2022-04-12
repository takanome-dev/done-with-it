import apiClient from "./client";

const endpoint = "/messages";

const getMessages = () => apiClient.get(endpoint);

const sendMessage = (message) => apiClient.post(endpoint, message);

export default {
	getMessages,
	sendMessage,
};
