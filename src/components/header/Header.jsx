import React from 'react';
import { Link } from 'react-router-dom';
import isAuthenticated from '../../auth/isAuthenticated';

const Header = (props) => {
  const {
    updateTableauUrl
  } = props;

  return (
    <header>
      <h1>Brickblock Challenge</h1>
      <nav>
        <ul>
          <li>
            <Link to="/">Public Page</Link>
          </li>
          <li>
            {/* <Link to="/contributionsvertime">Contributions Over Time</Link> */}
            <button onClick={(event) => { 
              event.preventDefault();
              updateTableauUrl('https://public.tableau.com/views/PieChart_162/PieChart?:embed=y&:display_count=yes&:refresh=yes')}}>Pie Chart</button>
          </li>
          <li>
            <Link to="/piechart">Pie Chart</Link>
          </li>
          <li>
            <Link to="/bubbleschart">Bubbles Chart</Link>
          </li>
          <li>
            <Link to="/transacionsvstimeaddressess">
              Transactions Vs Time Addresses
          </Link>
          </li>
          <li>
            <Link to="/transactionsvstimecurrencies">
              Transactions Vs Time Currencies
          </Link>
          </li>
          {!isAuthenticated() && (
            <li>
              <Link to="/login">Login</Link>
            </li>
          )}
          {isAuthenticated() && (
            <li>
              <Link to="/logout">Logout</Link>
            </li>
          )}
        </ul>
      </nav>
    </header>
  )
}

export default Header;
