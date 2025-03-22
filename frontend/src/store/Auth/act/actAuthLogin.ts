// act/actAuthLogin.ts
import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { IUsers } from '../../../types/IUser';
import isAxiosHandler from '../../../utils/isAxiosError';
import { baseUrl } from '../../../API/baseUrl';

interface TFormData {
  email: string;
  password: string;
}

interface TResponse {
  message: string;
  data: {
    token: string;
    user: IUsers;
  };
}

const actAuthLogin = createAsyncThunk(
  'auth/login',
  async (formData: TFormData, thunkAPI) => {
    const { rejectWithValue } = thunkAPI;
    try {
      const response = await axios.post<TResponse>(
        `${baseUrl}auth/login/user`,
        formData
      );

      const user = response.data?.data?.user;
      const token = response.data?.data?.token;
      const message = response.data?.message;

      return { user, token, message };
    } catch (error) {
      console.log('Error response:', error); // Log the error response for debugging
      const parsedError = isAxiosHandler(error); // Pass the error object to isAxiosHandler
      return rejectWithValue(parsedError);
    }
  }
);

export default actAuthLogin;