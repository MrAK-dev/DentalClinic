import * as types from '../actionsTypes/actionsTypes'

import {postNewDoctorForm,postNewServiceForm} from '../utils/formFields'

const defaultState = {
    doctors:[],

    postNewDoctor:postNewDoctorForm,
    postNewService:postNewServiceForm,
    changeDoctorId:null,
    changeServiceId:null,
    specialityArray:[],

    isFetching:false,
    error: null,
};

// -----------------------------------------------------------------------------------------------------------------

export const appReducer = (state = defaultState,action) => {

    switch (action.type) {

// -----------------------------------------------------------------------------------------------------------------

        case types.CHANGE_SPECIALITY_ARRAY : {
            const arr = state.specialityArray.slice();
            action.payload.checked ? arr.push(action.payload.value) : arr.splice(arr.indexOf(action.payload.value),1);
            return {
                ...state,
                specialityArray: arr
            };
        }

// -----------------------------------------------------------------------------------------------------------------


        case types.CHANGE_INPUT_VALUE_DOCTOR_FORM : {
            return {
                ...state,
                postNewDoctor: state.postNewDoctor.map(el => el.id === +action.payload.target.id ? {
                    ...el,
                    value:el.name === 'speciality' ? JSON.parse(action.payload.target.value) : action.payload.target.value
                } : el)
            };
        }

// -----------------------------------------------------------------------------------------------------------------

        case types.CHANGE_INPUT_VALUE_SERVICE_FORM : {
            return {
                ...state,
                postNewService: state.postNewService.map(el => el.id === +action.payload.target.id ? {
                    ...el,
                    value:action.payload.target.value
                } : el)
            };
        }

// -----------------------------------------------------------------------------------------------------------------

        case types.CHANGE_SELECTED_DOCTOR_ID : {
            let doctor = action.payload.data.find(el => el.name === action.payload.item);
            return {
                ...state,
                specialityArray: doctor ? doctor.speciality.map(el => el =el._id) : [ ],
                changeDoctorId: doctor ? doctor._id : null,
                
                postNewDoctor:doctor ? state.postNewDoctor.map(el =>  Object.keys(doctor).find(item => item === el.name) ? {
                    ...el,
                    value: el.type==="file" ? null : doctor[el.name]
                } : el) : postNewDoctorForm
            };
        }

// -----------------------------------------------------------------------------------------------------------------

        case types.CHANGE_SELECTED_SERVICE_ID : {
            let service = action.payload.data.find(el => el.name === action.payload.item);
            return {
                ...state,
                changeServiceId: service ? service._id : null,
                postNewService: service ? state.postNewService.map(el => Object.keys(service).find(item => item === el.name) ? {
                    ...el,
                    value:service[el.name]
                } : el) : postNewServiceForm
            };
        }

// -----------------------------------------------------------------------------------------------------------------
// -----------------------------------------------------------------------------------------------------------------

        case types.GET_DOCTORS_REQUEST : {
            return {
                ...state,
                isFetching: true
            };
        }

        case types.GET_DOCTORS_REQUEST_SUCCESS : {
            return {
                ...state,
                doctors:action.payload.doctors,
                isFetching: false
            }
        }

        case types.GET_DOCTORS_REQUEST_FAIL : {
            return {
                ...state,
                error:action.payload,
                isFetching: false
            }
        }

// -----------------------------------------------------------------------------------------------------------------
// -----------------------------------------------------------------------------------------------------------------

        case types.POST_DOCTORS_REQUEST : {
            return {
                ...state,
                isFetching: true
            };
        }

        case types.POST_DOCTORS_REQUEST_SUCCESS : {
            return {
                ...state,
                postNewDoctor:postNewDoctorForm,
                isFetching: false
            }
        }

        case types.POST_DOCTORS_REQUEST_FAIL : {
            return {
                ...state,
                error: action.payload,
                isFetching: false
            }
        }

// -----------------------------------------------------------------------------------------------------------------

        case types.POST_ORDERS_REQUEST : {
            return {
                ...state,
                isFetching: true
            };
        }

        case types.POST_ORDERS_REQUEST_SUCCESS : {
            return {
                ...state,
                isFetching: false
            }
        }

        case types.POST_ORDERS_REQUEST_FAIL : {
            return {
                ...state,
                error:action.payload,
                isFetching: false
            }
        }

// -----------------------------------------------------------------------------------------------------------------
// -----------------------------------------------------------------------------------------------------------------

        case types.PUT_DOCTORS_REQUEST : {
            return {
                ...state,
                isFetching: true
            };
        }

        case types.PUT_DOCTORS_REQUEST_SUCCESS : {
            return {
                ...state,
                postNewDoctor:postNewDoctorForm,
                changeDoctorId:null,
                isFetching: false
            }
        }

        case types.PUT_DOCTORS_REQUEST_FAIL : {
            return {
                ...state,
                error: action.payload,
                isFetching: false
            }
        }

// -----------------------------------------------------------------------------------------------------------------

        case types.PUT_SERVICES_REQUEST : {
            return {
                ...state,
                isFetching: true
            };
        }

        case types.PUT_SERVICES_REQUEST_SUCCESS : {
            return {
                ...state,
                postNewService:postNewServiceForm,
                changeServiceId:null,
                isFetching: false
            }
        }

        case types.PUT_SERVICES_REQUEST_FAIL : {
            return {
                ...state,
                error: action.payload,
                isFetching: false
            }
        }

// -----------------------------------------------------------------------------------------------------------------
// -----------------------------------------------------------------------------------------------------------------

        case types.DELETE_DOCTORS_REQUEST : {
            return {
                ...state,
                isFetching: true
            };
        }

        case types.DELETE_DOCTORS_REQUEST_SUCCESS : {
            return {
                ...state,
                changeDoctorId:null,
                isFetching: false
            }
        }

        case types.DELETE_DOCTORS_REQUEST_FAIL : {
            return {
                ...state,
                error: action.payload,
                isFetching: false
            }
        }

// -----------------------------------------------------------------------------------------------------------------

        case types.DELETE_SERVICES_REQUEST : {
            return {
                ...state,
                isFetching: true
            };
        }

        case types.DELETE_SERVICES_REQUEST_SUCCESS : {
            return {
                ...state,
                changeServiceId:null,
                isFetching: false
            }
        }

        case types.DELETE_SERVICES_REQUEST_FAIL : {
            return {
                ...state,
                error: action.payload,
                isFetching: false
            }
        }

// -----------------------------------------------------------------------------------------------------------------
// -----------------------------------------------------------------------------------------------------------------

        default:
            return state
    }
};