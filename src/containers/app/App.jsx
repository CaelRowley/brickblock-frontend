import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Header from '../../components/header/Header';
import HomePage from '../../components/homePage/HomePage';
import ContributionsOverTime from '../../components/contributionsOverTime/ContributionsOverTime';
import PieChart from '../../components/pieChart/PieChart';
import BubblesChart from '../../components/bubblesChart/BubblesChart';
import TransactionsVsTimeAddresses from '../../components/transactionsVsTimeAddresses/TransactionsVsTimeAddresses';
import TransactionsVsTimeCurrencies from '../../components/transactionsVsTimeCurrencies/TransactionsVsTimeCurrencies';

import Login from '../../auth/Login';
import Logout from '../../auth/Logout';

const App = () => (
  <div>
    <Header />
    <main>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/contributionsvertime" component={ContributionsOverTime} />
        <Route path="/piechart" component={PieChart} />
        <Route path="/bubbleschart" component={BubblesChart} />
        <Route path="/transacionsvstimeaddressess" component={TransactionsVsTimeAddresses} />
        <Route path="/transactionsvstimecurrencies" component={TransactionsVsTimeCurrencies} />
        <Route path="/login" component={Login} />
        <Route path="/logout" component={Logout} />
      </Switch>
    </main>
  </div>
);

export default App;

// import BubblesChart from '../../components/bubblesChart/BublesChart';
// import TransactionsVsTimeAddresses from '../../components/transactionsVsTimeAddresses/TransactionsVsTimeAddresses';
// import TransactionsVsTimeCurrencies from '../../components/transactionsVsTimeCurrencies/TransactionsVsTimeCurrencies';

// <Route path="/bubbleschart" component={BubblesChart} />
  