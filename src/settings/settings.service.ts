import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";

import { SettingsEntity } from "./entities/settings.entity";
import { SettingsUpdateDto } from "./dto/settings.update.dto";

@Injectable()
export class SettingsService {
	constructor(
		@InjectRepository(SettingsEntity)
		private readonly settingsRepository: Repository<SettingsEntity>,
	) {}

	GET_ALL(): any {
		return this.settingsRepository.find();
	}

	UPDATE(settingsUpdateDto: SettingsUpdateDto): any {
		return this.settingsRepository.save({ id: 1, ...settingsUpdateDto });
	}
}
