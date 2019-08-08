import React, { useContext, useEffect } from 'react';
import { Store } from './Store';
import { fetchUserPost } from './Action';
import { ListGroup, ListGroupItem } from 'react-bootstrap';
import { Link } from '@reach/router';

const UserPost = (props) => {
  const { user } = props;
  const { state, dispatch } = useContext(Store);
  const { userPost } = state;

  useEffect(() => {
    userPost.length === 0 && fetchUserPost(dispatch, user);
  });

  return (
    <React.Fragment>
      <ListGroup>
        {userPost.map(val => {
          return (
            <ListGroupItem key={val.id}>
              <h4>
                <Link to={'/user/' + user + '/post/' + val.id} className='text-decoration-none'>{val.title}</Link>
              </h4>
              <p>{val.body}</p>
            </ListGroupItem>
          )
        })}
      </ListGroup>
    </React.Fragment>
  )
}

export default UserPost;