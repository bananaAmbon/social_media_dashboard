import React, { useContext, useState, useEffect } from 'react';
import { Store } from './Store';
import { fetchCurrentUser } from './Action';
import { Container, Row, Col, Tabs, Tab } from 'react-bootstrap';
import UserPost from './UserPost';
import UserAlbum from './UserAlbum';

const User = (props) => {
  const { userId } = props;
  const { state, dispatch } = useContext(Store);
  const { currentUser } = state;
  const listUser = state.users;
  
  const filterUser = () => {
    const user = listUser.filter(x => x.id === parseInt(userId));
    return user[0];
  }

  const [user, setUser] = useState(filterUser);

  useEffect(() => {
    user === undefined && fetchCurrentUser(dispatch, userId);
    (user === undefined || Array.isArray(user)) && setUser(currentUser);
  }, [user, dispatch, userId, currentUser]);

  return (
    <React.Fragment>
      {user === undefined ? 
        null
        :
        <Container>
          <br/>
          <Row>
            <Col>
              <Tabs defaultActiveKey="profile" id="uncontrolled-tab-example">
                <Tab eventKey="profile" title="Profile">
                  <h1>{user.username}</h1>
                  <p>Name: {user.name}</p>
                  <p>Email: {user.email}</p>
                  <p>Website: <a href={'http://' + user.website} target='_blank' rel="noopener noreferrer">{user.website}</a></p>
                </Tab>
                <Tab eventKey="post" title="Post">
                  <UserPost user={userId}/>
                </Tab>
                <Tab eventKey="album" title="Album">
                  <UserAlbum user={userId}/>
                </Tab>
              </Tabs>
            </Col>
          </Row>
        </Container>
      }
    </React.Fragment>
  );
}

export default User;