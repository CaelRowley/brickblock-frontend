/* eslint-disable react/prop-types, react/destructuring-assignment */
import React from 'react';
import { Redirect } from 'react-router-dom';
import isAuthenticated from '../../auth/isAuthenticated';
import TableauGraph from '../../components/tableauGraph/TableauGraph';

// import { connect } from 'react-redux'


const TableauContainer = props => {
  const {
    tableauUrl
  } = props;

  console.log('In container: ' + tableauUrl);

  if (isAuthenticated()){
    return (
      <div>
        <TableauGraph 
          tableauUrl={tableauUrl}/>
      </div>
    )
  } else {
    return (
      <Redirect
        to={{
          pathname: '/login',
          state: {
            from: props.location,
          },
        }}
      />
    )
  }
}

// const mapStateToProps = (state) => {
//   const {
//     tableauUrl
//   } = state.tableauReducers

//   return {
//     tableauUrl
//   }
// }

export default TableauContainer;
// export default connect(
//   mapStateToProps
// )(TableauContainer)
