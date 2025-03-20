import { HttpStatus, Injectable } from '@nestjs/common';
import { Response } from 'express';

@Injectable()
export class ResponseService {
  constructor() {}

  success<Type>(
    response: Response,
    message: string,
    data?: Type | Type[] | null,
    total?: number,
    code?: number,
    token?: string,
    extra?: any,
  ) {
    response.status(code || HttpStatus.OK).json({
      type: 'Success',
      message,
      data,
      total,
      token,
      extra,
    });
  }
  created<Type>(
    response: Response,
    message: string,
    data?: Type | Type[],
    token?: string,
  ) {
    response.status(HttpStatus.CREATED).json({
      type: 'Created',
      message,
      data,
      token,
    });
  }
  forbidden(response: Response, message: string) {
    return response
      .status(HttpStatus.FORBIDDEN)
      .json({ type: 'Forbidden', message });
  }
  paymentRequired(response: Response, message: string) {
    return response
      .status(HttpStatus.PAYMENT_REQUIRED)
      .json({ type: 'PAYMENT_REQUIRED', message });
  }
  conflict(response: Response, message: string, data?: object, type?: string) {
    return response.status(HttpStatus.CONFLICT).json({
      type: type || 'Conflict has occurred',
      message,
      data: data,
    });
  }
  notFound(response: Response, message: string) {
    return response
      .status(HttpStatus.NOT_FOUND)
      .json({ type: 'NotFound', message });
  }
  internalServerError(response: Response, message?: string | object) {
    return response.status(HttpStatus.INTERNAL_SERVER_ERROR).json({
      type: 'InternalServerError',
      message: `Something went wrong, we're working on it. please contact support for more information`,
    });
  }
  unauthorized(response: Response, message?: string) {
    if (message === 'Unauthorized') {
      return response.status(HttpStatus.UNAUTHORIZED).json({
        type: 'Unauthorized',
        message: 'Token Not Vaild',
      });
    }
    return response.status(HttpStatus.UNAUTHORIZED).json({
      type: 'Unauthorized',
      message: message || 'Authentication Required',
    });
  }
  badRequest(response: Response, message: string, type?: string) {
    return response
      .status(HttpStatus.BAD_REQUEST)
      .json({ type: type || 'validation error', message });
  }
  unProcessableData(response: Response, message: string, type?: string) {
    return response
      .status(HttpStatus.UNPROCESSABLE_ENTITY)
      .json({ type: type || 'invalid Data', message });
  }
}
