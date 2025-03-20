import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as bodyParser from 'body-parser';
import { ValidationPipe } from '@nestjs/common';
import { ResponseService } from './global/services/response.service';
import { GlobalExceptionFilter } from './global/filters/global.exception.filter';
import { swaggerConfig } from './global/config/swaggerConfig';


async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.use(bodyParser.json());

  app.useGlobalInterceptors();

  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true, // Strip out properties not in the DTO
      forbidNonWhitelisted: true, // Throw an error for extra properties
      transform: true, // Automatically transform input to DTOs
    }),
  );

  app.useGlobalFilters(new GlobalExceptionFilter(
    new ResponseService(),
  ),
);

swaggerConfig(app);

app.enableCors()

  const PORT = process.env.PORT || 3000;
  await app.listen(process.env.PORT ?? 3000);
  console.log(`Application is running on: http://localhost:${PORT}`);
  console.log(`API documentation available at: http://localhost:${PORT}/docs`);
}
bootstrap();
