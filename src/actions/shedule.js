import * as types from '../actionsTypes/actionsTypes'
import {getDoctors} from "./actions";


const URL = "https://api-clinics.herokuapp.com/api/v1/";

export const setSheduleDoctor = payload => ({
    type: types.CHANGE_SHEDULE_DOCTOR,
    payload
});

// -----------------------------------------------------------------------------------------------------------------

const postSheduleRequest = payload => ({
    type: types.POST_SHEDULE_REQUEST,
    payload
});

// -----------------------------------------------------------------------------------------------------------------

const postSheduleSuccess = payload => ({
    type: types.POST_SHEDULE_REQUEST_SUCCESS,
    payload
});

// -----------------------------------------------------------------------------------------------------------------

const postSheduleFail = payload => ({
    type: types.POST_SHEDULE_REQUEST_FAIL,
    payload
});

// -----------------------------------------------------------------------------------------------------------------

export const postShedule = (payload) => dispatch => {
    dispatch(postSheduleRequest());
    return fetch(`${URL}shedule`, {
        method: "POST",
        credentials:"include",
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(payload)
    })
        .then(res => res.json())
        .then(res => dispatch(postSheduleSuccess(res))).then(dispatch(getDoctors()))
        .catch(err => dispatch(postSheduleFail(err)));
};