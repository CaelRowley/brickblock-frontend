#!/bin/bash

cd ./src/auth/config

rm -f auth0-variables-prod.js
echo "export default {" > auth0-variables-prod.js
echo "  domain: '$AUTH0_DOMAIN'," >> auth0-variables-prod.js
echo "  clientId: '$AUTH0_CLIENT_ID'," >> auth0-variables-prod.js
echo "  clientSecret: '$AUTH0_CLIENT_SECRET'," >> auth0-variables-prod.js
echo "  callbackUrl: '$AUTH0_CALLBACK_URL'," >> auth0-variables-prod.js
echo "};" >> auth0-variables-prod.js

rm -f auth0-variables.js
echo "import authVariables from './auth0-variables-prod';" > auth0-variables.js
echo "" >> auth0-variables.js
echo "export default authVariables;" >> auth0-variables.js
