import * as types from "../actionsTypes/actionsTypes";

import axios from 'axios'
import {getOrders} from "./orders";

const URL = "https://api-clinics.herokuapp.com/api/v1/";

export const setAppointmentShedule = payload => ({
    type: types.CHANGE_APPOINTMENT_SHEDULE,
    payload
});

// -----------------------------------------------------------------------------------------------------------------

export const setAppointmentDoctor = payload => ({
    type: types.CHANGE_APPOINTMENT_DOCTOR,
    payload
});

// -----------------------------------------------------------------------------------------------------------------

export const setAppointmentTime = payload => ({
    type: types.CHANGE_APPOINTMENT_TIME,
    payload
});

// -----------------------------------------------------------------------------------------------------------------

export const setAppointmentSpec = payload => ({
    type: types.CHANGE_APPOINTMENT_SPEC,
    payload
});

// -----------------------------------------------------------------------------------------------------------------

export const setAppointmentComment = payload => ({
    type: types.CHANGE_APPOINTMENT_COMMENT,
    payload
});

// -----------------------------------------------------------------------------------------------------------------

export const clearAppointment = payload => {
    localStorage.removeItem('appointment');
     return  {
         type: types.CLEAR_APPOINTMENT,
         payload
     }
};

// -----------------------------------------------------------------------------------------------------------------
// -----------------------------------------------------------------------------------------------------------------

const postOrdersRequest = payload => ({
    type: types.POST_ORDERS_REQUEST,
    payload
});

// -----------------------------------------------------------------------------------------------------------------

const postOrdersSuccess = payload => ({
    type: types.POST_ORDERS_REQUEST_SUCCESS,
    payload
});

// -----------------------------------------------------------------------------------------------------------------

const postOrdersFail = payload => ({
    type: types.POST_ORDERS_REQUEST_FAIL,
    payload
});

// -----------------------------------------------------------------------------------------------------------------

// export const postOrders = (payload) => dispatch => {
//     dispatch(postOrdersRequest());
//     return fetch(`${URL}orders`, {
//         method: "POST",
//         credentials:"include",
//         headers: {
//             'Content-Type': 'application/json'
//         },
//         body: JSON.stringify(payload)
//     })
//         .then(res => res.json())
//         .then(res => dispatch(postOrdersSuccess(res)))
//         .then(dispatch(clearAppointment()))
//         .catch(err => dispatch(postOrdersFail(err)));
// };
export const postOrders = payload => {
    return async dispatch => {
        dispatch(postOrdersRequest());
        try {
            const { data } = await axios({
                method:'POST',
                url:`${URL}orders`,
                data: payload  
            });
            dispatch(postOrdersSuccess(data));
            dispatch(clearAppointment());
        } catch (error){
            dispatch(postOrdersFail(error));
        }
    }
};