import { createStore } from 'redux';
import data from './data.json';

const getData = info => info.flights;
const info = getData(data);

const reducer = (state = info, action) => {
  if (action.type === 'changeStore') {
    return action.change;
  }
  return state;
};

const store = createStore(reducer);

export { store, info };
