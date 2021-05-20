import React from 'react';
import { Auth0Provider } from '@auth0/auth0-react';

const domain = 'carendar-daw.eu.auth0.com';
const clientID = 'FnCY4ajfPN6rFmUN4dB4GqY8cMuMetMP';
const audience = 'https://carendar-daw.eu.auth0.com/api/v2/';

const Auth = ({ children }) => {
  const providerConfig = {
    domain,
    clientId: clientID,
    audience,
    redirectUri: `${window.location.origin}/dashboard`,
  };

  return (
    <Auth0Provider {...providerConfig}>
      {children}
    </Auth0Provider>
  );
};

export default Auth;
