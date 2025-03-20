import { Injectable, NestMiddleware, BadRequestException } from '@nestjs/common';
import { Request, Response, NextFunction } from 'express';
import { allowedLocales } from 'src/global/types/locale.type';
@Injectable()
export class LocaleMiddleware implements NestMiddleware {
  use(req: Request, res: Response, next: NextFunction) {

    let locale = req.headers['locale'];
    if (!locale) {
      locale = 'en';
    }

    // Valsidate the locale format
    if (!allowedLocales.includes(locale as Locale)) {
        throw new BadRequestException(`Invalid "locale". Allowed values: ${allowedLocales.join(', ')}`);
      }

    next();
  }
}
