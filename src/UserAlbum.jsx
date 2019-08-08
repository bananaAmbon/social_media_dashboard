import React, { useContext, useEffect } from 'react';
import { Store } from './Store';
import { fetchUserAlbum } from './Action';
import { ListGroup, ListGroupItem } from 'react-bootstrap';
import { Link } from '@reach/router';

const UserAlbum = (props) => {
  const { user } = props;
  const { state, dispatch } = useContext(Store);
  const { userAlbum } = state;

  useEffect(() => {
    userAlbum.length === 0 && fetchUserAlbum(dispatch, user);
  });

  return (
    <React.Fragment>
      <ListGroup>
        {userAlbum.map(val => {
          return (
            <ListGroupItem key={val.id}>
              <h4>
                <Link to={'/album/' + val.id} className='text-decoration-none'>{val.title}</Link>
              </h4>
            </ListGroupItem>
          )
        })}
      </ListGroup>
    </React.Fragment>
  )
}

export default UserAlbum;