import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { SocketIoAdapter } from './SocketIoAdapter';

async function bootstrap() {
  const app = await NestFactory.create(AppModule, {
    logger: ['verbose', 'log', 'debug', 'warn', 'error'],
  });
  app.useWebSocketAdapter(new SocketIoAdapter(app, true));
  await app.listen(3000);
}
bootstrap();
