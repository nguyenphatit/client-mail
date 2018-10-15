import { LOAD_ALL_MAIL_INBOX, LOAD_ALL_MAIL_SENT } from './../constants/ActionType';

const initialState = {
    listMail: [],
    userMore: {}
}

const mailReducer = (state = initialState, action) => {
    switch (action.type) {
        case LOAD_ALL_MAIL_INBOX:
            return {
                ...state,
                listMail: action.payload
            }

        case LOAD_ALL_MAIL_SENT:
            return {
                ...state,
                listMail: action.payload
            }

        default:
            return state
    }
}

export default mailReducer;