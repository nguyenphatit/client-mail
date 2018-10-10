import { GET_ERRORS, SET_CURRENT_USER } from './../constants/ActionType';
import NodeAPI from './../utils/node-api';
import setAuthToken from './../setAuthToken';
import jwt_decode from 'jwt-decode';

export const registerUser = (user, history) => dispatch => {
    NodeAPI('POST', 'api/users/register', user)
        .then(res => history.push('/login'))
        .catch(err => {
            dispatch({
                type: GET_ERRORS,
                payload: err.response.data
            })
        })
}

export const loginUser = user => dispatch => {
    NodeAPI('POST', 'api/users/login', user)
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
    history.push('/login');
}