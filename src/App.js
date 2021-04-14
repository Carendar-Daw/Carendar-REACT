import React, {useState} from 'react'
import { Route, Switch, BrowserRouter as Router } from "react-router-dom";
import "./components/FontAwesomeIcons";
import "./components/Styles/Typography";
import Landing from './containers/Landing/Landing';
import Header from './components/Header-App/Nav';
import './App.css';
import Index from './components/Dashboard'
import ProtectedRoute from './middleware/ProtectedRoute';
import SpinnerPage from "@Components/Spinner/SpinnerPage";
import messages, { defaultLanguage, I18nContext } from "./config/language";

const App = () => {
    const [language, setLanguage] = useState(defaultLanguage);
    return (
        <Router>
            <I18nContext.Provider value={{ messages, language, setLanguage }}>
                <Switch>
                    <Route path='/' exact component={Landing} />


                    <ProtectedRoute path="/dashboard">
                        <ProtectedRoute path='' component={Header} />
                        <ProtectedRoute path='' component={Index} />
                    </ProtectedRoute>
                    {/*
                    <Route path='/dashboard' exact component={} />

                    */
                    }
                    <Route render={() => <SpinnerPage/>} />
                </Switch>
            </I18nContext.Provider>
        </Router>
    );
}

export default App;
