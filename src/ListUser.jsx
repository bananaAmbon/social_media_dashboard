import React from 'react';
import { Store } from './Store';
import { fetchDataAction } from './Action';
import { ListGroup, ListGroupItem } from 'react-bootstrap';
import { Link } from '@reach/router';

const ListUser = () => {
  const { state, dispatch } = React.useContext(Store);

  React.useEffect(() => {
    state.users.length === 0 && fetchDataAction(dispatch);
  });

  const users = state.users;

  return (
    <React.Fragment>
      <ListGroup>
        {users.map(user => {
          return (
            <ListGroupItem key={user.id}>
              <Link to="#">{user.username}</Link>
            </ListGroupItem>
          );
        })}
      </ListGroup>
    </React.Fragment>
  );
}

export default ListUser;