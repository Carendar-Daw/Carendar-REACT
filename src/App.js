import React from 'react'
import { Route, Switch, BrowserRouter as Router, Redirect } from "react-router-dom";
import "./components/FontAwesomeIcons";
import "./components/Styles/Typography";
import Landing from './containers/Landing/Landing';
import Header from './components/Header-App/Nav';
import 'antd/dist/antd.css';
import './App.css';
import Dashboard from './components/Dashboard/Dashboard'
import ProtectedRoute from './middleware/ProtectedRoute';



const App = () => {

    return (
        <Router>
            <Switch>
                <Route path='/' exact component={Landing} />


                <ProtectedRoute path="/dashboard">
                    <ProtectedRoute component={Header} />
                    <ProtectedRoute component={Dashboard} />
                </ProtectedRoute>
                <ProtectedRoute path="/services">
                    <ProtectedRoute component={Header} />

                </ProtectedRoute>
                <Route render={() => (<Redirect path='/' />)} />
            </Switch>
        </Router>
    );
}

export default App;
