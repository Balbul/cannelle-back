import { AppModule } from './app.module';
import { NestFactory } from '@nestjs/core';
import configuration from './config/configuration';

const port = configuration().port;

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(port, () => {
    console.log(`listen on : http://localhost:${port}`);
  });
}
bootstrap();
