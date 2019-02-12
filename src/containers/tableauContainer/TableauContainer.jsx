/* eslint-disable react/prop-types, react/destructuring-assignment */
import React from 'react';
import { Redirect } from 'react-router-dom';
import isAuthenticated from '../../auth/isAuthenticated';
import TableauGraph from '../../components/tableauGraph/TableauGraph';
import Table from '../../components/table/Table';

const TableauContainer = (props) => {
  const { tableauUrl, data } = props;

  console.log('container');
  console.log(data);
  if (isAuthenticated()) {
    if (tableauUrl) {
      return (
        <div>
          <TableauGraph tableauUrl={tableauUrl} />
        </div>
      );
    }
    return (
      <div>
        <Table data={data} />
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
