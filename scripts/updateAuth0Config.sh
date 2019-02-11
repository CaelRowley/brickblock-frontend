#!/bin/bash

cd ./src/Auth/config
rm -f auth0-variables-prod.js

echo "export const AUTH_CONFIG = {" > auth0-variables-prod.js
echo "domain: '$AUTH0_DOMAIN'," >> auth0-variables-prod.js
echo "clientId: '$AUTH0_CLIENT_ID'," >> auth0-variables-prod.js
echo "clientSecret: '$AUTH0_CLIENT_SECRET'," >> auth0-variables-prod.js
echo "callbackUrl: '$AUTH0_CALLBACK_URL'" >> auth0-variables-prod.js
echo "}" >> auth0-variables-prod.js