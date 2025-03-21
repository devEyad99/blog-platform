// act/actCreatePost.ts
import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { baseUrl } from '../../../API/baseUrl';
import isAxiosHandler from '../../../utils/isAxiosError';
import { RootState } from '../../../store/index'; // Import the RootState type

interface IPost {
  title: string;
  content: string;
}

interface IPostResponse {
  message: string;
  data: {
    id: string;
    title: string;
    content: string;
  };
}

const actCreatePost = createAsyncThunk(
  'posts/createPost',
  async (postData: IPost, thunkAPI) => {
    const { rejectWithValue, getState } = thunkAPI;

    // Use the RootState type to safely access the auth state
    const token = (getState() as RootState).auth.token || localStorage.getItem('authToken');
    console.log('try to log token from action', token);

    if (!token) {
      return rejectWithValue('User is not authenticated');
    }

    try {
      const response = await axios.post<IPostResponse>(
        `${baseUrl}posts/create/post`,
        postData,
        {
          headers: {
            Authorization: `Bearer ${token}`, // Include the token in the request headers
          },
        }
      );

      const post = response.data?.data;
      const message = "Post created successfully"; // Set a success message

      return { post, message };
    } catch (error) {
      const parsedError = isAxiosHandler(error); // Handle Axios errors
      return rejectWithValue(parsedError);
    }
  }
);

export default actCreatePost;