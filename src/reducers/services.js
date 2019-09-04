import * as types from '../actionsTypes/actionsTypes'

const defaultState = {
    services:[],
    categories:[],
    isFetching: false,
    error:null
};

export const servicesReducer = (state = defaultState, action) => {
    switch(action.type){

        case types.GET_SERVICES_REQUEST : {
            return {
                ...state,
                isFetching: true
            };
        }

        case types.GET_SERVICES_REQUEST_SUCCESS : {
            return {
                ...state,
                services:action.payload.services,
                isFetching: false
            };
        }

        case types.GET_SERVICES_REQUEST_FAIL : {
            return {
                ...state,
                error:action.payload,
                isFetching: false
            }
        }


        case types.POST_SERVICES_REQUEST : {
            return {
                ...state,
                isFetching: true
            };
        }

        case types.POST_SERVICES_REQUEST_SUCCESS : {
            return {
                ...state,
                isFetching: false
            }
        }

        case types.POST_SERVICES_REQUEST_FAIL : {
            return {
                ...state,
                error: action.payload,
                isFetching: false
            }
        }


        case types.GET_CATEGORIES_REQUEST : {
            return {
                ...state,
                isFetching: true
            };
        }

        case types.GET_CATEGORIES_REQUEST_SUCCESS : {
            return {
                ...state,
                categories:action.payload.categories,
                isFetching: false
            };
        }

        case types.GET_CATEGORIES_REQUEST_FAIL : {
            return {
                ...state,
                error:action.payload,
                isFetching: false
            }
        }

        default:
            return state
    }
};