#!/bin/bash

cd ./src/constants

rm -f MongodbURI.js
echo "export const MONGODB_URI = '$MONGODB_URI_DEV';" > MongodbURI.js