#!/bin/bash

cd ./src/auth

rm -f isAuthenticated.js
echo "export default function isAuthenticated() {" > isAuthenticated.js
echo "  const expiresAt = JSON.parse(localStorage.getItem('expires_at'));" >> isAuthenticated.js
echo "  return new Date().getTime() < expiresAt;" >> isAuthenticated.js
echo "}" >> isAuthenticated.js
