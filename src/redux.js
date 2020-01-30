import { applyMiddleware, combineReducers, createStore } from 'redux'
import { searchStops } from "./client"

import thunk from 'redux-thunk'

// actions
export const addStops = stops => ({
  type: 'ADD_STOPS',
  stops,
});

export const clearStops = () => ({ type: 'CLEAR_STOPS' });

export const getStops = query => async dispatch => {
  try {
    const response = await searchStops(query);
    dispatch(addStops(response.data.stops));
  } catch (error) {
    console.error(error);
    dispatch(clearStops());
  }
};

// reducers
export const stops = (state = [], action) => {
  switch (action.type) {
    case 'ADD_STOPS':
      return action.stops;
    case 'CLEAR_STOPS':
      return [];
    default:
      return state;
  }
};

export const reducers = combineReducers({ stops });

// store
export function configureStore(initialState = {}) {
  const store = createStore(reducers, initialState, applyMiddleware(thunk));
  return store;
}

export const store = configureStore();
