import React from 'react'
import { Route, Switch, BrowserRouter } from "react-router-dom";
import "./components/FontAwesomeIcons";
import "./components/Styles/Typography";
import Landing from './containers/Landing/Landing';
import Header from './components/Header-App/Nav';
import './App.css';
import { NavLink } from "react-router-dom";
const App = () => {

    return (
        <BrowserRouter>
            <Switch>
                <Route path='/' exact component={Landing} />
                <Route path='/Header' component={Header} />
                {/*
                <Route path='/dashboard' exact component={} />
           
                */
                }
                <Route render={() => <h1>Not found</h1>} />
            </Switch>
            <NavLink to='/Header'>Header</NavLink>
        </BrowserRouter>
    );
}
/* si lees esto me debes un piti*/
export default App;
