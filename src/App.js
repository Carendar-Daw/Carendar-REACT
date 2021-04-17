import React, { useState } from 'react'
import { Route, Switch, BrowserRouter as Router, Redirect } from "react-router-dom"
import "./components/FontAwesomeIcons";
import "./components/Styles/Typography";
import Landing from './containers/Landing/Landing';
import Header from './containers/Layout-App/Nav';
import 'antd/dist/antd.css';
import './App.css';
import Dashboard from './components/Dashboard/Dashboard'
import ProtectedRoute from './middleware/ProtectedRoute';
import messages, { defaultLanguage, I18nContext } from "./config/language";



const App = () => {
    const [language, setLanguage] = useState(defaultLanguage);
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
