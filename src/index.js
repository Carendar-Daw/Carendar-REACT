import React from 'react';
import { createStore, applyMiddleware, compose } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import ReactDOM from 'react-dom';
import Auth0 from './containers/Auth0';
import App from './App';

import reducer from './store';

const logger = () => (next) => (action) => {
  const results = next(action);
  return results;
};

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  reducer,
  composeEnhancers(applyMiddleware(logger, thunk)),

);

ReactDOM.render(
  <Provider store={store}>
    <Auth0>
      <App />
    </Auth0>
  </Provider>,
  document.getElementById('root'),
);
