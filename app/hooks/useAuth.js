import { useContext } from "react";
import jwtDecode from "jwt-decode";

import AuthContext from "../auth/context";
import authStorage from "../auth/storage";

export default function useAuth() {
	const { user, setUser } = useContext(AuthContext);

	const logIn = async (token) => {
		await authStorage.storeToken(token);
		const user = jwtDecode(token);
		setUser(user);
	};

	const logOut = async () => {
		await authStorage.removeToken();
		setUser(null);
	};

	return { logIn, logOut, user, setUser };
}
