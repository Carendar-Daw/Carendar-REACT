import React from 'react';
import useAuth from "../../hooks/use-auth";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Landing from "@Pages/Landing/Landing";
import Calendar from "@Pages/Calendar/Calendar";
import Services from "@Pages/Services/Services";
import Clients from "@Pages/Clients/Clients";
import Dashboard from "@Pages/Dashboard/Dashboard";
import Header from '@Application/components/Layout/Layout';
import ProtectedRoute from "@Application/components/ProtectedRoute/ProtectedRoute";
import Spinner from "@Commons/components/presentational/Spinner/SpinnerPage";

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
                    </Switch>
                ) : !verified ? <h1>verifica tu cuenta, sino no puedes entrar :v</h1> : <Spinner /> }
            </Switch>
        </Router>
    );
};

export default RoutesApp;
