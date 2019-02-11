import React, {Component} from 'react';
import { withRouter } from 'react-router'
import { Switch, Route } from 'react-router-dom';
import { connect } from 'react-redux'

import Header from '../../components/header/Header';
import HomePage from '../../components/homePage/HomePage';
import ContributionsOverTime from '../../components/contributionsOverTime/ContributionsOverTime';
import PieChart from '../../components/pieChart/PieChart';
import BubblesChart from '../../components/bubblesChart/BubblesChart';
import TransactionsVsTimeAddresses from '../../components/transactionsVsTimeAddresses/TransactionsVsTimeAddresses';
import TransactionsVsTimeCurrencies from '../../components/transactionsVsTimeCurrencies/TransactionsVsTimeCurrencies';
import Login from '../../auth/Login';
import Logout from '../../auth/Logout';
import { changeHomeText } from '../../data/actions/actions'

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

const mapDispatchToProps = (dispatch) => {
  return {
    changeHomeText: () => dispatch(changeHomeText())
  }
}

class App extends Component {
  async componentWillMount() {
    const {
      changeHomeText
    } = this.props
    await changeHomeText();
  }

  render() {
    const {
      homeText,
      componentText1,
      componentText2
    } = this.props;

    return (
      <div>
        <Header />
        <main>
          <Switch>
            <Route exact path="/" component={HomePage} />
            <Route path="/contributionsvertime" component={ContributionsOverTime} />
            <Route path="/piechart" component={PieChart} />
            <Route path="/bubbleschart" component={BubblesChart} />
            <Route
              path="/transacionsvstimeaddressess"
              component={TransactionsVsTimeAddresses}
            />
            <Route
              path="/transactionsvstimecurrencies"
              component={TransactionsVsTimeCurrencies}
            />
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
