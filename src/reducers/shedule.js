import * as types from '../actionsTypes/actionsTypes'

const defaultState = {
    postNewShedule:{
        data:null,
        doctor:null
    },
    isFetching: false,
    error:null
};

export const sheduleReducer = (state = defaultState, action) => {
    switch(action.type){

        case types.CHANGE_SHEDULE_DOCTOR : {
            let doctor = action.payload.doctors.find(el=>el.name === action.payload.data);
            return {
                ...state,
                postNewShedule: {
                    ...state.postNewShedule,
                    doctor:doctor._id
                },
            };
        }

        case types.POST_SHEDULE_REQUEST : {
            return {
                ...state,
                isFetching: true
            };
        }

        case types.POST_SHEDULE_REQUEST_SUCCESS : {
            return {
                ...state,
                postNewShedule:{
                    ...state.postNewShedule,
                    data:null,
                },
                isFetching: false
            }
        }

        case types.POST_SHEDULE_REQUEST_FAIL : {
            return {
                ...state,
                error: action.payload,
                isFetching: false
            }
        }

        default:
            return state
    }
};