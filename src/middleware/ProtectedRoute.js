import React from "react";
import { Route } from "react-router-dom";
import { withAuthenticationRequired } from "@auth0/auth0-react";

const ProtectedRoute = ({ component, ...args }) => {

    const isAuth = localStorage.getItem('isLoggedIn');

    return (
        <Route
            component={isAuth ? withAuthenticationRequired(component, {
                onRedirecting: () => <h1>Loading...</h1>,
            }) : component}
            {...args}
        />
    );
}

export default ProtectedRoute;