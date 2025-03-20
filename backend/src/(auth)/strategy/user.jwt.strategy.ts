import { Injectable } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { ExtractJwt, Strategy } from 'passport-jwt';
import { ConfigService } from '@nestjs/config';
import { ResponseMessages } from '../../global/helper/respoonse.message';
import { StrategyResponse } from './strategy.response';

@Injectable()
export class UserJwtStrategy extends PassportStrategy(Strategy, 'user-jwt'){
  constructor(
    private readonly configService: ConfigService
  ) {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      ignoreExpiration: false,
      secretOrKey: configService.get<string>('JWT_USER_SECRET'),
      passReqToCallback: true, // Enable access to the req object
    });
  }
  async validate(req: Request, payload: any) {
    const locale = req.headers['locale'];
    if(!payload) {
      return ResponseMessages(StrategyResponse, 'invalidToken', locale);
    }
    return {
      userEmail: payload.email,
      userId: payload.id
    };
  }
} 