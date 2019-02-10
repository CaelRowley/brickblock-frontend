import React from 'react';
import { Redirect } from 'react-router-dom';
import isAuthenticated from '../Auth/isAuthenticated';

const Private = (props) => (
  isAuthenticated() ? (
    <div>
      <h2>Private Page</h2>
      <p>This page is private and only visible after logging in.</p>
    </div>
  ) : (
      <Redirect to={{
        pathname: '/login',
        state: { from: props.location }
      }} />
    )
)

export default Private;
