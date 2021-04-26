import React, { useState, useEffect } from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import { useDispatch } from 'react-redux';
import {
  Route, Switch, BrowserRouter as Router, Redirect,
} from 'react-router-dom';
import 'antd/dist/antd.css';
import '@Commons/FontAwesomeIcons';
import '@Commons/Styles/Typography';
import Spinner from '@Commons/Spinner/SpinnerPage';
import { error } from '@Commons/MessagesApp/Messages';
import axios from './axios';
import { saveSalon } from './store/actions';
import Landing from './containers/Landing/Landing';
import Calendar from './containers/Calendar/Calendar';
import Services from './components/Services/Services';
import Header from './containers/Layout-App/Nav';
import './App.css';
import Dashboard from './components/Dashboard/Dashboard';
import ProtectedRoute from './middleware/ProtectedRoute';
import messages, { defaultLanguage, I18nContext } from './config/language';

const App = () => {
  const [language, setLanguage] = useState(defaultLanguage);
  const [verified, setVerified] = useState(true);
  const [ready, setReady] = useState(false);
  const {
    user, getIdTokenClaims, isAuthenticated, logout,
  } = useAuth0();
  const dispatch = useDispatch();

  useEffect(async () => {
    console.log(user);
    if (isAuthenticated) setVerified(user.email_verified);
    if (isAuthenticated && user.email_verified) {
      const { nickname, email, sub } = user;
      const saloon = {
        sal_name: nickname,
        sal_email: email,
        auth0_id: sub,
      };
      const idToken = await getIdTokenClaims();
      axios.defaults.headers.common.Authorization = `Bearer ${idToken.__raw}`;
      console.log(user);
      try {
        const newSaloon = await axios.post('saloon', saloon);
        dispatch(saveSalon(newSaloon.data.saloons));
        setReady(true);
      } catch (errors) {
        error('Error en la app');
      }
    }
  }, [isAuthenticated]);

  return (
    <Router>
      <I18nContext.Provider value={{ messages, language, setLanguage }}>
        <Switch>
          <Route path="/" exact component={Landing} />
          {ready && verified ? (
            <Switch>
              <ProtectedRoute path="/dashboard" component={Dashboard} layout={Header} />
              <ProtectedRoute path="/calendar" component={Calendar} layout={Header} />
              <ProtectedRoute path="/services" component={Services} layout={Header} />
            </Switch>
          ) : !verified ? <h1 onClick={() => logout()}>verifica tu cuenta francesc, sino no puedes entrar :v</h1> : <Spinner /> }
        </Switch>
      </I18nContext.Provider>
    </Router>
  );
};

export default App;
