import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './reducers';

// Initial state as an empty object
const initialState = {};

// Middleware array with thunk
const middleware = [thunk];

// // Compose enhancers (Redux DevTools and middleware)
// const composeEnhancers = 
//   typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ 
//     ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ 
//     : compose;



// Create store with error handling
let store;

try {
  store = createStore(
    rootReducer,
    initialState,
    compose(applyMiddleware(...middleware))
  );
  console.log('Redux store successfully created');
} catch (error) {
  console.error('Failed to create Redux store:', error);
}

export default store; 