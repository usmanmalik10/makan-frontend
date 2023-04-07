import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import { data } from './Engineersdata'
import { Card } from 'react-bootstrap'
export const ServicesEngineers = () => {
  return (
    <div>
      <Container>
        <Row>
          <Col>
            <h1>Engineers</h1>
          </Col>
        </Row>
        <Row>
        {data.map((post) => {
            return (
                <Col>
                         <Card className="store-card">
                  <Card.Img className="img" variant="top" src={post.image} />
                  <Card.Body>
                    <Card.Title>{post.engineername}</Card.Title>
                    <Card.Text>
                      <p>
                        <b>{post.einfo}</b>
                      </p>
                    </Card.Text>
                    <Card.Footer>
                        {post.eprice}
                        {post.elocation}
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
