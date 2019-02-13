// @flow weak
/* eslint-disable jsx-a11y/alt-text */
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from 'antd';
import 'antd/dist/antd.css';
import './Dashboard.css';
import { Animated } from 'react-animated-css';
import logo from './logo.svg';
import isAuthenticated from '../../auth/isAuthenticated';
import TableauContainer from '../tableauContainer/TableauContainer';
import * as urls from '../../constants/TableauURLs';
// import { mockICOs } from '../../mock-data/MockData';

const Header = (props) => {
  const { updateTableauUrl, tableauUrl, data } = props;
  // const mockData = {
  //   data: {
  //     ICOs: mockICOs(100),
  //   },
  // };

  return (
    <div>
      <header>
        <Animated animationIn="flipInX" isVisible>
          <img id="logo" src={logo} />
        </Animated>
        <nav>
          <ul>
            <li>
              <Button
                onClick={() => {
                  updateTableauUrl(null);
                }}
              >
                Table
              </Button>
            </li>
            <li>
              <Button
                onClick={() => {
                  updateTableauUrl(urls.PIE_CHART);
                }}
              >
                Pie Chart
              </Button>
            </li>
            <li>
              <Button
                type="button"
                onClick={() => {
                  updateTableauUrl(urls.CONT_OVER_TIME);
                }}
              >
                Contributions Over Time
              </Button>
            </li>
            <li>
              <Button
                type="button"
                onClick={() => {
                  updateTableauUrl(urls.BUBBLE_CHART);
                }}
              >
                Bubble Chart
              </Button>
            </li>
            <li>
              <Button
                type="button"
                onClick={() => {
                  updateTableauUrl(urls.TRANS_VS_VALUE_ADDRESSES);
                }}
              >
                Transactions vs Time (Addresses)
              </Button>
            </li>
            <li>
              <Button
                type="button"
                onClick={() => {
                  updateTableauUrl(urls.TRANS_VS_VALUE_CURRENCIES);
                }}
              >
                Transactions vs Time (Currencies)
              </Button>
            </li>
            {!isAuthenticated() && (
              <li>
                <Button>
                  <Link to="/login">Login</Link>
                </Button>
              </li>
            )}
            {isAuthenticated() && (
              <li>
                <Button>
                  <Link
                    to="/logout"
                    style={{
                      color: '#F54269',
                    }}
                  >
                    Logout
                  </Link>
                </Button>
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
