// Core
import { combineReducers } from 'redux';

import popularSlice from '../slice/popularSlice.ts';
import userSlice from '../slice/userSlice.ts';

export const rootReducer = combineReducers({
  popularSlice,
  userSlice,
});
