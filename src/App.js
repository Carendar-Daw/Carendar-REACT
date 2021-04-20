import React, { useState, useEffect } from 'react';
import { useAuth0 } from "@auth0/auth0-react";
import { Route, Switch, BrowserRouter as Router, Redirect } from "react-router-dom";
import 'antd/dist/antd.css';
import "./components/FontAwesomeIcons";
import "./components/Styles/Typography";
import axios from '../src/axios';
import Landing from './containers/Landing/Landing';
import Header from './containers/Layout-App/Nav';
import './App.css';
import Dashboard from './components/Dashboard/Dashboard'
import ProtectedRoute from './middleware/ProtectedRoute';
import messages, { defaultLanguage, I18nContext } from "./config/language";

const App = () => {
    const [language, setLanguage] = useState(defaultLanguage);
    const { getIdTokenClaims, isAuthenticated } = useAuth0();

    useEffect(async () => {
        if (isAuthenticated) {
            const idToken = await getIdTokenClaims();
            axios.defaults.headers.common['Authorization'] = idToken.__raw;
        }
    }, [isAuthenticated]);

    return (
        <Router>
            <I18nContext.Provider value={{ messages, language, setLanguage }}>
                <Switch>
                    <Route path='/' exact component={Landing} />
                    <ProtectedRoute path='/dashboard' component={Dashboard} layout={Header} />
                    <ProtectedRoute path='/services' component={<h1>holaa</h1>} layout={Header} />
                    <Route render={() => (<Redirect path='/' />)} />
                </Switch>
            </I18nContext.Provider>
        </Router>
    );
}

export default App;
