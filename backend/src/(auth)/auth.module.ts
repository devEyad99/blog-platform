import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { PrismaService } from 'src/prisma/prisma.service';
import { AuthRepository } from './helper/auth.repository';
import { CreateToken } from 'src/global/services/createToken';
import { JwtService } from '@nestjs/jwt';
import { ResponseService } from 'src/global/services/response.service';

@Module({
  providers: [
    AuthService, 
    PrismaService, 
    AuthRepository,
    JwtService,
    CreateToken,
    ResponseService,
  ],
  controllers: [AuthController],
})
export class AuthModule {}
