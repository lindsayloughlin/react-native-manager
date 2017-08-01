const INITIAL_STATE = {
    email: '',
    password: '',
    user: '',
    error: '',
    loading: false
};
import {
    EMAIL_CHANGED,
    LOGIN_USERS_SUCCESS,
    PASSWORD_CHANGED,
    LOGIN_USER_FAIL,
    LOGIN_USER

} from "../actions/types"

export default (state = INITIAL_STATE, action) => {
    //console.log('action! ', action);
    switch (action.type) {
        case EMAIL_CHANGED:
            return {...state, email: action.payload};
        case PASSWORD_CHANGED:
            return {...state, password: action.payload};
        case LOGIN_USERS_SUCCESS:
            return {...state, ...INITIAL_STATE, user: action.payload};
        case LOGIN_USER:
            return {...state, error: '', loading: true};
        case LOGIN_USER_FAIL:
            return {...state, error: 'Authentication failed', password: '', loading: false};
        default:
            return state;
    }
};