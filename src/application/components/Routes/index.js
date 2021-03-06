import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Landing from '@Pages/Landing/Landing';
import Calendar from '@Pages/Calendar/Calendar';
import Services from '@Pages/Services/Services';
import Clients from '@Pages/Clients/Clients';
import Configuration from '@Pages/Configuration/Configuration';
import Dashboard from '@Pages/Dashboard/Dashboard';
import Cash from '@Pages/Cash/Cash';
import Products from '@Pages/Products/Products';
import Statistics from '@Pages/Statistics/statistics';
import Header from '@Application/components/Layout/Layout';
import ProtectedRoute from '@Application/components/ProtectedRoute/ProtectedRoute';
import Spinner from '@Commons/components/presentational/Spinner/SpinnerPage';
import Nopermission from '@Application/components/NoPermission/Nopermission';
import useAuth from '../../hooks/use-auth';

const RoutesApp = () => {
  const [ready, verified] = useAuth();

  return (
    <Router>
      <Switch>
        <Route path="/" exact component={Landing} />
        {ready && verified ? (
          <Switch>
            <ProtectedRoute path="/dashboard" component={Dashboard} layout={Header} />
            <ProtectedRoute path="/calendar" component={Calendar} layout={Header} />
            <ProtectedRoute path="/services" component={Services} layout={Header} />
            <ProtectedRoute path="/clients" component={Clients} layout={Header} />
            <ProtectedRoute path="/products" component={Products} layout={Header} />
            <ProtectedRoute path="/statistics" component={Statistics} layout={Header} />
            <ProtectedRoute path="/cash" component={Cash} layout={Header} />
            <ProtectedRoute path="/configuration" component={Configuration} layout={Header} />
          </Switch>
        ) : !verified ? <Nopermission /> : <Spinner /> }
      </Switch>
    </Router>
  );
};

export default RoutesApp;
