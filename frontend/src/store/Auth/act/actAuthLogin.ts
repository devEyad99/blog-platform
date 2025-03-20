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
  token: string;
  user: IUsers;
  data: any; // Add the 'data' property
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
      // Extract the correct data
      const user = response.data?.data?.user || null;
      const token = response.data?.data?.token || null;

      return { user, token, message: response.data?.message || null };
    } catch (error) {
      return rejectWithValue(isAxiosHandler(error));
    }
  }
);



export default actAuthLogin;
