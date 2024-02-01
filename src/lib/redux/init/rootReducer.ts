// Core
import { combineReducers } from 'redux';

import popularSlice from '../slice/popularSlice.ts';

export const rootReducer = combineReducers({
  popularSlice,
});
