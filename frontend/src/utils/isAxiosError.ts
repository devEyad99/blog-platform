import { AxiosError } from 'axios';

const isAxiosHandler = (error: unknown) => {
  const axiosError = error as AxiosError<{ message: string }>;
  // Extract the error message from the response
  const apiErrorMessage =
    axiosError.response?.data?.message || 'Something went wrong';
  return apiErrorMessage; // Pass the message to the reducer
};
export default isAxiosHandler;
