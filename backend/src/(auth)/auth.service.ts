import { Injectable } from '@nestjs/common';
import { AuthRepository } from './helper/auth.repository';
import { CreateToken } from 'src/global/services/createToken';
import { CreateUserDto } from './dto/createUSer.dto';
import { ResponseMessages } from 'src/global/helper/respoonse.message';
import { AuthReponseService } from './auth.response';
import { UserLoginDto } from './dto/userLogin.dto';
import { validatePassword } from 'src/global/utils/bcrypt';
@Injectable()
export class AuthService {
  constructor(
    private readonly authRepository: AuthRepository,
    private readonly createToken: CreateToken,
  ) {}

  async register(data: CreateUserDto, locale: Locale) {
    const userExists = await this.authRepository.findUserByEmail(data.email);
    if(userExists) {
      return ResponseMessages(AuthReponseService, 'emailAlreadyExist', locale);
    }
    const user = await this.authRepository.createUser(data);
    const token = await this.createToken.createUserToken(user);
    return { user, token };
  }
  
  async login(data: UserLoginDto, locale: Locale) {
    const user = await this.authRepository.findUserByEmail(data.email);
    if(!user) {
      return ResponseMessages(AuthReponseService, 'emailOrPasswordNotCorrect', locale);
    }
    await validatePassword(data.password, user.password, locale);
    const token =await this.createToken.createUserToken(user);
    return { user, token };
  }
}
