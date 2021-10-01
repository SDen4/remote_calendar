import { combineReducers } from 'redux';
import { Reducer } from './Reducer/Reducer';

export const RootReducer = combineReducers({
  reducer: Reducer,
});

export type AppStateType = ReturnType<typeof RootReducer>;
