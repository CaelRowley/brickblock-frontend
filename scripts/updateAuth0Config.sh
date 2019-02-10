#!/bin/bash

echo $PWD
cd ./src/Auth/
echo $PWD

sed -i -e "s/process.env.AUTH0_DOMAIN/$AUTH0_DOMAIN/g" ./auth0-variables.js
sed -i -e "s/process.env.AUTH0_CLIENT_ID/$AUTH0_CLIENT_ID/g" ./auth0-variables.js
sed -i -e "s/process.env.AUTH0_CLIENT_SECRET/$AUTH0_CLIENT_SECRET/g" ./auth0-variables.js
sed -i -e "s/process.env.AUTH0_CALLBACK_URL/$AUTH0_CALLBACK_URL/g" ./auth0-variables.js
