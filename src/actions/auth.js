import * as types from '../actionsTypes/actionsTypes'

import axios from 'axios'

const authRequest = payload => ({
    type: types.AUTH_REQUEST,
    payload
})

const authRequestSuccess = payload => ({
    type: types.AUTH_REQUEST_SUCCESS,
    payload
})

const authRequestFail = payload => ({
    type: types.AUTH_REQUEST_FAIL,
    payload
})

export const auth = payload => {
    return async dispatch => {
        dispatch(authRequest());
        try {
            const { data } = await axios.post("https://api-clinics.herokuapp.com/api/v1/auth/login", payload);
            localStorage.setItem("userId",data.user._id)
            dispatch(authRequestSuccess(data));

           
            
        } catch (error){
            dispatch(authRequestFail(error));
        }
    }
}

const registerRequest = payload => ({
    type:types.REGISTRATION_REQUEST,
    payload
})

const registerRequestSuccess = payload => ({
    type: types.REGISTRATION_REQUEST_SUCCESS,
    payload
})

const registrRequestFail = payload => ({
    type: types.REGISTRATION_REQUEST_FAIL,
    payload
})

export const register = payload => {
    return async dispatch => {
        dispatch(registerRequest());
        try {
            const { data } = await axios.post(
                "https://api-clinics.herokuapp.com/api/v1/auth/register",
                payload
            );
           
            dispatch(registerRequestSuccess(data))
        } catch(error) {
            dispatch(registrRequestFail(error))
        }
    };
};


const getUserRequest = payload => {
    return {
    type: types.GET_USER_REQUEST,
    payload
}}

const getUserRequestSuccess = payload => ({
    type: types.GET_USER_REQUEST_SUCCESS,
    payload
})

const getUserRequestFail = payload => ({
    type: types.GET_USER_REQUEST_FAIL,
    payload
})

export const getUser = () => dispatch => {
    dispatch(getUserRequest());
    return fetch(`https://api-clinics.herokuapp.com/api/v1/users/` + localStorage.getItem('userId'),{
        credentials:"include"
    })
        .then(res => res.json())
        .then(res => dispatch(getUserRequestSuccess(res)))
        .catch(err => dispatch(getUserRequestFail(err)));
};

export const userLogout = payload => ({
    type: types.USER_LOGOUT,
    payload
})

export const changeInputValueUserUserForm = payload => (
    {
        type:types.CHANGE_INPUT_VALUE_USER_USER_FORM,
        payload
    }
)