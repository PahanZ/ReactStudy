import { createStore, combineReducers } from 'redux';
import { Provider } from 'react-redux';
import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App.jsx';
import info from './data/getData';

const data = (state = info, action) => {
  if (action.type === 'changeStore') {
    return {
      ...state,
      filter: action.payload,
    };
  }
  return state.flights;
};

const filterOptions = (state = info, action) => {
  if (action.type === 'changeStore') {
    const newState = Object.values(state);
    return {
      ...newState.map(element => element),
    };
  }
  return {
    ...state.flights.map(element => element.carrier),
  };
};


const rootReducer = combineReducers({
  data, filterOptions,
});

const store = createStore(rootReducer);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('app'),
);

