import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { Card } from 'react-bootstrap'
import { data } from './Marbletilesdata'
export const Servicesmarbles = () => {
  return (
    <div>
      <Container>
        <Row>
          <Col>
            <h1>Marble / Tiles</h1>
          </Col>
        </Row>
        <Row>
        {data.map((post) => {
            return (
                <Col>
                         <Card className="store-card">
                  <Card.Img className="img" variant="top" src={post.image} />
                  <Card.Body>
                    <Card.Title>{post.tileshopname}</Card.Title>
                    <Card.Text>
                      <p>
                        <b>{post.tilesinfo}</b>
                      </p>
                    </Card.Text>
                    <Card.Footer>
                        {post.tilesprice}
                        {post.tileslocation}
                    </Card.Footer>
                  </Card.Body>
                </Card>
                </Col>
                 );
                })}
        </Row>
      </Container>
    </div>
  )
}
