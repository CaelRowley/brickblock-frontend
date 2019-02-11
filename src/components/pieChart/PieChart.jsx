/* eslint-disable react/prop-types, react/destructuring-assignment */
import React from 'react';
import { Redirect } from 'react-router-dom';
import isAuthenticated from '../../auth/isAuthenticated';
import TableauReport from 'tableau-react';

const options = {
  hideToolbar: true,
};

const PieChart = props => (isAuthenticated() ? (
  <div>
    <h2>Pie Chart</h2>
    <TableauReport
      url="https://public.tableau.com/views/PieChart_162/PieChart?:embed=y&:display_count=yes"
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

export default PieChart;
