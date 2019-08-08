import React from 'react';
import { Container, Row, Col, Tabs, Tab } from 'react-bootstrap';
import UserPost from './UserPost';
import UserAlbum from './UserAlbum';

const Profile = (props) => {
  const { user, userId } = props;

  return (
    <React.Fragment>
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
    </React.Fragment>
  )
}

export default Profile;