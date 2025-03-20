import { applyDecorators } from '@nestjs/common';
import { ApiHeader } from '@nestjs/swagger';
import {allowedLocales} from '../types/locale.type';

export function ApiLocaleHeader() {
  return applyDecorators(
    ApiHeader({
      name: 'locale',
      description: 'The locale of the request (ar, en)',
      required: true,
      schema: {
        type: 'string',
        enum: allowedLocales, // Optional: Specify allowed values
      },
    }),
  );
}
