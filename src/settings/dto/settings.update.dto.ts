import { SettingsPayment } from "extra/types/settings.payment.type";
import { Tariff } from "extra/types/tariff.type";

export class SettingsUpdateDto {
	tariffs: Tariff[];
	payments: SettingsPayment[];
}
