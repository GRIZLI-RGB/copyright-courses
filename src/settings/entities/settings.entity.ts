import { Entity, PrimaryGeneratedColumn, Tree, TreeChildren, UpdateDateColumn } from "typeorm";

import { Tariff } from "extra/types/tariff.type";
import { SettingsPayment } from "extra/types/settings.payment.type";

@Entity("settings")
@Tree("nested-set")
export class SettingsEntity {
	@PrimaryGeneratedColumn()
	id: number;

	@TreeChildren()
	tariffs: Tariff[];

	@TreeChildren()
	payments: SettingsPayment[];

	@UpdateDateColumn()
	updated_at: Date;
}
