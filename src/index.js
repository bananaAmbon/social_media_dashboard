import React from 'react';
import ReactDOM from 'react-dom';
import App from './App.jsx';
import ListUser from './ListUser';
import User from './User';
import DetailPost from './DetailPost';
import { StoreProvider } from './Store';
import { Router } from '@reach/router';
import './index.css';

ReactDOM.render(
  <StoreProvider>
    <Router>
      <App path='/'>
        <ListUser path='/'/>
        <User path='/user/:userId'>
          <DetailPost path='/post/:postId' />
        </User>        
      </App>
    </Router>
  </StoreProvider>, 
document.getElementById('root'));
