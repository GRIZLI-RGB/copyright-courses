import { Tariff } from "./tariff.type";

export type Settings = {
	tariffs: Tariff[];
	payments: {
		seller: string;
		methods: {
			tag: string;
			name: string;
			img: string;
			recipient: string;
			requisites: string;
		}[];
	};
	updated_at: Date;
};
