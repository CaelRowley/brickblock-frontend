/* eslint-disable react/prop-types, react/destructuring-assignment */
import React from 'react';
import TableauReport from 'tableau-react';

const options = {
  hideToolbar: true,
};

const TableauGraph = props => {
  const {
    homeText,
    componentText1,
    componentText2
  } = props;

  return (
    <div>
      <div>HOMETEXT</div>
      <div>{homeText}</div>
    <TableauReport
      url="https://public.tableau.com/views/BubblesChart/BubblesChart?:embed=y&:display_count=yes"
      options={options}
    />
    </div>
  )
}

export default TableauGraph;
