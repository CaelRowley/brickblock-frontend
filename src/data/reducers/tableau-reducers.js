// @flow weak
import extend from 'xtend';

import { CONT_OVER_TIME } from '../../constants/TableauURLs';

let newState;

const tableauReducers = (state, action) => {
  const defaultState = extend(
    {
      tableauUrl: CONT_OVER_TIME,
    },
    state,
  );

  switch (action.type) {
    case 'UPDATE_TABLEAU_URL':
      newState = extend(defaultState, {
        tableauUrl: action.tableauUrl,
      });
      return newState;
    default:
      return defaultState;
  }
};

export default tableauReducers;
