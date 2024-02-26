import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";

import { AuthController } from "./auth.controller";
import { AuthService } from "./auth.service";
import { UserEntity } from "src/users/entities/user.entity";
import { PaymentEntity } from "src/payments/entities/payment.entity";

@Module({
	controllers: [AuthController],
	providers: [AuthService],
	imports: [TypeOrmModule.forFeature([UserEntity, PaymentEntity])],
})
export class AuthModule {}
