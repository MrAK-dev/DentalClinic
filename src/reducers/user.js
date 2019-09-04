import * as types from '../actionsTypes/actionsTypes'

import {adminChangeUserForm} from "../utils/formFields"

const defaultState = {
    user: null,
    users: [],
    findUserInput: '',
    changeUserForm: adminChangeUserForm,
    access: '',
    isFetching: false,
    error: null

};

export const userReducer = (state = defaultState, action) => {
    switch (action.type) {

        case types.CHANGE_INPUT_VALUE_FIND_USER : {
            return {
                ...state,
                findUserInput: action.payload
            };
        }

        case types.CHANGE_INPUT_VALUE_USER_FORM : {
            const data = action.payload.target;
            if (data.type === 'radio') {
                return {
                    ...state,
                    access: data.value
                }
            } else {
                return {
                    ...state,
                    changeUserForm: state.changeUserForm.map(el =>
                        el.id === data.id
                            ? {
                                ...el,
                                value: data.value
                            }
                            : el
                    )
                }
            }


        }

        case types.GET_USERS_REQUEST : {
            return {
                ...state,
                isFetching: true
            };
        }

        case types.GET_USERS_REQUEST_SUCCESS : {
            return {
                ...state,
                users: action.payload.users,
                isFetching: false
            };
        }

        case types.GET_USERS_REQUEST_FAIL : {
            return {
                ...state,
                error: action.payload,
                isFetching: false
            }
        }


        case types.FIND_USER_REQUEST : {
            return {
                ...state,
                changeUserForm: adminChangeUserForm,
                isFetching: true
            };
        }

        case types.FIND_USER_REQUEST_SUCCESS : {
            const data = state.findUserInput.includes('@') ? action.payload.users[0] : action.payload.user;
            return {
                ...state,
                user: data,
                changeUserForm: state.changeUserForm.map(el =>
                    Object.keys(data).find(item =>
                        item === el.id)
                        ? el.type === 'radio'
                        ? {
                            ...el,
                            defaultChecked: data[el.id]
                        }
                        : {
                            ...el,
                            value: data[el.id]
                        }
                        : el.id === 'user' && data.doctor === false && data.role === false
                        ? {
                            ...el,
                            defaultChecked: true,
                        }
                        : el
                ),
                error: action.payload.message,
                access: data.role ? 'role' : data.doctor ? 'doctor' : 'user',
                isFetching: false
            };
        }

        case types.FIND_USER_REQUEST_FAIL : {
            return {
                ...state,
                error: action.payload,
                isFetching: false
            }
        }

        case types.PUT_USER_REQUEST : {
            return {
                ...state,
                isFetching: true
            };
        }

        case types.PUT_USER_REQUEST_SUCCESS : {
            return {
                ...state,
                changeUserForm: adminChangeUserForm,
                isFetching: false
            };
        }

        case types.PUT_USER_REQUEST_FAIL : {
            return {
                ...state,
                error: action.payload,
                isFetching: false
            }
        }

        case types.DELETE_USER_REQUEST : {
            return {
                ...state,
                isFetching: true
            };
        }

        case types.DELETE_USER_REQUEST_SUCCESS : {
            return {
                ...state,
                isFetching: false
            };
        }

        case types.DELETE_USER_REQUEST_FAIL : {
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