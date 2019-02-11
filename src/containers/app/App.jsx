import React, {Component} from 'react';
import { withRouter } from 'react-router'
import { Switch, Route } from 'react-router-dom';
import { connect } from 'react-redux'

import Header from '../../components/header/Header';
import HomePage from '../../components/homePage/HomePage';
import ContributionsOverTime from '../../components/contributionsOverTime/ContributionsOverTime';
import TableauContainer from '../tableauContainer/TableauContainer';
import BubblesChart from '../../components/bubblesChart/BubblesChart';
import TransactionsVsTimeAddresses from '../../components/transactionsVsTimeAddresses/TransactionsVsTimeAddresses';
import TransactionsVsTimeCurrencies from '../../components/transactionsVsTimeCurrencies/TransactionsVsTimeCurrencies';
import Login from '../../auth/Login';
import Logout from '../../auth/Logout';
import { updateTableauUrl } from '../../data/actions/actions'

const mapStateToProps = (state) => {
  const {
    tableauUrl
  } = state.tableauReducers

  return {
    tableauUrl
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    updateTableauUrl: (newUrl) => dispatch(updateTableauUrl(newUrl))
  }
}

class App extends Component {

  render() {
    const {
      updateTableauUrl,
      tableauUrl
    } = this.props;

    return (
      <div>
        <Header 
          updateTableauUrl={updateTableauUrl}
        />
        <TableauContainer tableauUrl={tableauUrl}/>
        <main>
          <Switch>
            {/* <Route exact path="/" component={HomePage} />
            <Route path="/contributionsvertime" component={ContributionsOverTime} />
            <Route path="/piechart" component={TableauContainer} />
            <Route path="/bubbleschart" component={BubblesChart} />
            <Route
              path="/transacionsvstimeaddressess"
              component={TransactionsVsTimeAddresses}
            />
            <Route
              path="/transactionsvstimecurrencies"
              component={TransactionsVsTimeCurrencies}
            /> */}
            <Route path="/login" component={Login} />
            <Route path="/logout" component={Logout} />
          </Switch>
        </main>
      </div>
    );
  }
}

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(App))
