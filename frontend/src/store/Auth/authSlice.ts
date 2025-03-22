// slices/authSlice.ts
import { createSlice } from '@reduxjs/toolkit';
import actAuthLogin from './act/actAuthLogin';
import actAuthSignup from './act/actSignup';
import { TLoading, IUsers } from '../../types';

interface IAuthState {
  token: string | null;
  user: IUsers | null;
  message: string | null;
  loading: TLoading;
  error: string | null;
}

const storedAuth = localStorage.getItem('auth');
const parsedAuth = storedAuth ? JSON.parse(storedAuth) : null;

const initialState: IAuthState = {
  token: parsedAuth?.token || null,
  user: parsedAuth?.user || null,
  message: null,
  loading: 'idle',
  error: null,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    actLogout: (state) => {
      state.token = null;
      state.user = null;
      localStorage.removeItem('auth');
    },
  },
  extraReducers: (builder) => {
    // Login
    builder.addCase(actAuthLogin.pending, (state) => {
      state.loading = 'pending';
      state.error = null;
      state.message = null;
    });
    builder.addCase(actAuthLogin.fulfilled, (state, action) => {
      state.loading = 'succeeded';
      state.error = null;
      state.token = action.payload?.token ?? null;
      state.user = action.payload?.user ?? null;
      state.message = action.payload?.message ?? null;

      if (state.token && state.user) {
        localStorage.setItem(
          'auth',
          JSON.stringify({
            token: state.token,
            user: state.user,
          })
        );
      } else {
        localStorage.removeItem('auth');
      }
    });
    builder.addCase(actAuthLogin.rejected, (state, action) => {
      state.loading = 'failed';
      state.error = action.payload as string; // Set the error message from the backend
      state.message = null;
    });

    // Signup
    builder.addCase(actAuthSignup.pending, (state) => {
      state.loading = 'pending';
      state.error = null;
      state.message = null;
    });
    builder.addCase(actAuthSignup.fulfilled, (state, action) => {
      state.loading = 'succeeded';
      state.error = null;
      state.token = action.payload?.token ?? null;
      state.user = action.payload?.user ?? null;
      state.message = action.payload?.message ?? null;

      if (state.token && state.user) {
        localStorage.setItem(
          'auth',
          JSON.stringify({
            token: state.token,
            user: state.user,
          })
        );
      } else {
        localStorage.removeItem('auth');
      }
    });
    builder.addCase(actAuthSignup.rejected, (state, action) => {
      state.loading = 'failed';
      state.error = action.payload as string;
      state.message = null;
    });
  },
});

export { actAuthLogin, actAuthSignup };
export const { actLogout } = authSlice.actions;
export default authSlice.reducer;