import React from 'react';
import ReactDOM from 'react-dom';
import App from './App.jsx';
import ListUser from './ListUser';
import { StoreProvider } from './Store';
import { Router } from '@reach/router';
import './index.css';

ReactDOM.render(
  <StoreProvider>
    <Router>
      <App path='/'>
        <ListUser path='/'/>
      </App>
    </Router>
  </StoreProvider>, 
document.getElementById('root'));
