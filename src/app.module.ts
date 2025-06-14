import { Module } from '@nestjs/common';
import { MoviesModule } from './movies/movies.module';
import { QrModule } from './qr/qr.module';
import { PrismaModule } from './prisma/prisma.module';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [ConfigModule.forRoot(), MoviesModule, QrModule, PrismaModule],
})
export class AppModule {}
