import { setFlights, setCompanyFilter } from '../constants';

const flights = (state = [], action) => {
  if (action.type === setFlights) {
    return [...action.payload];
  }
  return state;
};

const filterOption = (state = '', action) => {
  if (action.type === setCompanyFilter) {
    return action.payload;
  }
  return state;
};
export { flights, filterOption };
