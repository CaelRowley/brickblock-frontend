/* eslint-disable no-undef */
import React from 'react';
import ReactTable from 'react-table';

const Table = (props) => {
  const { data } = props;

  const tableData = data.data.ICOs;

  const columns = [
    {
      Header: 'Address',
      accessor: 'address', // String-based value accessors!
    },
    {
      Header: 'Txid',
      accessor: 'txid',
    },
    {
      Header: 'Value',
      accessor: 'value',
    },
    {
      Header: 'Date',
      accessor: 'date',
    },
  ];

  console.log('TABLE');
  console.log(tableData);
  return <ReactTable data={tableData} columns={columns} />;
};

export default Table;
