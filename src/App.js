import React, { useState, useEffect } from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import {
  Route, Switch, BrowserRouter as Router, Redirect,
} from 'react-router-dom';
import 'antd/dist/antd.css';
import './components/FontAwesomeIcons';
import './components/Styles/Typography';
import axios from './axios';
import Landing from './containers/Landing/Landing';
import Calendar from './containers/Calendar/Calendar';
import Header from './containers/Layout-App/Nav';
import './App.css';
import Dashboard from './components/Dashboard/Dashboard';
import ProtectedRoute from './middleware/ProtectedRoute';
import messages, { defaultLanguage, I18nContext } from './config/language';

const App = () => {
  const [language, setLanguage] = useState(defaultLanguage);
  const { user, getIdTokenClaims, isAuthenticated } = useAuth0();

  useEffect(async () => {
    if (isAuthenticated) {
      const { nickname, email, sub } = user;
      const saloon = {
        sal_name: nickname,
        sal_email: email,
        auth0_id: sub,
      };
      const idToken = await getIdTokenClaims();
      console.log(idToken.__raw);

      axios.defaults.headers.common.Authorization = `Bearer ${idToken.__raw}`;
      axios.post('/saloon', saloon).then((res) => {
        console.log(res.data);
      });
      axios.get('/saloon').then((res) => {
        console.log(res.data);
      });
    }
  }, [isAuthenticated]);

  return (
    <Router>
      <I18nContext.Provider value={{ messages, language, setLanguage }}>
        <Switch>
          <Route path="/" exact component={Landing} />
          <ProtectedRoute path="/dashboard" component={Dashboard} layout={Header} />
          <ProtectedRoute path="/calendar" component={Calendar} layout={Header} />
          <Route render={() => (<Redirect path="/" />)} />
        </Switch>
      </I18nContext.Provider>
    </Router>
  );
};

export default App;
