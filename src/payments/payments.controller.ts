import { Body, Controller, Get, Param, Patch, Post } from "@nestjs/common";
import { ApiTags } from "@nestjs/swagger";

import { CreatePaymentDto } from "./dto/payment.create.dto";
import { PaymentsService } from "./payments.service";
import { Payment } from "extra/types/payment.type";

@ApiTags("Финансы")
@Controller()
export class PaymentsController {
	constructor(private paymentsService: PaymentsService) {}

	@Get("payments")
	async GET_ALL(): Promise<Payment[]> {
		return this.paymentsService.GET_ALL();
	}

	@Get("payment/:id")
	async GET_BY_ID(@Param("id") id: number): Promise<Payment> {
		return this.paymentsService.GET_BY_ID(id);
	}

	@Post("payment")
	async CREATE(@Body() createPaymentDto: CreatePaymentDto): Promise<Payment> {
		return this.paymentsService.CREATE(createPaymentDto);
	}

	@Patch("payment/:id")
	UPDATE(@Param("id") id: string): string {
		return `Обновляет платеж с ID равным ${id}`;
	}
}
