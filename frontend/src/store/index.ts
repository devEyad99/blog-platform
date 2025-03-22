// store/store.ts
import { configureStore } from '@reduxjs/toolkit';
import authReducer from './Auth/authSlice';
import postsReducer from './Posts/postsSlice'; // Import the postsSlice reducer

const store = configureStore({
  reducer: {
    auth: authReducer,
    posts: postsReducer, // Add the postsSlice reducer
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;