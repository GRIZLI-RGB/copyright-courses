import { Body, Controller, Get, Patch } from "@nestjs/common";
import { ApiTags } from "@nestjs/swagger";

import { SettingsService } from "./settings.service";
import { SettingsUpdateDto } from "./dto/settings.update.dto";

@Controller("settings")
@ApiTags("Настройки")
export class SettingsController {
	constructor(private settingsService: SettingsService) {}

	@Get()
	GET_ALL(): any {
		return this.settingsService.GET_ALL();
	}

	@Patch()
	UPDATE(@Body() settingsUpdateDto: SettingsUpdateDto): any {
		return this.settingsService.UPDATE(settingsUpdateDto);
	}
}
