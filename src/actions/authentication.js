import { GET_ERRORS, SET_CURRENT_USER, AUTHENTICATE } from './../constants/ActionType';
import NodeAPI from './../utils/node-api';
import setAuthToken from './../setAuthToken';
import jwt_decode from 'jwt-decode';

export const registerUser = (user, history) => dispatch => {
    NodeAPI('POST', '/api/users/register', user)
        .then(res => window.location.href = '/login')
        .catch(err => {
            dispatch({
                type: GET_ERRORS,
                payload: err.response.data
            })
        })
}

export const loginUser = user => dispatch => {
    NodeAPI('POST', '/api/users/login', user)
        .then(res => {
            const { token } = res.data;
            localStorage.setItem('jwtToken', token);
            setAuthToken(token);
            const decode = jwt_decode(token);
            dispatch(setCurrentUser(decode));
        })
        .catch(err => {
            dispatch({
                type: GET_ERRORS,
                payload: err.response.data
            })
        })
}

export const setCurrentUser = decode => {
    return {
        type: SET_CURRENT_USER,
        payload: decode
    }
}

export const logoutUser = history => dispatch => {
    localStorage.removeItem('jwtToken');
    setAuthToken(false);
    dispatch(setCurrentUser({}));
    window.location.href = '/login'
}

export const authenticate = () => dispatch => {
    NodeAPI('GET', '/api/users/me', null)
        .then(res => {
            setAuthToken(localStorage.setItem('jwtToken'));
            dispatch({
                type: AUTHENTICATE,
                payload: res.data
            })
        })
        .catch(err => {
            dispatch({
                type: GET_ERRORS,
                payload: err.response.data
            })
        })
}