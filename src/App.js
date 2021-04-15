import React from 'react'
import { Route, Switch, BrowserRouter as Router } from "react-router-dom";
import "./components/FontAwesomeIcons";
import "./components/Styles/Typography";
import Landing from './containers/Landing/Landing';
import Header from './components/Header-App/Nav';
import 'antd/dist/antd.css';
import './App.css';
import Dashboard from './components/Dashboard'
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
                    <ProtectedRoute render={() => <h1>services</h1>} />
                </ProtectedRoute>
                <Route render={() => <h1>Not found</h1>} />
            </Switch>
        </Router>
    );
}

export default App;
