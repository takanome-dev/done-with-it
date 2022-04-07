import { useEffect, useState } from "react";
import * as Location from "expo-location";

export default function useLocation() {
	const [location, setLocation] = useState();

	const requestLocation = async () => {
		const { granted } = await Location.requestForegroundPermissionsAsync();
		if (!granted) return;

		const {
			coords: { latitude, longitude },
		} = await Location.getLastKnownPositionAsync();
		setLocation({ latitude, longitude });
	};

	useEffect(() => {
		requestLocation();
	}, []);

	return location;
}
