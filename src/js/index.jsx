import { createStore } from 'redux';
import { Provider } from 'react-redux';
import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App.jsx';
import info from './data/getData';

const reducer = (state = info, action) => {
  if (action.type === 'changeStore') {
    state = [
      ...action.payload,
    ];
  }
  return state;
};

const store = createStore(reducer);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('app'),
);

