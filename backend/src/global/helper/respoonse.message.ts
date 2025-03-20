export function ResponseMessages<Messages>(message: Messages,key: string, locale: Locale) {
  if('ExceptionType' in message[key]){
    throw new message[key].ExceptionType(message[key][locale]);
  }
  return message[key][locale];
}