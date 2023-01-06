import { create } from "apisauce";
import cache from "../utility/cache";
import authStorage from "../auth/storage";

const apiClient = create({
	baseURL: "https://done-with-it-api.onrender.com/api",
});

apiClient.addAsyncRequestTransform(async (req) => {
	const token = await authStorage.getToken();
	if (!token) return;
	req.headers["x-auth-token"] = token;
});

const get = apiClient.get;

apiClient.get = async (url, params, axiosConfig) => {
	const response = await get(url, params, axiosConfig);
	const data = await cache.get(url);

	if (response.ok) {
		if (data) return response;

		cache.store(url, response.data);
		return response;
	}

	data ? { ok: true, data } : response;
};

export default apiClient;
