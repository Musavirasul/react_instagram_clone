import { combineReducers } from 'redux';

// Slices
import reelsReducer from './reelsReducer';

const rootReducer = combineReducers({
  reels: reelsReducer
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
