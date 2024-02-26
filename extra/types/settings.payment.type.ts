export type SettingsPayment = {
	seller: string;
	methods: {
		tag: string;
		name: string;
		img: string;
		recipient: string;
		requisites: string;
	};
};
