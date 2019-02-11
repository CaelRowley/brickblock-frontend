/* eslint-disable react/prop-types, react/destructuring-assignment */
import React, {Component} from 'react';
import TableauReport from 'tableau-react';

const options = {
  hideToolbar: true,
};

class TableauGraph extends Component {
  render() {
    const {
      tableauUrl
    } = this.props;

    console.log('In component: ' + tableauUrl);

    return (
      <div>
        <div>URL HERE</div>
        <div>{tableauUrl}</div>
        <TableauReport
          url={tableauUrl}
          options={options}
        />
      </div>
    )
  }
}

export default TableauGraph;
