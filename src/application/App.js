import React from 'react';
import { Provider } from 'react-redux';
import Auth from './components/Auth';
import '@Commons/adapters/FontAwesomeIcons';
import store from './store';
import 'antd/dist/antd.css';
import I18nContextLanguage from './components/i18ncontext';
import './App.css';
import RoutesApp from './components/Routes';

const App = () => (
  <Provider store={store}>
    <Auth>
      <I18nContextLanguage>
        <RoutesApp />
      </I18nContextLanguage>
    </Auth>
  </Provider>
);

export default App;
