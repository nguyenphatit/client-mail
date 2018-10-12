import { LOAD_MAIL_INBOX } from './../constants/ActionType';

const initialState = {};

const mailReducer = (state = initialState, action) => {
    switch (action.type) {
        case LOAD_MAIL_INBOX:
            return {
                ...state,
                mail: action.payload
            }

        default:
            return state
    }
}

export default mailReducer;