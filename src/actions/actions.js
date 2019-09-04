import * as types from '../actionsTypes/actionsTypes'

const URL = "https://api-clinics.herokuapp.com/api/v1/";


// -----------------------------------------------------------------------------------------------------------------

export const changeInputValueDoctorForm = payload => ({
    type: types.CHANGE_INPUT_VALUE_DOCTOR_FORM,
    payload
});

// -----------------------------------------------------------------------------------------------------------------

export const changeInputValueServiceForm = payload => ({
    type: types.CHANGE_INPUT_VALUE_SERVICE_FORM,
    payload
});

// -----------------------------------------------------------------------------------------------------------------

export const changeSelectedDoctorId = payload => ({
    type: types.CHANGE_SELECTED_DOCTOR_ID,
    payload
});

// -----------------------------------------------------------------------------------------------------------------

export const changeSelectedServiceId = payload => ({
    type: types.CHANGE_SELECTED_SERVICE_ID,
    payload
});

// -----------------------------------------------------------------------------------------------------------------

export const changeSpecialityArray = payload => ({
    type: types.CHANGE_SPECIALITY_ARRAY,
    payload
});

// -----------------------------------------------------------------------------------------------------------------
// -----------------------------------------------------------------------------------------------------------------

const getDoctorsRequest = payload => ({
    type: types.GET_DOCTORS_REQUEST,
    payload
});

const getDoctorsRequestSuccess = payload => ({
    type: types.GET_DOCTORS_REQUEST_SUCCESS,
    payload
});

const getDoctorsRequestFail = payload => ({
    type: types.GET_DOCTORS_REQUEST_FAIL,
    payload
});

export const getDoctors = () => dispatch => {
    console.log('get')
    dispatch(getDoctorsRequest());
    return fetch(`${URL}doctors`,{
        credentials:"include"
    })
        .then(res => res.json())
        .then(res => dispatch(getDoctorsRequestSuccess(res)))
        .catch(err => dispatch(getDoctorsRequestFail(err)));
};

// -----------------------------------------------------------------------------------------------------------------

const postDoctorsRequest = payload => ({
    type: types.POST_DOCTORS_REQUEST,
    payload
});

const postDoctorsRequestSuccess = payload => ({
    type: types.POST_DOCTORS_REQUEST_SUCCESS,
    payload
});

const postDoctorsRequestFail = payload => ({
    type: types.POST_DOCTORS_REQUEST_FAIL,
    payload
});

export const postDoctors = (payload) => dispatch => {
    dispatch(postDoctorsRequest());
    return fetch(`${URL}doctors`, {
        method: "POST",
        credentials: "include",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(payload)
    })
        .then(res => res.json())
        .then(res => dispatch(postDoctorsRequestSuccess(res))).then(dispatch(getDoctors()))
        .catch(err => dispatch(postDoctorsRequestFail(err)));
};

// -----------------------------------------------------------------------------------------------------------------

const putDoctorsRequest = payload => ({
    type: types.PUT_DOCTORS_REQUEST,
    payload
});

const putDoctorsRequestSuccess = payload => ({
    type: types.PUT_DOCTORS_REQUEST_SUCCESS,
    payload
});

const putDoctorsRequestFail = payload => ({
    type: types.PUT_DOCTORS_REQUEST_FAIL,
    payload
});

export const putDoctors = (payload) => dispatch => {
    dispatch(putDoctorsRequest());
    return fetch(`${URL}doctors/${payload.id}`, {
        method: "PUT",
        credentials: "include",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(payload.data)
    })
        .then(res => res.json())
        .then(res => dispatch(putDoctorsRequestSuccess(res))).then(dispatch(getDoctors()))
        .catch(err => dispatch(putDoctorsRequestFail(err)));
};

// -----------------------------------------------------------------------------------------------------------------

const deleteDoctorsRequest = payload => ({
    type: types.DELETE_DOCTORS_REQUEST,
    payload
});

const deleteDoctorsRequestSuccess = payload => ({
    type: types.DELETE_DOCTORS_REQUEST_SUCCESS,
    payload
});

const deleteDoctorsRequestFail = payload => ({
    type: types.DELETE_DOCTORS_REQUEST_FAIL,
    payload
});

export const deleteDoctors = (payload) => dispatch => {
    dispatch(deleteDoctorsRequest());
    return fetch(`${URL}doctors/${payload}`, {
        method: "DELETE",
        credentials: "include"
    })
        .then(res => res.json())
        .then(res => dispatch(deleteDoctorsRequestSuccess(res))).then(dispatch(getDoctors()))
        .catch(err => dispatch(deleteDoctorsRequestFail(err)));
};

// -----------------------------------------------------------------------------------------------------------------
// -----------------------------------------------------------------------------------------------------------------