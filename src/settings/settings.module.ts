import { TypeOrmModule } from "@nestjs/typeorm";
import { Module } from "@nestjs/common";

import { SettingsEntity } from "./entities/settings.entity";
import { SettingsService } from "./settings.service";
import { SettingsController } from "./settings.controller";

@Module({
	controllers: [SettingsController],
	providers: [SettingsService],
	imports: [TypeOrmModule.forFeature([SettingsEntity])],
})
export class SettingsModule {}
