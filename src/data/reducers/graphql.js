import extend from 'xtend';

let newState;

const defaultState = {
  data: {
    ICOs: [],
  },
};

const graphql = (state = defaultState, action) => {
  switch (action.type) {
    case 'UPDATE_ICOS':
      newState = extend(state, {
        data: action.data,
      });
      console.log(newState);
      return newState;
    default:
      return state;
  }
};

export default graphql;
