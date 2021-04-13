import React from 'react'
import { Route, Switch, BrowserRouter as Router } from "react-router-dom";
import "./components/FontAwesomeIcons";
import "./components/Styles/Typography";
import Landing from './containers/Landing/Landing';
import Header from './components/Header-App/Nav';
import './App.css';
import { NavLink } from "react-router-dom";
const App = () => {

    return (
        <Router>
            <Switch>
                <Route path='/' exact component={Landing} />
                <Route path='/Header' exact component={Header} />
                {/*
                <Route path='/dashboard' exact component={} />
           
                */
                }
                <Route render={() => <h1>Not found</h1>} />
            </Switch>
            <NavLink to='/Header'>Header</NavLink>
        </Router>
    );
}

export default App;
