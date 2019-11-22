import React from 'react';
import { render } from 'react-dom';
import MyProvider from './Context.jsx';
import App from './App.jsx';

render(
  <MyProvider>
    <App />
  </MyProvider>,
  document.getElementById('root'),
);