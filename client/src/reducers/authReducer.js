import { SET_CURRENT_USER, SUCCESSFUL_REGISTER, FAILURE_REGISTER, ERRORS ,AUTH_ERROR } from '../actions/types';
import isEmpty from 'lodash/isEmpty'; // Correct import for isEmpty


const initialState = {
  isAuthenticated: false,
  user: {},
  token: localStorage.getItem("token"),
  errors: []
};

export default function authReducer(state = initialState, action) {
    const { type, payload } = action; // Destructure type and payload from action

    switch (type) {
        case SET_CURRENT_USER:
            return {
                ...state,
                isAuthenticated: !isEmpty(payload), // Check if the user object is empty
                user: payload,
            };

        case SUCCESSFUL_REGISTER:
            localStorage.setItem("token", payload.token); // Store the token in local storage
            return {
                ...state,
                user: payload.user, // Assuming payload contains user data
                token: payload.token, // Update token in state
                isAuthenticated: true,
            };

        case FAILURE_REGISTER:

        case AUTH_ERROR:
            localStorage.removeItem("token"); // Remove token from local storage
            return {
                ...state,
                token: null,
                isAuthenticated: false,
                errors: payload // Assuming payload contains error information
            };

        case ERRORS:
            localStorage.removeItem("token"); // Remove token from local storage
            return {
                ...state,
                errors: payload // Assuming payload contains error information
            };

        default:
            return state;
    }
}
