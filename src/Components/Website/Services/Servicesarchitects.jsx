import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { data } from './Architectsdata'
import { Card } from 'react-bootstrap'
export const Servicesarchitects = () => {
  return (
    <div>
        <Container>
            <Row>
                <Col>
                    <h1>
                        Architects
                    </h1>
                </Col>
            </Row>
            <Row>
            {data.map((post) => {
            return (
                <Col>
                         <Card className="store-card">
                  <Card.Img className="img" variant="top" src={post.image} />
                  <Card.Body>
                    <Card.Title>{post.arcihtectname}</Card.Title>
                    <Card.Text>
                      <p>
                        <b>{post.info}</b>
                      </p>
                    </Card.Text>
                    <Card.Footer>
                        {post.price}
                        {post.location}
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
