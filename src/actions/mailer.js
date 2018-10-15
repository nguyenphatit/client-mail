import { LOAD_ALL_MAIL_INBOX, LOAD_ALL_MAIL_SENT, GET_ERRORS } from './../constants/ActionType';
import axios from 'axios';
import { NODE_API } from './../constants/Config';
import setAuthToken from '../util/setAuthToken';

export const getAllMailInbox = () => dispatch => {
    const token = localStorage.getItem('jwtToken');
    setAuthToken(token)
    axios.get(`${NODE_API}/api/mails/inbox/`)
        .then(res => {
            dispatch({
                type: LOAD_ALL_MAIL_INBOX,
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

export const getAllMailSent = () => dispatch => {
    const token = localStorage.getItem('jwtToken');
    setAuthToken(token)
    axios.get(`${NODE_API}/api/mails/sent/`)
        .then(res => {
            dispatch({
                type: LOAD_ALL_MAIL_SENT,
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