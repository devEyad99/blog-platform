// act/actFetchPostById.ts
import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { baseUrl } from '../../../API/baseUrl';
import isAxiosHandler from '../../../utils/isAxiosError';
import { RootState } from '../../../store/index'; // Import the RootState type

interface IComment {
  id: string;
  content: string;
  author: {
    name: string;
  };
}

interface IPost {
  id: string;
  title: string;
  content: string;
  author: {
    name: string;
  };
  comments: IComment[];
}

interface IPostResponse {
  message: string;
  data: IPost;
}

const actFetchPostById = createAsyncThunk(
  'posts/fetchPostById',
  async (id: string, thunkAPI) => {
    const { rejectWithValue, getState } = thunkAPI;

    // Use the RootState type to safely access the auth state
    const token = (getState() as RootState).auth.token || localStorage.getItem('authToken');

    if (!token) {
      return rejectWithValue('User is not authenticated');
    }

    try {
      const response = await axios.get<IPostResponse>(
        `${baseUrl}posts/find/post/${id}`,
        {
          headers: {
            Authorization: `Bearer ${token}`, // Include the token in the request headers
          },
        }
      );

      const post = response.data?.data;
      const message = response.data?.message;

      return { post, message };
    } catch (error) {
      const parsedError = isAxiosHandler(error); // Handle Axios errors
      return rejectWithValue(parsedError);
    }
  }
);

export default actFetchPostById;