import { createStore, combineReducers } from 'redux';
import { Provider } from 'react-redux';
import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App.jsx';
import info from './data/getData';

const flights = (state = info, action) => {
  if (action.type === 'changeStore') {
    return {
      ...state,
      someParams: action.payload,
    };
  }
  return state;
};

const filterOptions = (state = info) => {
  return {
    ...state.flights.map(element => element.carrier),
  };
};

const rootReducer = combineReducers({
  flights, filterOptions,
});

const store = createStore(rootReducer);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('app'),
);

