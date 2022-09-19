import { combineReducers } from 'redux';
import testReducer from './test/reducer';

export const RESET_STORE = 'RESET_STORE';

const rootReducer = combineReducers({
    testReducer
});

export type AppState = ReturnType<typeof rootReducer>;

export type Selector<T> = (state: AppState) => T;

export default rootReducer;
