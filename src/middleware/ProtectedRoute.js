import React from "react";
import { Route } from "react-router-dom";
import { withAuthenticationRequired } from "@auth0/auth0-react";
import SpinnerPage from '../components/Spinner/SpinnerPage';

const ProtectedRoute = ({ component, ...args }) => {

    return (
        <Route
            component={withAuthenticationRequired(component, {
                onRedirecting: () => <SpinnerPage />,
            })}
            {...args}
        />
    );
}

export default ProtectedRoute;