import { NestFactory } from '@nestjs/core';
import { NestExpressApplication } from '@nestjs/platform-express';
import { join } from 'path';
import { AppModule } from './app.module';
import * as hbs from 'hbs';
import { ConfigService } from '@nestjs/config';

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule);
  const configService = app.get(ConfigService);

  const basePath = process.cwd(); // /app in Docker

  // Serve static assets
  app.useStaticAssets(join(basePath, 'public'));

  // Set base views directory
  app.setBaseViewsDir(join(basePath, 'views'));

  // Register Handlebars view engine with Express directly
  app.engine('hbs', hbs.__express); 
  app.setViewEngine('hbs');

  const port = configService.get<number>('PORT') || 3000;
  await app.listen(port);
  console.log(`Application is running on: ${await app.getUrl()}`);
}
bootstrap();