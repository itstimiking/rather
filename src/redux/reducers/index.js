import {combineReducers} from '@reduxjs/toolkit';
import questions from './slices/questions';
import users from './slices/users';


export default combineReducers({
    questions,
    users
});
