import { useEffect, useState } from "react";

export default function useQuery(apiFunc) {
	const [loading, setLoading] = useState(false);
	const [error, setError] = useState(false);
	const [data, setData] = useState();

	const request = async (...args) => {
		setLoading(true);
		const res = await apiFunc(...args);
		setLoading(false);

		setError(!res.ok);
		setData(res.data);
		return res;
	};

	useEffect(() => {
		request();
	}, []);

	return { data, error, loading, request };
}
