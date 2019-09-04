import * as types from "../actionsTypes/actionsTypes";

const URL = "https://api-clinics.herokuapp.com/api/v1/users/";


export const changeFindUserInput = payload => ({
    type:types.CHANGE_INPUT_VALUE_FIND_USER,
    payload
});

export const changeInputValueUserForm = payload => ({
    type:types.CHANGE_INPUT_VALUE_USER_FORM,
    payload
});

const getUsersRequest = payload => ({
    type: types.GET_USERS_REQUEST,
    payload
});

const getUsersRequestSuccess = payload => ({
    type: types.GET_USERS_REQUEST_SUCCESS,
    payload
});

const getUsersRequestFail = payload => ({
    type: types.GET_USERS_REQUEST_FAIL,
    payload
});

export const getUsers = () => dispatch => {
    dispatch(getUsersRequest());
    return fetch(`${URL}`,{
        credentials:"include"
    })
        .then(res => res.json())
        .then(res => {
            dispatch(getUsersRequestSuccess(res));
        })
        .catch(err => dispatch(getUsersRequestFail(err)));
};


const findUserRequest = payload => ({
    type: types.FIND_USER_REQUEST,
    payload
});

const findUserRequestSuccess = payload => ({
    type: types.FIND_USER_REQUEST_SUCCESS,
    payload
});

const findUserRequestFail = payload => ({
    type: types.FIND_USER_REQUEST_FAIL,
    payload
});

export const findUser = (payload) => dispatch => {
    dispatch(findUserRequest());
    return fetch(`${URL}`+payload,{
        credentials:"include"
    })
        .then(res => res.json())
        .then(res => {
            dispatch(findUserRequestSuccess(res));
        })
        .catch(err => dispatch(findUserRequestFail(err)));
};


const deleteUserRequest = payload => ({
    type: types.DELETE_USER_REQUEST,
    payload
});

const deleteUserRequestSuccess = payload => ({
    type: types.DELETE_USER_REQUEST_SUCCESS,
    payload
});

const deleteUserRequestFail = payload => ({
    type: types.DELETE_USER_REQUEST_FAIL,
    payload
});

export const deleteUser = (payload) => dispatch => {
    dispatch(deleteUserRequest());
    return fetch(`${URL}${payload}`, {
        method: "DELETE",
        credentials: "include"
    })
        .then(res => res.json())
        .then(res => dispatch(deleteUserRequestSuccess(res)))
        .catch(err => dispatch(deleteUserRequestFail(err)));
};


const putUserRequest = payload => ({
    type: types.PUT_USER_REQUEST,
    payload
});

const putUserRequestSuccess = payload => ({
    type: types.PUT_USER_REQUEST_SUCCESS,
    payload
});

const changeDataInCurrentUser = payload => ({
    type: types.CHANGE_DATA_IN_CURRENT_USER,
    payload
})

const putUserRequestFail = payload => ({
    type: types.PUT_USER_REQUEST_FAIL,
    payload
});

export const putUser = (payload) => dispatch => {
    dispatch(putUserRequest());
   
    return fetch(`${URL}${payload.path}`, {
        method: "PUT",
        credentials: "include",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(payload.data)
    })
        .then(res => res.json())
        .then(res => dispatch(putUserRequestSuccess(res)))
        .then(dispatch(changeDataInCurrentUser(payload.data)))
        .catch(err => dispatch(putUserRequestFail(err)));
};
