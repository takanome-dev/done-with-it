import apiClient from "./client";

const login = (userInfo) => apiClient.post("/auth", userInfo);

export default {
	login,
};
