import * as types from '../actionsTypes/actionsTypes'
import { changeUserForm } from '../utils/formFields'

const initialState = {
    user:{},
    isFetching: false,
    changeUserForm:changeUserForm,
    error:null,
    successRegister: null,
}

export default (state = initialState, action) => {
    switch(action.type){
        case types.AUTH_REQUEST: {
            return {...state, isFetching: true};
        }

        case types.AUTH_REQUEST_SUCCESS: {
            const { user } = action.payload;
            return {...state, isFetching: false, user: user };
        }

        case types.AUTH_REQUEST_FAIL: {
            return {...state, isFetching: false,error: action.payload.message };
        }

        case types.REGISTRATION_REQUEST: {
            return { ...state, isFetching: true}
        }

        case types.REGISTRATION_REQUEST_SUCCESS: {
            const { message } = action.payload;
            return { ...state, isFetching: false, successRegister: message }
        }

        case types.REGISTRATION_REQUEST_FAIL: {
            return { ...state, isFetching: false, error: action.payload.message}
        }

        case types.GET_USER_REQUEST: {
            return { ...state, isFetching: true}
        }

        case types.GET_USER_REQUEST_SUCCESS: {
            const data = action.payload.user
            return {
                ...state,
                isFetching: false,
                user: action.payload.user,
                changeUserForm: state.changeUserForm.map(el => Object.keys(data).find(item => item === el.name) ? {
                    ...el,
                    value: data[`${el.name}`]
                    } :
                    el)
                }
        }

        case types.USER_LOGOUT: {
            return { ...state, user: initialState.user}
        }

        case types.CHANGE_INPUT_VALUE_USER_USER_FORM : {
            const data = action.payload.target;
            return {
                ...state,
                changeUserForm: state.changeUserForm.map(el => el.name === data.name ? 
                    {
                        ...el,
                        value: data.value
                    }:
                    el
                )
            }
        }

        case types.CHANGE_DATA_IN_CURRENT_USER: {           
            Object.keys(state.user).map(el => 
                Object.keys(action.payload).map(item => {
                if(item === el){
                    return {
                        ...state,
                        user:{
                            ...state.user,
                            [el]:action.payload[el]
                        }
                    }   
                }}
            ))
            return {
                ...state     
            }
        }
        
        default:
             return state
    }

}