import { createSlice } from '@reduxjs/toolkit';
import { register, logIn, logOut, refreshUser } from '../auth/operations';
import {
  handleLogInFulfilled,
  handleLogOutFulfilled,
  handlePending,
  handleRefreshUserFulfilled,
  handleRefreshUserPending,
  handleRefreshUserRejected,
  handleRegisterFulfilled,
  handleRejected,
} from '../handlers.js';

const initialState = {
  user: { name: null, email: null },
  token: null,
  isLoggedIn: false,
  isRefreshing: false,
  isLoading: false,
  error: null,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  extraReducers: builder =>
    builder
      .addCase(register.pending, handlePending)
      .addCase(register.fulfilled, handleRegisterFulfilled)
      .addCase(register.rejected, handleRejected)
      .addCase(logIn.pending, handlePending)
      .addCase(logIn.fulfilled, handleLogInFulfilled)
      .addCase(logIn.rejected, handleRejected)
      .addCase(logOut.pending, handlePending)
      .addCase(logOut.fulfilled, handleLogOutFulfilled)
      .addCase(logOut.rejected, handleRejected)
      .addCase(refreshUser.pending, handleRefreshUserPending)
      .addCase(refreshUser.fulfilled, handleRefreshUserFulfilled)
      .addCase(refreshUser.rejected, handleRefreshUserRejected),
});

export const authReducer = authSlice.reducer;