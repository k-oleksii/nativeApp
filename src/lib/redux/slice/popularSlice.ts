import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IPopular, IPopulars } from 'app/types';

const popularSlice = createSlice({
  name: 'populars',
  initialState: {
    data: [],
  } as IPopulars,
  reducers: {
    createPopular(state, action: PayloadAction<IPopular[]>) {
      state.data.push(...action.payload);
    },
  },
});

export const { createPopular } = popularSlice.actions;
export default popularSlice.reducer;
