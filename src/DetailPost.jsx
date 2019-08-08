import React, { useContext, useEffect } from 'react';
import { Store } from './Store';
import { fetchComments } from './Action';
import { Container, Row, Col, ListGroup, ListGroupItem } from 'react-bootstrap';
import Breadcrumbs from './component/Breadcrumbs';

const DetailPost = (props) => {
  const { postId } = props;
  const { state, dispatch } = useContext(Store);
  const { currentUser, comments } = state;

  useEffect(() => {
    comments.length === 0 && fetchComments(dispatch, postId);
  });

  return (
    <React.Fragment>
      <Container>
        <Row>
          <Col>
            <Breadcrumbs {...currentUser} label='Comments'/>
          </Col>
        </Row>
        <Row>
          <Col>
            <ListGroup>
              {comments.map(val => {
                return (
                  <ListGroupItem key={val.id}>
                    <span>{val.email}</span>
                    <h4>{val.name}</h4>
                    <p>{val.body}</p>
                  </ListGroupItem>
                )
              })}
            </ListGroup>
          </Col>
        </Row>
      </Container>
    </React.Fragment>
  )
}

export default DetailPost;