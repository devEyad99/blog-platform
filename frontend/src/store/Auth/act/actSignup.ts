import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { IUsers } from '../../../types/IUser';
import isAxiosHandler from '../../../utils/isAxiosError';
import { baseUrl } from '../../../API/baseUrl';

interface TFormData {
  name: string;
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

const actAuthSignup = createAsyncThunk(
  'auth/signup',
  async (formData: TFormData, thunkAPI) => {
    const { rejectWithValue } = thunkAPI;
    try {
      const response = await axios.post<TResponse>(
        `${baseUrl}register/user`,
        formData
      );
      // Extract correct data structure
      const user = response.data?.data?.user || null;
      const token = response.data?.data?.token || null;
      const message = response.data?.message || null;

      return { user, token, message };
    } catch (error) {
      return rejectWithValue(isAxiosHandler(error));
    }
  }
);

export default actAuthSignup;
