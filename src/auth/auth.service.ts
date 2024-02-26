import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";

import { UserEntity } from "src/users/entities/user.entity";
import { AuthRegisterDto } from "./dto/auth.register.dto";
import { AuthLoginDto } from "./dto/auth.login.dto";
import { MailerService } from "@nestjs-modules/mailer";
import { PaymentEntity } from "src/payments/entities/payment.entity";

@Injectable()
export class AuthService {
	constructor(
		@InjectRepository(UserEntity) private readonly usersRepository: Repository<UserEntity>,
		@InjectRepository(PaymentEntity) private readonly paymentsRepository: Repository<PaymentEntity>,
		private mailerService: MailerService,
	) {}

	async LOGIN(authLoginDto: AuthLoginDto): Promise<{ status: boolean }> {
		try {
			return { status: true };
		} catch (_) {
			return { status: false };
		}
	}

	async REGISTER(authRegisterDto: AuthRegisterDto): Promise<{ status: boolean }> {
		try {
			const user = await this.usersRepository.save({ email: authRegisterDto.email });

			// this.paymentsRepository.create({
			//     sum: "",
			//     user:
			// });

			await this.mailerService.sendMail({
				to: "portfolio_negrov@mail.ru",
				subject: "Оплата заказа №666",
				html: `<p>Для оплаты пакета обучения «Медленный финиш» за 1999 руб., перейдите на по ссылке: https://copyright-chu.ru/payment/payment_id=${666}</p>`,
				// template: "payment",
				/* context: {
					payment_id: 666,
					buyer_email: "buyer@mail.ru",
					tariff_name: "«Медленный финиш",
					sum: 1999,
				}, */
			});

			return { status: true };
		} catch (error) {
			console.log(`[NODEMAILER ERROR]: ${error}`);
			return { status: false };
		}
	}
}
