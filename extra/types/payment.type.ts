export type Payment = {
	id: number;
	created_date: Date;
	sum: number;
	tariff: any; // TODO
	seller: string;
	buyer: string;
	payment_method: any; // TODO
	status: "success" | "progress" | "error";
};
