import { LOAD_MAIL_INBOX, GET_ERRORS } from './../constants/ActionType';
import axios from 'axios';
import { NODE_API } from './../constants/Config';
import setAuthToken from '../util/setAuthToken';
// import jwt_decode from 'jwt-decode';

// export const getSendMail = (email) => dispatch => {
//     axios.post(`${NODE_API}/api/mails/send`, email)
//         .then(res => {
//             dispatch({
//                 type: LOAD_MAIL_SEND,
//                 payload: res.data
//             })
//         })
//         .catch(err => {
//             dispatch({
//                 type: GET_ERRORS,
//                 payload: err.response.data
//             })
//         })
// }

export const getInboxMail = (id) => dispatch => {
    const token = localStorage.getItem('jwtToken');
    setAuthToken(token)
    axios.get(`${NODE_API}/api/mails/inbox/${id}`)
        .then(res => {
            dispatch({
                type: LOAD_MAIL_INBOX,
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