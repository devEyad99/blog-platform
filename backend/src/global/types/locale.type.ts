// Declare the global type for Locale
declare global {
  type Locale = keyof typeof LocaleEnum;
}

// Enum for Locale
export enum LocaleEnum {
  en = 'en',
  ar = 'ar',
}

// Array of allowed locales derived from the enum
export const allowedLocales: Locale[] = Object.keys(LocaleEnum) as Locale[];
