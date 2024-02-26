import { PaymentsController } from "./payments.controller";
import { TypeOrmModule } from "@nestjs/typeorm";
import { Module } from "@nestjs/common";

import { PaymentsService } from "./payments.service";
import { PaymentEntity } from "./entities/payment.entity";

@Module({
	controllers: [PaymentsController],
	providers: [PaymentsService],
	imports: [TypeOrmModule.forFeature([PaymentEntity])],
})
export class PaymentsModule {}
