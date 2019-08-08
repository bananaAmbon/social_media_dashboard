import React, { useContext, useEffect } from 'react';
import { Store } from './Store';
import { fetchUserPost } from './Action';
import { Table } from 'react-bootstrap';
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
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>#</th>
            <th>Title</th>
            <th>Body</th>
          </tr>
        </thead>
        <tbody>
          {userPost.map((val, idx) => {
            return (
              <tr key={idx}>
                <td>{idx + 1}</td>
                <td>
                  <Link to={'/user/' + user + '/post/' + val.id}>
                    {val.title}
                  </Link>
                </td>
                <td>{val.body}</td>
                {/* <td>
                  <Button variant='info'>
                    Edit
                  </Button>
                </td>
                <td>
                  <Button variant='danger' onClick={(e) => test(e)} data-post_id={val.id}>
                    Delete
                  </Button>
                </td> */}
              </tr>
            )
          })}
        </tbody>
      </Table>
    </React.Fragment>
  )
}

export default UserPost;