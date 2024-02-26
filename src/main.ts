import { NestFactory } from "@nestjs/core";
import { DocumentBuilder, SwaggerModule } from "@nestjs/swagger";

import { AppModule } from "./app.module";

(async () => {
	const app = await NestFactory.create(AppModule, {
		cors: false,
	});

	app.enableCors({ credentials: true, origin: true });
	app.setGlobalPrefix("api");

	/* [SWAGGER] */
	const config = new DocumentBuilder().setTitle("Курсы по копирайтингу").addServer("/api").build();
	const document = SwaggerModule.createDocument(app, config, { ignoreGlobalPrefix: true });
	SwaggerModule.setup("swagger", app, document);

	await app.listen(9000);
})();
