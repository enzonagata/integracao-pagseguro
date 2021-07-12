import { NestFactory } from '@nestjs/core';
import { AppModule } from './AppModule';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(process.env.port || 3000);
}
bootstrap();
