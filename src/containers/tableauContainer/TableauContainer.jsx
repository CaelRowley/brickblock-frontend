/* eslint-disable react/prop-types, react/destructuring-assignment */
import React from 'react';
import { Redirect } from 'react-router-dom';
import isAuthenticated from '../../auth/isAuthenticated';
import TableauGraph from '../../components/tableauGraph/TableauGraph';

import { connect } from 'react-redux'


const TableauContainer = props => {
  const {
    homeText,
    componentText1,
    componentText2
  } = props;

  if (isAuthenticated()){
    return (
      <div>
        <h2>Tableau</h2>
        <TableauGraph 
          homeText={homeText}/>
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
//   (isAuthenticated() ? (
//   <div>
//     <h2>Tableau</h2>
//     <TableauGraph/>
//   </div>
// ) : (
//   <Redirect
//     to={{
//       pathname: '/login',
//       state: {
//         from: props.location,
//       },
//     }}
//   />
// ));

const mapStateToProps = (state) => {
  const {
    homeText,
    componentText1,
    componentText2
  } = state.home

  return {
    homeText,
    componentText1,
    componentText2
  }
}

// export default TableauContainer;
export default connect(
  mapStateToProps
)(TableauContainer)
