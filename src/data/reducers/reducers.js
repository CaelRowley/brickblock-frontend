import { combineReducers } from 'redux';
import graphql from './graphql';
import tableauReducers from './tableau-reducers';

export default combineReducers({
  graphql,
  tableauReducers,
});
