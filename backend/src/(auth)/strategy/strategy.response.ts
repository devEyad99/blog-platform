import { UnauthorizedException } from "@nestjs/common";

export const StrategyResponse = {
  tokenInvalid: {
    en: 'Token is invalid',
    ar: 'الرمز غير صالح',
    ExceptionType: UnauthorizedException 
  }
}