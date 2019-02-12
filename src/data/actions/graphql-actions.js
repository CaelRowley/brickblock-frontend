import fetch from 'cross-fetch';
import { GRAPHQL_URI } from '../../constants/GraphqlURI';

const updateICOs = data => ({
  type: 'UPDATE_ICOS',
  data,
});

const fetchICOs = dispatch => fetch(GRAPHQL_URI, {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
    Accept: 'application/json',
  },
  body: JSON.stringify({
    query: `query {
      ICOs{
        _id
        address
        currency
        value(exchange: "euro")
        txid
        date
      }
    }`,
  }),
})
  .then(r => r.json())
  .then((data) => {
    dispatch(updateICOs(data));
  });

let timer = null;

export const startPollingGraphql = () => (dispatch) => {
  clearInterval(timer);
  timer = setInterval(() => fetchICOs(dispatch), 60000);
  fetchICOs(dispatch);
};

export const stopPollingGraphql = () => {
  clearInterval(timer);
};

export const updateICOData = () => (dispatch) => {
  fetchICOs(dispatch);
};
