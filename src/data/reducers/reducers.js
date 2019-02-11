import { combineReducers } from 'redux';
import home from './home-reducers';
import tableauReducers from './tableau-reducers';

export default combineReducers({
  home,
  tableauReducers,
});
