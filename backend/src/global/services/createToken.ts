import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class CreateToken {
  constructor(
    private readonly jwtService: JwtService,
    private readonly configService: ConfigService
  ) {}

  async createUserToken(user) {
    const userPayload =  {
      id: user.id,
      email: user.email,
    }

    const secret = this.configService.get<string>('JWT_USER_SECRET');
    const expiresIn = this.configService.get<string>('JWT_USER_EXPIRATION');
    return this.jwtService.sign(userPayload, { secret, expiresIn });
  }
}