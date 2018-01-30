import { createStore, combineReducers } from 'redux';
import { Provider } from 'react-redux';
import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import info from './data/getData';

const flights = (state = info) => state;

const filterOption = (state = '', action) => {
  if (action.type === 'setCompanyFilter') {
    return action.payload;
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

