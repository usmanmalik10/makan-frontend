import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { Card } from 'react-bootstrap'
import { data } from './Aluminiumdata'
export const Servicesaluminum = () => {
  return (
    <div>
      <Container>
        <Row>
          <Col>
            <h1>Aluminium Workers</h1>
          </Col>
        </Row>
        <Row>
        {data.map((post) => {
            return (
                <Col>
                         <Card className="store-card">
                  <Card.Img className="img" variant="top" src={post.image} />
                  <Card.Body>
                    <Card.Title>{post.aluminiumworkername}</Card.Title>
                    <Card.Text>
                      <p>
                        <b>{post.alinfo}</b>
                      </p>
                    </Card.Text>
                    <Card.Footer>
                        {post.alprice}
                        {post.allocation}
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
