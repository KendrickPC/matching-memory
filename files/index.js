import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

import { store } from './app/store.js';
// Add import statement below
import { Provider } from 'react-redux';

ReactDOM.render(
  // Implement Provider component with store below
  // https://react-redux.js.org/api/provider
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
