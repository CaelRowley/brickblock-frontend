/* eslint-disable react/prop-types, react/destructuring-assignment */
import React from 'react';
import { Redirect } from 'react-router-dom';
import isAuthenticated from '../../auth/isAuthenticated';

const TransactionsVsTimeAddresses = props => (isAuthenticated() ? (
  <div>
    <h2>Transactions Vs Time (Addresses)</h2>
    <p>This page is private and only visible after logging in.</p>
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

export default TransactionsVsTimeAddresses;
