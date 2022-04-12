import apiClient from "./client";

const endpoint = "/users";

const register = (userInfo) => apiClient.post(endpoint, userInfo);

const getUser = (id) => apiClient.get(`${endpoint}/${id}`);

export default {
	register,
	getUser,
};
