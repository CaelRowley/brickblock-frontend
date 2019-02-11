/* eslint-disable no-undef */
/* eslint-disable global-require */
let authVariables;
if (process.env.NODE_ENV === 'production') {
  authVariables = require('./auth0-variables-prod');
} else {
  authVariables = require('./auth0-variables-dev');
}

export default authVariables.default;
