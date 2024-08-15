import axios from 'axios';
import { SUCCESSFUL_REGISTER, FAILURE_REGISTER, SET_CURRENT_USER, AUTH_ERROR } from './types';
import setAuthToken from '../utils/setAuthToken';
import getServer from '../utils';

// Action for setting the current user
export const setCurrentUser = (user) => async dispatch => {
  // Check if token exists in localStorage and set it
  if (localStorage.token) {
    setAuthToken(localStorage.token);
  }

  try {
    // Fetch user data from the server
    const res = await axios.get(`${getServer()}/api/auth`);
    
    // Dispatch action to set the current user
    dispatch({
      type: SET_CURRENT_USER,
      payload: res.data
    });

  } catch (err) {
    // Handle any potential errors
    console.error('Error setting current user:', err);
    
    // Dispatch an error action
    dispatch({
      type: AUTH_ERROR,
      payload: err.response ? err.response.data.errors : { msg: 'Server error' }
    });
  }
};

// Register a user
export const register = (userData) => async (dispatch) => {
  try {
    // Set up headers
    const config = {
      headers: {
        'Content-Type': 'application/json'
      }
    };

    // Make POST request to register user
    const res = await axios.post(`${getServer()}/api/users`, userData, config);

    // Dispatch success action
    dispatch({
      type: SUCCESSFUL_REGISTER,
      payload: res.data // Assuming res.data contains the user data or relevant information
    });
  } catch (err) {
    // Dispatch failure action with error payload
    dispatch({
      type: FAILURE_REGISTER,
      payload: err.response ? err.response.data.errors : { msg: 'Server error' }
    });
  }
};
