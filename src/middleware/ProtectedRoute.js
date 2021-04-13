import React from "react";
import { Route } from "react-router-dom";
import { withAuthenticationRequired } from "@auth0/auth0-react";
import SpinnerPage from '../components/Spinner/SpinnerPage';

const ProtectedRoute = ({ component, ...args }) => {

    const isAuth = JSON.parse(localStorage.getItem('isLoggedIn'));

    return (
        <Route
            component={!isAuth ? withAuthenticationRequired(component, {
                onRedirecting: () => <SpinnerPage />,
            }) : component}
            {...args}
        />
    );
}

export default ProtectedRoute;