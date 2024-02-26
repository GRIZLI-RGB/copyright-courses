import { Column, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

import { Tariff } from "extra/types/tariff.type";
import { SettingsPayment } from "extra/types/settings.payment.type";

@Entity()
export class SettingsEntity {
	@PrimaryGeneratedColumn()
	id: number;

	@Column()
	tariffs: Tariff[];

	@Column()
	payments: SettingsPayment[];

	@UpdateDateColumn()
	updated_at: Date;
}
