/* eslint-disable no-undef */
import React from 'react';
import ReactTable from 'react-table';
import 'react-table/react-table.css';

const Table = (props) => {
  const { data } = props;

  const tableData = data.data.ICOs;

  const columns = [
    {
      Header: 'Address',
      accessor: 'address',
    },
    {
      Header: 'Txid',
      accessor: 'txid',
    },
    {
      Header: 'Currency',
      accessor: 'currency',
    },
    {
      Header: 'Value (Euro)',
      accessor: 'value',
    },
    {
      Header: 'Date',
      accessor: 'date',
    },
  ];

  return <ReactTable data={tableData} columns={columns} />;
};

export default Table;
