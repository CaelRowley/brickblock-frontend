/* eslint-disable no-shadow, react/destructuring-assignment */
import React, { Component } from 'react';
import { withRouter } from 'react-router';
import { Switch, Route } from 'react-router-dom';
import { connect } from 'react-redux';

import Dashboard from '../dashboard/Dashboard';
import HomePage from '../../components/homePage/HomePage';

import Login from '../../auth/Login';
import Logout from '../../auth/Logout';
import {
  startPollingGraphql,
  stopPollingGraphql,
  updateTableauUrl,
  updateICOData,
} from '../../data/actions/actions';

const mapStateToProps = (state) => {
  const { tableauUrl } = state.tableauReducers;
  const { data } = state.graphql;
  return {
    tableauUrl,
    data,
  };
};

const mapDispatchToProps = dispatch => ({
  updateTableauUrl: newUrl => dispatch(updateTableauUrl(newUrl)),
  updateICOData: () => dispatch(updateICOData()),
  startPollingGraphql: () => dispatch(startPollingGraphql()),
  stopPollingGraphql: () => dispatch(stopPollingGraphql()),
});

class App extends Component {
  async componentDidMount() {
    // this.props.startPollingGraphql();
    await this.props.updateICOData();
  }

  componentWillUnmount() {
    // this.props.stopPollingGraphql();
  }

  render() {
    const { updateTableauUrl, tableauUrl, data } = this.props;

    return (
      <div>
        <Dashboard
          updateTableauUrl={updateTableauUrl}
          tableauUrl={tableauUrl}
          data={data}
        />
        <main>
          <Switch>
            <Route exact path="/" component={HomePage} />
            <Route path="/login" component={Login} />
            <Route path="/logout" component={Logout} />
          </Switch>
        </main>
      </div>
    );
  }
}

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps,
  )(App),
);
