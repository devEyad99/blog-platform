import * as bcrypt from 'bcrypt';
import { ResponseMessages } from '../helper/respoonse.message';
import { AuthReponseService } from 'src/(auth)/auth.response';

export const hashPassword = (password: string) => {
  const salt = bcrypt.genSaltSync(10);
  return bcrypt.hashSync(password, salt);
}

export const validatePassword = (password: string, hashedPassword: string, locale: Locale) => {
  const isValid =  bcrypt.compareSync(password, hashedPassword);
  if(!isValid){
    return ResponseMessages(AuthReponseService, 'emailOrPasswordNotCorrect', locale);
  }
};