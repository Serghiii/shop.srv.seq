import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
// import * as cookieParser from 'cookie-parser';
// import * as csurf from 'csurf';
import { AppModule } from './app.module';

async function bootstrap() {
  const PORT = process.env.PORT || 5000;
  const app = await NestFactory.create(AppModule, { cors: true });
  // app.use(csurf());
  // app.use(cookieParser('secret'));
  // app.setGlobalPrefix('api/v1');
  app.useGlobalPipes(new ValidationPipe());
  await app.listen(PORT, () => console.log(`Started at port: ${PORT}`));
}
bootstrap();
