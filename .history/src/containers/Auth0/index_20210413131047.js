import React from 'react';
import { useHistory } from "react-router-dom";
import { Auth0Provider } from "@auth0/auth0-react";

const domain = 'carendar-daw.eu.auth0.com';
const clientID = 'FnCY4ajfPN6rFmUN4dB4GqY8cMuMetMP';

const Auth0 = ({ children }) => {

    const providerConfig = {
        domain: domain,
        clientId: clientID,

    };

    return (
        <Auth0Provider {...providerConfig} >
            {children}
        </Auth0Provider>
    )
}

export default Auth0;