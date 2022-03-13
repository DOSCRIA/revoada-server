import { Module } from '@nestjs/common';
import { PrismaModule } from 'src/prisma/prisma.module';
import { AuthModule } from './modules/auth/auth.module';

@Module({
  imports: [PrismaModule, AuthModule],
  providers: [],
})
export class AppModule { }
