import React, { useContext, useEffect } from 'react';
import { Store } from './Store';
import { fetchUserAlbum } from './Action';
import { Table } from 'react-bootstrap';
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
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>#</th>
            <th>Title</th>
          </tr>
        </thead>
        <tbody>
          {userAlbum.map((val, idx) => {
            return (
              <tr key={idx}>
                <td>{idx + 1}</td>
                <td>
                  <Link to={'/user/' + user + '/album/' + val.id}>
                    {val.title}
                  </Link>
                </td>
              </tr>
            )
          })}
        </tbody>
      </Table>
    </React.Fragment>
  )
}

export default UserAlbum;