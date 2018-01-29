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
      filter: action.payload,
    };
  }
  return state.flights;
};

const filterOption = (state = 'All carrier', action) => {
  if (action.type === 'setCompanyFilter') {
    return {
      ...state,
      carriers: action.payload,
    };
  }
  return state;
};

const rootReducer = combineReducers({
  flights, filterOption,
});

const store = createStore(rootReducer);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('app'),
);

