import * as types from "../actionsTypes/actionsTypes";
import {postOrders} from "./appointment";

const URL = "https://api-clinics.herokuapp.com/api/v1/";


export const changeInputFindOrder = payload => ({
    type:types.CHANGE_INPUT_VALUE_FIND_ORDER,
    payload
});

export const findOrdersArray = payload => ({
    type:types.FIND_ORDERS_ARRAY,
    payload
});

export const getUserOrders = payload => ({
    type: types.USER_ORDERS,
    payload
});

export const changeInputValueOrderForm = payload => ({
    type:types.CHANGE_INPUT_VALUE_ORDER_FORM,
    payload
});


const getOrdersRequest = payload => ({
    type: types.GET_ORDERS_REQUEST,
    payload
});

const getOrdersSuccess = payload => ({
    type: types.GET_ORDERS_REQUEST_SUCCESS,
    payload
});

const getOrdersFail = payload => ({
    type: types.GET_ORDERS_REQUEST_FAIL,
    payload
});

export const getOrders = (payload) => dispatch => {
    dispatch(getOrdersRequest());
    return fetch(`${URL}orders`,{
        credentials:"include"
    })
        .then(res => res.json())
        .then(res => {
            dispatch(getOrdersSuccess({res:res,data:payload}));
        })
        .catch(err => dispatch(getOrdersFail(err)));
};

const deleteOrderRequest = payload => ({
    type: types.DELETE_ORDER_REQUEST,
    payload
});

const deleteOrderRequestSuccess = payload => ({
    type: types.DELETE_ORDER_REQUEST_SUCCESS,
    payload
});

const deleteOrderRequestFail = payload => ({
    type: types.DELETE_ORDER_REQUEST_FAIL,
    payload
});

export const deleteOrder = (payload) => dispatch => {
    dispatch(deleteOrderRequest());
    return fetch(`${URL}orders/${payload.id}`, {
        method: "DELETE",
        credentials: "include"
    })
        .then(res => res.json())
        .then(res => dispatch(deleteOrderRequestSuccess(res)))
        .then(dispatch(postOrders(payload.newOrder)))
        .catch(err => dispatch(deleteOrderRequestFail(err)));
};



