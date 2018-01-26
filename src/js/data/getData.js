import { createStore } from 'redux';
import data from './data.json';

const getData = info => info.flights;
const info = getData(data);

const reducer = (state, action) => {
  if (action.type === 'changeStore') {
    state = action.change;
  }
  return state;
};

const store = createStore(reducer, info);

export { store, info };
