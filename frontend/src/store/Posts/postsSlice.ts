// slices/postsSlice.ts
import { createSlice } from '@reduxjs/toolkit';
import actCreatePost from './act/actPosts';
import actFetchPosts from './act/actFetchPosts';
import actFetchPostById from './act/actFetchPostById'; // Import the fetch by ID action
import { TLoading } from '../../types';

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
  comments?: IComment[]; // Make comments optional
}

interface IPostsState {
  posts: IPost[];
  post: IPost | null; // Add a single post field
  loading: TLoading;
  error: string | null;
  message: string | null;
}

const initialState: IPostsState = {
  posts: [],
  post: null, // Initialize post as null
  loading: 'idle',
  error: null,
  message: null,
};

const postsSlice = createSlice({
  name: 'posts',
  initialState,
  reducers: {
    // Add other reducers if needed (e.g., clear posts, update post, delete post)
  },
  extraReducers: (builder) => {
    // Create Post
    builder.addCase(actCreatePost.pending, (state) => {
      state.loading = 'pending';
      state.error = null;
      state.message = null;
    });
    builder.addCase(actCreatePost.fulfilled, (state, action) => {
      state.loading = 'succeeded';
      state.error = null;
      state.posts.push({ ...action.payload.post, author: { name: '' }, comments: [] }); // Add the new post to the list
      state.message = action.payload.message;
    });
    builder.addCase(actCreatePost.rejected, (state, action) => {
      state.loading = 'failed';
      state.error = action.payload as string;
      state.message = null;
    });

    // Fetch Posts
    builder.addCase(actFetchPosts.pending, (state) => {
      state.loading = 'pending';
      state.error = null;
      state.message = null;
    });
    builder.addCase(actFetchPosts.fulfilled, (state, action) => {
      state.loading = 'succeeded';
      state.error = null;
      state.posts = action.payload.posts.map(post => ({
        ...post,
        author: post.author,
        comments: [], // Initialize comments as an empty array (since the backend doesn't return comments for the list of posts)
      }));
      state.message = action.payload.message;
    });
    builder.addCase(actFetchPosts.rejected, (state, action) => {
      state.loading = 'failed';
      state.error = action.payload as string;
      state.message = null;
    });

    // Fetch Post by ID
    builder.addCase(actFetchPostById.pending, (state) => {
      state.loading = 'pending';
      state.error = null;
      state.message = null;
    });
    builder.addCase(actFetchPostById.fulfilled, (state, action) => {
      state.loading = 'succeeded';
      state.error = null;
      state.post = {
        ...action.payload.post,
        author: action.payload.post.author,
        comments: action.payload.post.comments || [], // Ensure comments is always an array
      };
      state.message = action.payload.message;
    });
    builder.addCase(actFetchPostById.rejected, (state, action) => {
      state.loading = 'failed';
      state.error = action.payload as string;
      state.message = null;
    });
  },
});

// Export the actions
export { actCreatePost, actFetchPosts, actFetchPostById };

export default postsSlice.reducer;