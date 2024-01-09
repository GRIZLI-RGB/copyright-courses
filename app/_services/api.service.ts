import axios from "../axios";
import { TSettings } from "../types";

/* [USERS] */
export const createLandingOrder = async (
	email: string,
	access_level: 0 | 1 | 2 | 3,
) => {
	try {
		return await axios.post("users/reg_begin", {
			email,
			access_level,
		});
	} catch (error) {
		console.log(error);
	}
};

/* [GLOBAL SITE SETTINGS] */
export const getSettings = async (): Promise<TSettings> => {
	try {
		const response = await axios.get("settings");
		return JSON.parse(response.data.object);
	} catch (error) {
		throw error;
	}
};

export const updateSettings = async (new_settings: string) => {
	try {
		return await axios.patch("settings", {
			object: new_settings,
		});
	} catch (error) {
		console.log(error);
	}
};

/* [PAYMENTS] */
export const getPaymentByID = async (payment_id: number | string) => {
	try {
		return await axios.get(`payments/${payment_id}`);
	} catch (error) {
		throw error;
	}
};
