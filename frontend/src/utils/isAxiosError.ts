// utils/isAxiosError.ts
import { AxiosError } from 'axios';

const isAxiosHandler = (error: unknown): string => {
  if (error instanceof AxiosError) {
    // Check if the error response contains the message
    if (error.response && error.response.data && error.response.data.message) {
      if (error.response.data.type === "Unauthorized") {
        return "Email or password is not correct";
      }else{
        return error.response.data.message;
      }
    }
   
  }
  return 'An unexpected error occurred';
};

export default isAxiosHandler;