import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(new ValidationPipe());

  const config = new DocumentBuilder()
    .setTitle('env4 API')
    .setVersion('1.0')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  app.setGlobalPrefix('api');
  SwaggerModule.setup('api/docs', app, document);
  app.enableCors({
    origin: '*',
  });

  await app.listen(3000);
}
bootstrap();
