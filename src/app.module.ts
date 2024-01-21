import { Module } from "@nestjs/common";
import { AuthModule } from "./auth/auth.module";
import { UsersModule } from "./users/users.module";
import { ConfigModule } from "@nestjs/config";
import { TypeOrmModule } from "@nestjs/typeorm";
import { join } from "path";

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
			entities: [join(__dirname + "/../**/*.entity.ts")],
			migrations: [join(__dirname + "/../**/*.migration.ts")],
			synchronize: true,
		}),
		AuthModule,
		UsersModule,
	],
})
export class AppModule {}
