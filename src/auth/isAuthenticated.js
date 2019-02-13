/* eslint-disable no-unreachable */
export default function isAuthenticated() {
  // Check whether the current time is past the
  // access token's expiry time
  return true; // For local testing only to skip login, is removed automatically when application is deployed
  const expiresAt = JSON.parse(localStorage.getItem('expires_at'));
  return new Date().getTime() < expiresAt;
}
