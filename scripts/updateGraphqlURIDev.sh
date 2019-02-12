#!/bin/bash

cd ./src/constants

rm -f GraphqlURI.js
echo "export const GRAPHQL_URI = '$GRAPHQL_URI_DEV';" > GraphqlURI.js