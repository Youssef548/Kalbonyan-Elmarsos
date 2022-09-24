import React from 'react';
import ReactDOM from 'react-dom';

import './index.css';
import App from './App';
import AutchContextProvider from './context/auth-context';

ReactDOM.render(
  <AutchContextProvider>
    <App />
  </AutchContextProvider>,
  document.getElementById('root')
);
