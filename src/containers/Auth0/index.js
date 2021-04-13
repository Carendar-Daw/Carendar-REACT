import React from 'react';
import { Auth0Provider } from "@auth0/auth0-react";

const domain = 'carendar-daw.eu.auth0.com';
const clientID = 'FnCY4ajfPN6rFmUN4dB4GqY8cMuMetMP';

const Auth0 = ({ children }) => {


    const providerConfig = {
        domain: domain,
        clientId: clientID,
        redirectUri: window.location.origin + '/header',
        onRedirectCallback: localStorage.setItem('isLoggedIn', true),

    };

    return (
        <Auth0Provider {...providerConfig} >
            {children}
        </Auth0Provider>
    )
}

export default Auth0;
