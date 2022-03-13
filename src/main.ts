import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { API_PORT } from './constants/server';
import { HttpException, HttpStatus, ValidationError, ValidationPipe } from '@nestjs/common';
import { i18n } from 'src/helpers/internationalization';
import { language } from './middlewares/language.middleware';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.use(language);

  app.useGlobalPipes(new ValidationPipe({
    exceptionFactory: ((errors: ValidationError[] = []) => {
      const statusCode = HttpStatus.BAD_REQUEST;

      const messages = [];

      for (let error of errors) {
        const constraints = Object.values(error.constraints);
        const translated = constraints.map(constraint => {
          return i18n.__(constraint, { field: error.property })
        });
        messages.push(...translated);
      }

      throw new HttpException({
        statusCode,
        message: messages
      }, statusCode);

    })
  }));

  await app.listen(API_PORT);
}

bootstrap();
