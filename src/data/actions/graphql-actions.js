import fetch from 'cross-fetch';
import { MONGODB_URI } from '../../constants/MongodbURI';

const updateICOs = data => ({
  type: 'UPDATE_ICOS',
  data,
});

console.log(MONGODB_URI);

const fetchICOs = dispatch => fetch(MONGODB_URI, {
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
        value
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
