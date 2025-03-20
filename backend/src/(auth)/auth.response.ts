
import { BadRequestException, UnauthorizedException } from "@nestjs/common";

export const  AuthReponseService =  {
  userCreated: {
    en: 'User created successfully',
    ar: 'تم إنشاء المستخدم بنجاح'
  },
  userLogin: {
    en: 'User login successfully',
    ar: 'تم تسجيل الدخول بنجاح'
  },
  emailAlreadyExist: {
    en: 'Email already exists',
    ar: 'البريد الإلكتروني موجود بالفعل',
    ExceptionType: BadRequestException
  },
  phoneAlreadyExist: {
    en: 'Phone already exists',
    ar: 'الهاتف موجود بالفعل',
    ExceptionType: UnauthorizedException
  },
  userNotFound: {
    en: 'User not found',
    ar: 'المستخدم غير موجود',
    ExceptionType: UnauthorizedException
  },
  emailOrPasswordNotCorrect: {
    en: 'Email or password is not correct',
    ar: 'البريد الإلكتروني أو كلمة المرور غير صحيحة',
    ExceptionType: UnauthorizedException
  },
  authAprrove: {
    ar: 'تم تسجيل الدخول بنجاح',
    en: 'Login successfully',
  },
  authRejected: {
    en: 'Invalid username or password',
    ar: 'اسم المستخدم أو كلمة المرور غير صحيحة',
    ExceptionType: UnauthorizedException
  },
  tokenInvalid: {
    en: 'Invalid token',
    ar: 'انتهت صلاحية الرمز',
    ExceptionType: UnauthorizedException
  },
  notUserFromGoogle: {
    en: 'No user from Google',
    ar: 'لا يوجد مستخدم من جوجل',
    ExceptionType: UnauthorizedException
  },
  notUserFromFacebook: {
    en: 'No user from Facebook',
    ar: 'لا يوجد مستخدم من فيسبوك',
    ExceptionType: UnauthorizedException
  },
  facebookEmailNotFound: {
    en: 'Email not found in Facebook response',
    ar: 'البريد الإلكتروني غير موجود في استجابة فيسبوك',
    ExceptionType: UnauthorizedException
  },
  YouDoNotHaveThePermission: {
    en: 'You do not have permission to perform this action',
    ar: 'ليس لديك الإذن لأداء هذا الإجراء',
    ExceptionType: UnauthorizedException
  },
  nameRequired: {
    en: 'Name is required',
    ar: 'الاسم مطلوب',
    ExceptionType: UnauthorizedException
  },
  invalidUserType: {
    en: 'Invalid user type',
    ar: 'نوع المستخدم غير صالح',
    ExceptionType: UnauthorizedException
  },
  anErrorOccureWhileRegister: {
    en: 'An error occurred while registering',
    ar: 'حدث خطأ أثناء التسجيل',
    ExceptionType: UnauthorizedException
  },
  googleLoginFailedPleaseTryAgain: {
    en: 'Google login failed. Please try again.',
    ar: 'فشل تسجيل الدخول من جوجل. يرجى المحاولة مرة أخرى.',
    ExceptionType: UnauthorizedException
  },
  facebookLoginFailedPleaseTryAgain: {
    en: 'Facebook login failed. Please try again.',
    ar: 'فشل تسجيل الدخول من فيسبوك. يرجى المحاولة مرة أخرى.',
    ExceptionType: UnauthorizedException
  }
}