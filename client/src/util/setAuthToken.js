import axios from 'axios';

// Function to set or remove the token from Axios default headers
const setAuthToken = token => {
  if (token) {
    // Apply the token to every request header
    axios.defaults.headers.common['x-auth-token'] = token;
  } else {
    // Delete the token from headers
    delete axios.defaults.headers.common['x-auth-token'];
  }
};

export default setAuthToken;
