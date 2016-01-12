import React from 'react';
import { Provider } from 'react-redux';
import configureStore from './client/store/configureStore';
import App from './client/containers/app';

const store = configureStore();

React.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('content')
);
