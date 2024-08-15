import { combineReducers } from 'redux';
import authReducer from './authReducer';
import userReducer from './userReducer';
import productReducer from './productReducer';

const rootReducer = combineReducers({
  auth: authReducer,
  user: userReducer,
  product: productReducer,
});

export default rootReducer;
