
import firebase from 'firebase';
import { Actions } from 'react-native-router-flux'
import {
    EMAIL_CHANGED,
    PASSWORD_CHANGED,
    LOGIN_USERS_SUCCESS,
    LOGIN_USER_FAIL,
    LOGIN_USER} from "./types";


export const emailChanged = (text) => {
    return {
        type: EMAIL_CHANGED,
        payload: text
    };
};

export const passwordChanged = (text) => {
    console.log(`password changed ${text}`);
    return {
        type: PASSWORD_CHANGED,
        payload: text
    }
};

export const loginUser = ({email, password}) => {
    return (dispatch) => {

        dispatch({type: LOGIN_USER});

        firebase.auth().signInWithEmailAndPassword(email, password)
            .then(user => loginUserSuccess(dispatch, user))
            .catch((error) => {
                console.log(error);
                firebase.auth().createUserWithEmailAndPassword(email, password)
                    .then(user => loginUserSuccess(dispatch, user))
                    .catch(()=> loginUserFail(dispatch));
            });
    };
};

const loginUserFail = (dispatch) => {
    dispatch({type: LOGIN_USER_FAIL });
};

const loginUserSuccess = (dispatch, user) => {
    dispatch({
        type: LOGIN_USERS_SUCCESS,
        payload: user
    });

    Actions.main();
};