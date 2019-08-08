import React, { useContext, useState, useEffect } from 'react';
import { Store } from './Store';
import { fetchCurrentUser } from './Action';
import Profile from './Profile';

const User = (props) => {
  const { userId, children } = props;
  const { state, dispatch } = useContext(Store);
  const { currentUser, users } = state;
  
  const filterUser = () => {
    const user = users.filter(x => x.id === parseInt(userId));
    return user[0];
  }

  const [user, setUser] = useState(filterUser);

  useEffect(() => {
    user === undefined && fetchCurrentUser(dispatch, userId);
    (user === undefined || Array.isArray(user)) && setUser(currentUser);
  }, [user, dispatch, userId, currentUser]);

  return (
    <React.Fragment>
      {props["*"].includes('post') ?
        children
        :
        user === undefined ? null : <Profile user={user} userId={userId}/>
      }
    </React.Fragment>
  );
}

export default User;