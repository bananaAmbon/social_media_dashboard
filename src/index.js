import React from 'react';
import ReactDOM from 'react-dom';
import App from './App.jsx';
import ListUser from './ListUser';
import User from './User';
import { StoreProvider } from './Store';
import { Router } from '@reach/router';
import './index.css';

ReactDOM.render(
  <StoreProvider>
    <Router>
      <App path='/'>
        <ListUser path='/'/>
        <User path='/user/:userId'/>
      </App>
    </Router>
  </StoreProvider>, 
document.getElementById('root'));
