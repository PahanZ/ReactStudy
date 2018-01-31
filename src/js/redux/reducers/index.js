import { combineReducers } from 'redux';
import flights from './flights';
import filterOption from './filterOption';

export default combineReducers({
  flights, filterOption,
});
