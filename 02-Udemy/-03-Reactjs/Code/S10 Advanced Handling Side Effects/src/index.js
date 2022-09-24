import React from 'react';
import ReactDOM from 'react-dom/client';

import './index.css';
import App from './App';
import AuthContext, {
  AutchContextProvider,
} from './components/store/auth-context';
// import  from './components/store/auth-context';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <AutchContextProvider>
    <App />
  </AutchContextProvider>
);
