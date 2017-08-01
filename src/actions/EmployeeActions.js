
import firebase from 'firebase';

import { Actions } from 'react-native-router-flux';

import {EMPLOYEE_UPDATE, EMPLOYEE_CREATE, EMPLOYEES_FETCH_SUCCESS, EMPLOYEE_SAVE_SUCCESS} from "./types";

// const INITIAL_STATE = {
//     name: '',
//     phone: '',
//     shift: ''
// };

export const employeeUpdate = ({prop, value}) => {
    //console.log(`employee update123 ${prop} ${value}`);
    return {
        type: EMPLOYEE_UPDATE,
        payload: {prop, value}
    };
};

export const employeeCreate = ({person, phone, shift}) => {

    console.log(`employee create ${person} ${phone} ${shift}`);
    return (dispatch) => {
        const { currentUser } = firebase.auth();
        firebase.database().ref(`/users/${currentUser.uid}/employees`)
            .push({ person, phone, shift })
            .then(()=> {
                dispatch({type: EMPLOYEE_CREATE });
                Actions.employeeList(({ type: 'reset' }))
            });
    };
};

export const employeesFetch = () => {
    return (dispatch) => {
        const {currentUser } = firebase.auth();
        firebase.database().ref(`/users/${currentUser.uid}/employees`)
            .on('value', snapshot => {
                dispatch({ type: EMPLOYEES_FETCH_SUCCESS, payload: snapshot.val()});
            });
    }
};

export const employeeSave = ({ person , phone , shift, uid}) => {
    const { currentUser }= firebase.auth();

    return () => {
        firebase.database().ref(`/users/${currentUser.uid}/employees/${uid}`)
            .set({person, phone, shift})
            .then(() => {
                dispatch({type: EMPLOYEE_SAVE_SUCCESS });
                Actions.employeeList({type: 'reset'});
            });
    }
};

export const employeeDelete = ({uid}) => {

    const { currentUser } = firebase.auth();
    const ref= `/users/${currentUser.uid}/employees/${uid}`;
    console.log(ref);
    return (dispatch) => {
        firebase.database().ref(ref)
            .remove()
            .then(()=> {
                console.log(('removed employee'));
                Actions.employeeList({type: 'reset'});
            })
            .catch(()=> {
                console.log('did not remove employee');
            })
    }
};