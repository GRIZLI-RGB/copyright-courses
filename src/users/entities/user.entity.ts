import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { ApiProperty } from "@nestjs/swagger";

import { PaymentEntity } from "src/payments/entities/payment.entity";

@Entity("users")
export class UserEntity {
	@PrimaryGeneratedColumn()
	id: number;

	@Column({ unique: true })
	email: string;

	@Column({ default: null })
	password: string;

	@Column({ default: null })
	first_name: string;

	@Column({ default: null })
	last_name: string;

	@Column({ default: null })
	phone: string;

	@Column({ default: 0 })
	access_level: 0 | 1 | 2 | 3;

	@OneToMany(() => PaymentEntity, payment => payment.user)
	@ApiProperty({ type: () => PaymentEntity })
	payments: PaymentEntity[];
}
