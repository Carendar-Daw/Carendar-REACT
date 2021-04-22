import React from 'react';
import ReactDOM from 'react-dom';
import Auth0 from './containers/Auth0';
import App from './App';

ReactDOM.render(
  <Auth0>
    <App />
  </Auth0>,
  document.getElementById('root'),
);
