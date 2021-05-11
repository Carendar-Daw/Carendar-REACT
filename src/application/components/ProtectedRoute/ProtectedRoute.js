import React from 'react';
import { Route } from 'react-router-dom';
import { withAuthenticationRequired, useAuth0 } from '@auth0/auth0-react';

const ProtectedRoute = ({ component: Component, layout: Layout }, { ...rest }) => {
  const { isAuthenticated } = useAuth0();

  return (
    isAuthenticated && (
    <Route
      render={(props) => (
        <Layout>
          <Component {...props} />
        </Layout>
      )}
      {...rest}
    />
    ));
};

export default withAuthenticationRequired(ProtectedRoute, {
  onRedirecting: () => <SpinnerPage />,
});
