import { setCompanyFilter } from '../constants';

export default (state = '', action) => {
  if (action.type === setCompanyFilter) {
    return action.payload;
  }
  return state;
};
