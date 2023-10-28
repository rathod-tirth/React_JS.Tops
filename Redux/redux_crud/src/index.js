import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import store from './App/Store';
import { Provider } from 'react-redux';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider value={store}>
      <App />
    </Provider>
  </React.StrictMode>
);