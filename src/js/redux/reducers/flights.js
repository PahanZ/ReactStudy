import { setFlights } from '../constants';

export default (state = [], action) => {
  if (action.type === setFlights) {
    return [...action.payload];
  }
  return state;
};
