import React from 'react';
import { Link } from 'react-router-dom';
import isAuthenticated from '../../auth/isAuthenticated';
import TableauContainer from '../tableauContainer/TableauContainer';
import * as urls from '../../constants/TableauURLs';

const Header = (props) => {
  const { updateTableauUrl, tableauUrl, data } = props;

  return (
    <div>
      <header>
        <h1>Brickblock Challenge</h1>
        <nav>
          <ul>
            <li>
              <button
                type="button"
                onClick={() => {
                  updateTableauUrl(null);
                }}
              >
                Table
              </button>
            </li>
            <li>
              <button
                type="button"
                onClick={() => {
                  updateTableauUrl(urls.PIE_CHART);
                }}
              >
                Pie Chart
              </button>
            </li>
            <li>
              <button
                type="button"
                onClick={() => {
                  updateTableauUrl(urls.CONT_OVER_TIME);
                }}
              >
                Contributions Over Time
              </button>
            </li>
            <li>
              <button
                type="button"
                onClick={() => {
                  updateTableauUrl(urls.BUBBLE_CHART);
                }}
              >
                Bubble Chart
              </button>
            </li>
            <li>
              <button
                type="button"
                onClick={() => {
                  updateTableauUrl(urls.TRANS_VS_TIME_ADDRESSES);
                }}
              >
                Transactions vs Time (Addresses)
              </button>
            </li>
            <li>
              <button
                type="button"
                onClick={() => {
                  updateTableauUrl(urls.TRANS_VS_TIME_CURRENCIES);
                }}
              >
                Transactions vs Time (Currencies)
              </button>
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

      <TableauContainer tableauUrl={tableauUrl} data={data} />
    </div>
  );
};

export default Header;
