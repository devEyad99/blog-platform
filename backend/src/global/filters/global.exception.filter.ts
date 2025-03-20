import {
  ArgumentsHost,
  Catch,
  ExceptionFilter,
  HttpException,
  HttpStatus,
} from '@nestjs/common';
import { ResponseService } from '../services/response.service';

@Catch()
export class GlobalExceptionFilter implements ExceptionFilter {
  constructor(
    private readonly responses: ResponseService,
  ) {}

  catch(exception: unknown, host: ArgumentsHost) {
    const context = host.switchToHttp();
    const response = context.getResponse();
    const request = context.getRequest();
    const status =
      exception instanceof HttpException
        ? exception.getStatus()
        : HttpStatus.INTERNAL_SERVER_ERROR;

    if (status == HttpStatus.INTERNAL_SERVER_ERROR) {
      console.error('Internal Server Error:', exception);
    }

    const errorResponse = {
      statusCode: status,
      timestamp: new Date().toISOString(),
      path: request.url,
      method: request.method,
      message:
        exception instanceof HttpException
          ? exception.getResponse()
          : `${exception}`,
    };

    switch (status) {
      case 500:
        this.responses.internalServerError(
          response,
          JSON.stringify(errorResponse),
        );
        break;
      case 400:
        const message = exception['response']['message'];
        const error = exception['response']['error'];
        if (Array.isArray(message)) {
          this.responses.badRequest(response, message[0], error);
        } else {
          this.responses.badRequest(response, message, error);
        }
        break;
      case 401:
        this.responses.unauthorized(response, exception['response']['message']);
        break;
      case 403:
        this.responses.forbidden(response, exception['response']['message']);
        break;
      case 404:
        this.responses.notFound(response, exception['response']['message']);
        break;
      case 409:
        this.responses.conflict(response, exception['response']['message']);
        break;
      case 413:
        this.responses.badRequest(response, exception['response']['message']);
        break;
      case 422:
        this.responses.unProcessableData(
          response,
          exception['response']['message'],
          exception['response']['error'],
        );
        break;
      case 402:
        this.responses.paymentRequired(
          response,
          exception['response']['error'],
        );
        break;
      default:
        this.responses.internalServerError(response);
        break;
    }
  }
}
