import { Injectable } from "@nestjs/common";

import { Payment } from "extra/types/payment.type";
import { CreatePaymentDto } from "./dto/payment.create.dto";

@Injectable()
export class PaymentsService {
	private readonly payments: Payment[] = [];

	GET_ALL(): Payment[] {
		return this.payments;
	}

	GET_BY_ID(id: number): Payment {
		return this.payments.filter(payment => payment.id === id)[0];
	}

	CREATE(createPaymentDto: CreatePaymentDto): Payment {
		const payment: Payment = {
			...createPaymentDto,
			seller: "Козлов Е.И.",
			id: 1,
			created_date: new Date(),
			status: "progress",
		};
		this.payments.push(payment);
		return payment;
	}
}
