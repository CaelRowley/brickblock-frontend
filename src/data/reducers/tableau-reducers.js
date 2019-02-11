import extend from 'xtend';
let newState;

const tableauReducers = (state, action) => {
  switch (action.type) {
    case 'ADD_TABLEAU_GRAPH':
      newState = extend(state, {
        dataCID: action.dataCID
      })
      return newState
    case 'GET_TABLEAU_GRAPH':
      newState = extend(state, {
        dataCID: action.dataCID,
        data: action.data
      })
      return newState
    default:
      return state
  }
}

export default tableauReducers;
