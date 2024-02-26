import { Column, CreateDateColumn, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { ApiProperty } from "@nestjs/swagger";

import { UserEntity } from "src/users/entities/user.entity";

@Entity("payments")
export class PaymentEntity {
	@PrimaryGeneratedColumn()
	id: number;

	@Column()
	sum: number;

	@CreateDateColumn()
	created_at: Date;

	@ManyToOne(() => UserEntity, user => user.payments)
	@ApiProperty({ type: () => UserEntity })
	user: UserEntity;
}
