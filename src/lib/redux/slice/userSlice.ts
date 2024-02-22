import { createSlice } from '@reduxjs/toolkit';
import { loginAsync } from 'app/lib/redux/thunk';

const userSlice = createSlice({
  name: 'user',
  initialState: {
    initializing: true,
    user: null as { userEmail: string | null; uid: string } | null,
    status: null as string | null,
  },
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(loginAsync.pending, state => {
        state.status = 'users/requestStatus/pending';
      })
      .addCase(loginAsync.fulfilled, (state, action) => {
        const { userEmail, uid } = action.payload;
        state.user = { userEmail, uid };
        state.initializing = false;
        state.status = 'users/requestStatus/fulfilled';
      })
      .addCase(loginAsync.rejected, state => {
        state.status = 'users/requestStatus/rejected';
      });
  },
});

export default userSlice.reducer;
