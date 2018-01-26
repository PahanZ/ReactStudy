import { createStore } from 'redux';
import data from './data.json';

const getData = info => info.flights;
const info = getData(data);

const reducer = (state = info, action) => {
  if (action.type === 'changeStore') {
    state = [
      ...action.change,
    ];
  }
  return state;
};

const store = createStore(reducer);

const firstStoreUpload = store.getState();

export { store, info, firstStoreUpload };
