import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { Card } from 'react-bootstrap'
import { data } from './glassfixerdata'
export const Servicesglassfixers = () => {
  return (
    <div>
      <Container>
        <Row>
          <Col>
            <h1>Glass Fixers</h1>
          </Col>
        </Row>
        <Row>
        {data.map((post) => {
            return (
                <Col>
                         <Card className="store-card">
                  <Card.Img className="img" variant="top" src={post.image} />
                  <Card.Body>
                    <Card.Title>{post.glassfixername}</Card.Title>
                    <Card.Text>
                      <p>
                        <b>{post.gfinfo}</b>
                      </p>
                    </Card.Text>
                    <Card.Footer>
                        {post.gfprice}
                        {post.gflocation}
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
