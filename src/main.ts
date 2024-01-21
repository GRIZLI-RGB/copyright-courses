import { NestFactory } from "@nestjs/core";
import { AppModule } from "./app.module";
import { DocumentBuilder, SwaggerModule } from "@nestjs/swagger";

async function bootstrap() {
	const app = await NestFactory.create(AppModule);

    /* [SWAGGER] */
	const config = new DocumentBuilder().setTitle("Курсы по копирайтингу").build();
	const document = SwaggerModule.createDocument(app, config);
	SwaggerModule.setup("swagger", app, document);

	await app.listen(8080);
}

bootstrap();
