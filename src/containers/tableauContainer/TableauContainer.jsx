/* eslint-disable react/prop-types, react/destructuring-assignment */
import React from 'react';
import { Redirect } from 'react-router-dom';
import isAuthenticated from '../../auth/isAuthenticated';
import TableauGraph from '../../components/tableauGraph/TableauGraph';

const TableauContainer = (props) => {
  const { tableauUrl } = props;

  if (isAuthenticated()) {
    return (
      <div>
        <TableauGraph tableauUrl={tableauUrl} />
      </div>
    );
  }
  return (
    <Redirect
      to={{
        pathname: '/login',
        state: {
          from: props.location,
        },
      }}
    />
  );
};

export default TableauContainer;
