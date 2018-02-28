import { combineReducers } from 'redux';
import user from './user';
import students from './students';

export const rootReducer = combineReducers({
    user, students
});
