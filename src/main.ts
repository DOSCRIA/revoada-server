import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { API_PORT } from './constants/server';
import { PrismaService } from './prisma';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(API_PORT);

  const prismaService: PrismaService = app.get(PrismaService);
  prismaService.enableShutdownHooks(app);
}

bootstrap();
