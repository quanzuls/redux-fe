
import { act } from 'react-dom/test-utils';
import {
    FETCH_USER_REQUEST,
    FETCH_USER_SUCCESS,
    FETCH_USER_ERROR,
    CREATE_USER_REQUEST, CREATE_USER_SUCCESS, CREATE_USER_ERROR,
    DELETE_USER_REQUEST, DELETE_USER_SUCCESS, DELETE_USER_ERROR
} from '../action/types';

const INITIAL_STATE = {
    listUsers: [],
    isLoading: false,
    isError: false,
    isCreating: false,
    isDeleting: false
};

const userReducer = (state = INITIAL_STATE, action) => {

    switch (action.type) {

        case FETCH_USER_REQUEST:
            return {
                ...state,
                isLoading: true,
                isError: false

            };

        case FETCH_USER_SUCCESS:
            return {
                ...state,
                listUsers: action.userLists,
                isLoading: false,
                isError: false

            };
        case FETCH_USER_ERROR:
            console.log('FETCH_USER_ERROR', action)


            return {
                ...state,
                isLoading: false,
                isError: true

            };
        case CREATE_USER_REQUEST:
            return {
                ...state, isCreating: true,
            }
        case CREATE_USER_SUCCESS:
            return {
                ...state, isCreating: false,
            }
        case CREATE_USER_ERROR:
            return {
                ...state, isCreating: false,
            }
        case DELETE_USER_REQUEST:
            return {
                ...state, isDeleting: true,
            }
        case DELETE_USER_SUCCESS:
            return {
                ...state, isDeleting: false,
            }
        case DELETE_USER_ERROR:
            return {
                ...state, isDeleting: false,
            }
        default: return state;

    }

};

export default userReducer;