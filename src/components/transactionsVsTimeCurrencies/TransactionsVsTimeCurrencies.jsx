/* eslint-disable react/prop-types, react/destructuring-assignment */
import React from 'react';
import { Redirect } from 'react-router-dom';
import TableauReport from 'tableau-react';
import isAuthenticated from '../../auth/isAuthenticated';

const options = {
  hideToolbar: true,
};

const TransactionsVsTimeCurrencies = props => (isAuthenticated() ? (
  <div>
    <h2>Transactions Vs Time (Currencies)</h2>
    <TableauReport
      url="https://public.tableau.com/views/NumberofTransactionsvsValueCurrencies/NumberofTransactionsvsValueCurrencies?:embed=y&:display_count=yes"
      options={options}
    />
  </div>
) : (
  <Redirect
    to={{
      pathname: '/login',
      state: {
        from: props.location,
      },
    }}
  />
));

export default TransactionsVsTimeCurrencies;
