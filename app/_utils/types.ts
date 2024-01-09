export type TTariff = {
	icon: string;
	name: string;
	price: number;
	access_level: 0 | 1 | 2 | 3;
	advantages: string[];
};

export type TPaymentMethodOnce = {
	name: string;
	img: string;
	recipient: string;
	requisites: string;
};

export type TPaymentMethod = {
	title: string;
	methods: TPaymentMethodOnce[];
};

export type TSettings = {
	landing: {
		tariffs: TTariff[];
	};
	payment_methods: TPaymentMethod[];
};

export type TAccessLevel = 0 | 1 | 2 | 3;

export type TUser = {
	id: number;
	first_name?: string;
	middle_name?: string;
	date_birthday?: Date;
	email: string;
	date_registration: Date;
	avatar?: string;
	role: string;
	access_level: TAccessLevel;
};

export type TPayment = {
	id: number;
	date_payment: Date;
	date_expire: Date;
	status: string;
	sum: number;
	user: TUser;
};
