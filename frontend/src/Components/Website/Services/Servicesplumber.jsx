import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import { Card } from 'react-bootstrap'
import { data } from './plumberdata'
export const Servicesplumber = () => {
  return (
    <div>
      <Container>
        <Row>
          <Col>
              <h1>Plumber</h1>
          </Col>
        </Row>
        <Row>
        {data.map((post) => {
            return (
                <Col>
                         <Card className="store-card">
                  <Card.Img className="img" variant="top" src={post.image} />
                  <Card.Body>
                    <Card.Title>{post.plumbername}</Card.Title>
                    <Card.Text>
                      <p>
                        <b>{post.pinfo}</b>
                      </p>
                    </Card.Text>
                    <Card.Footer>
                        {post.pprice}
                        {post.plocation}
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
