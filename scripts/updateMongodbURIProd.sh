#!/bin/bash

cd ./src/constants

rm -f MongodbURI.js
echo "export const MONGODB_URI = '$MONGO_URI_PROD';" > MongodbURI.js