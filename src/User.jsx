import React, { useContext, useEffect } from 'react';
import { Store } from './Store';
import { fetchCurrentUser } from './Action';
import Profile from './Profile';

const User = (props) => {
  const { userId, children } = props;
  const { state, dispatch } = useContext(Store);
  const { currentUser } = state;

  useEffect(() => {
    (currentUser.length === 0 || currentUser.id !== userId) && fetchCurrentUser(dispatch, userId);
  }, [dispatch, userId, currentUser]);

  return (
    <React.Fragment>
      {props["*"].includes('post') ?
        children
        :
        currentUser === undefined ? null : <Profile user={currentUser} userId={userId}/>
      }
    </React.Fragment>
  );
}

export default User;