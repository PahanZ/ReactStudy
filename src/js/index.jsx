import { createStore, combineReducers } from 'redux';
import { Provider } from 'react-redux';
import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App.jsx';
import info from './data/getData';

const reducer = (state = info, action) => {
  if (action.type === 'changeStore') {
    return [
      ...state,
      someParams: action.payload,
  ];
  }
  return state;
};
const reducerDefault = (state = info, action) => {
  if (action.type !== 'changeStore') {
    return state;
  }
  // return state;
};

const rootReducer = combineReducers({
  reducer, reducerDefault,
});

const store = createStore(rootReducer);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('app'),
);

