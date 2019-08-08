import React, { useContext, useEffect } from 'react';
import { Store } from './Store';
import { fetchPhotos } from './Action';
import { Container, Row, Col, Card } from 'react-bootstrap';
import Breadcrumbs from './component/Breadcrumbs';

const Photos = (props) => {
  console.log(props);
  const { albumId } = props;
  const { state, dispatch } = useContext(Store);
  const { currentUser, photos } = state;

  useEffect(() => {
    photos.length === 0 && fetchPhotos(dispatch, albumId);
  });

  return (
    <React.Fragment>
      <Container>
        <Row>
          <Col>
            <Breadcrumbs {...currentUser} label='Photos'/>
          </Col>
        </Row>
        <Row>
          {photos.map(val => {
            return (
              <Col md='3' key={val.id}>
                <Card>
                  <Card.Img variant='top' src={val.thumbnailUrl} />
                  <Card.Body>
                    <Card.Title>
                      <a href={val.url} target="_blank" rel="noopener noreferrer">
                        {val.title}
                      </a>
                    </Card.Title>
                  </Card.Body>
                </Card>
              </Col>
            )
          })}
        </Row>
      </Container>
    </React.Fragment>
  )
}

export default Photos;