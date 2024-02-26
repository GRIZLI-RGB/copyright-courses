import { Module } from "@nestjs/common";
import { ConfigModule } from "@nestjs/config";
import { TypeOrmModule } from "@nestjs/typeorm";
import { join } from "path";
import { MailerModule } from "@nestjs-modules/mailer";
import { HandlebarsAdapter } from "@nestjs-modules/mailer/dist/adapters/handlebars.adapter";

import { AuthModule } from "./auth/auth.module";
import { UsersModule } from "./users/users.module";
import { SettingsModule } from "./settings/settings.module";
import { PaymentsModule } from "./payments/payments.module";

@Module({
	imports: [
		ConfigModule.forRoot({
			isGlobal: true,
		}),
		TypeOrmModule.forRoot({
			type: "postgres",
			host: process.env.DATABASE_HOST || "localhost",
			port: +process.env.DATABASE_PORT || 5432,
			database: process.env.DATABASE_NAME || "postgres",
			username: process.env.DATABASE_USER || "postgres",
			password: process.env.DATABASE_PASSWORD || "postgres",
			entities: [join(__dirname, "**", "*.entity.ts")],
			migrations: [join(__dirname, "**", "*.migration.ts")],
			synchronize: true,
		}),
		MailerModule.forRoot({
			transport: {
				host: "smtp.timeweb.ru",
				ignoreTLS: true,
				port: 25,
				secure: false,
				auth: {
					user: "support@copyright-chu.ru",
					pass: "/fQd.b55yG2uF(",
				},
			},
			defaults: {
				from: "Платформа копирайтинга «Сиди, пиши»",
			},
			// preview: true,
			template: {
				dir: join(__dirname, "../templates/mails"),
				adapter: new HandlebarsAdapter(),
				options: {
					strict: true,
				},
			},
		}),
		AuthModule,
		UsersModule,
		PaymentsModule,
		SettingsModule,
	],
})
export class AppModule {}
