import * as types from "../actionsTypes/actionsTypes";

const URL = "https://api-clinics.herokuapp.com/api/v1/";


const getServicesRequest = payload => ({
    type: types.GET_SERVICES_REQUEST,
    payload
});

const getServicesRequestSuccess = payload => ({
    type: types.GET_SERVICES_REQUEST_SUCCESS,
    payload
});

const getServicesRequestFail = payload => ({
    type: types.GET_SERVICES_REQUEST_FAIL,
    payload
});

export const getServices = () => dispatch => {
    dispatch(getServicesRequest());
    return fetch(`${URL}services`,{
        credentials:"include"
    })
        .then(res => res.json())
        .then(res => dispatch(getServicesRequestSuccess(res)))
        .catch(err => dispatch(getServicesRequestFail(err)));
};

// -----------------------------------------------------------------------------------------------------------------

const postServicesRequest = payload => ({
    type: types.POST_SERVICES_REQUEST,
    payload
});

const postServicesRequestSuccess = payload => ({
    type: types.POST_SERVICES_REQUEST_SUCCESS,
    payload
});

const postServicesRequestFail = payload => ({
    type: types.POST_SERVICES_REQUEST_FAIL,
    payload
});

export const postServices = (payload) => dispatch => {
    dispatch(postServicesRequest());
    return fetch(`${URL}services`, {
        method: "POST",
        credentials: "include",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(payload)
    })
        .then(res => res.json())
        .then(res =>  dispatch(postServicesRequestSuccess(res))).then(dispatch(getServices()))
        .catch(err => dispatch(postServicesRequestFail(err)))
};

// -----------------------------------------------------------------------------------------------------------------

const putServicesRequest = payload => ({
    type: types.PUT_SERVICES_REQUEST,
    payload
});

const putServicesRequestSuccess = payload => ({
    type: types.PUT_SERVICES_REQUEST_SUCCESS,
    payload
});

const putServicesRequestFail = payload => ({
    type: types.PUT_SERVICES_REQUEST_FAIL,
    payload
});

export const putServices = (payload) => dispatch => {
    dispatch(putServicesRequest());
    return fetch(`${URL}services/${payload.id}`, {
        method: "PUT",
        credentials: "include",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(payload.data)
    })
        .then(res => res.json())
        .then(res => dispatch(putServicesRequestSuccess(res))).then(dispatch(getServices()))
        .catch(err => dispatch(putServicesRequestFail(err)));
};

// -----------------------------------------------------------------------------------------------------------------

const deleteServicesRequest = payload => ({
    type: types.DELETE_DOCTORS_REQUEST,
    payload
});

const deleteServicesRequestSuccess = payload => ({
    type: types.DELETE_DOCTORS_REQUEST_SUCCESS,
    payload
});

const deleteServicesRequestFail = payload => ({
    type: types.DELETE_DOCTORS_REQUEST_FAIL,
    payload
});

export const deleteServices = (payload) => dispatch => {
    dispatch(deleteServicesRequest());
    return fetch(`${URL}services/${payload}`, {
        method: "DELETE",
        credentials: "include"
    })
        .then(res => res.json())
        .then(res => dispatch(deleteServicesRequestSuccess(res))).then(dispatch(getServices()))
        .catch(err => dispatch(deleteServicesRequestFail(err)));
};

// -----------------------------------------------------------------------------------------------------------------

const getCategoriesRequest = payload => ({
    type: types.GET_CATEGORIES_REQUEST,
    payload
});

const getCategoriesRequestSuccess = payload => ({
    type: types.GET_CATEGORIES_REQUEST_SUCCESS,
    payload
});

const getCategoriesRequestFail = payload => ({
    type: types.GET_CATEGORIES_REQUEST_FAIL,
    payload
});

export const getCategories = () => dispatch => {
    dispatch(getCategoriesRequest());
    return fetch(`${URL}category`,{
        credentials:"include"
    })
        .then(res => res.json())
        .then(res => dispatch(getCategoriesRequestSuccess(res)))
        .catch(err => dispatch(getCategoriesRequestFail(err)));
};