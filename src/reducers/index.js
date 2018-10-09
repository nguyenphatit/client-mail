import { combineReducers } from 'redux';
import errorReducer from './errorReducer';
import authReducer from './authReducer';

const appReducers = combineReducers({
    errors: errorReducer,
    auth: authReducer

});

export default appReducers;