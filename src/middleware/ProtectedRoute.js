/* eslint-disable */
import React from "react";
import { Route } from "react-router-dom";

const ProtectedRoute = ({ component: Component, layout: Layout }, { ...rest }) => {

    return (
        <Route
            render={props => (
                <Layout>
                    <Component {...props} />
                </Layout>
            )}
            {...rest}
        />
    );
}

export default ProtectedRoute;