import { Body, Controller, Headers, Post, Res } from '@nestjs/common';
import { AuthService } from './auth.service';
import { ResponseService } from 'src/global/services/response.service';
import { ApiHeader } from '@nestjs/swagger';
import { CreateUserDto } from './dto/createUSer.dto';
import { Response } from 'express';
import { LocaleEnum } from 'src/global/types/locale.type';
import { ResponseMessages } from 'src/global/helper/respoonse.message';
import { AuthReponseService } from './auth.response';
import { UserLoginDto } from './dto/userLogin.dto';

@Controller('auth')
export class AuthController {
  constructor(
    private readonly authService: AuthService,
    private readonly responseService: ResponseService,
  ) {}

  @Post('register/user')
   @ApiHeader({name :'locale',description: 'Language locale', enum: LocaleEnum})
    async register(
      @Body() body: CreateUserDto,
      @Headers('locale') locale: Locale,
      @Res() res: Response,
    ) {
      const user = await this.authService.register(body, locale);
       delete user.user.password;
       return this.responseService.created(
         res,
         ResponseMessages(AuthReponseService, 'userCreated', locale),
         user
        );
      }
      
      @Post('login/user')
      @ApiHeader({name :'locale',description: 'Language locale', enum: LocaleEnum})
      async login(
        @Body() body: UserLoginDto,
        @Headers('locale') locale: Locale,
        @Res() res: Response,
      ) {
        const user = await this.authService.login(body, locale);
        delete user.user.password;
        return this.responseService.success(
          res,
          ResponseMessages(AuthReponseService, 'userLogin', locale),
        user
      );
    }
}
