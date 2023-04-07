import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { Card } from 'react-bootstrap'
import { data } from './Steelwelderdata'
export const Servicessteelwelders = () => {
  return (
    <div>
      <Container>
        <Row>
          <Col>
            <h1>Steel Welders</h1>
          </Col>
        </Row>
        <Row>
        {data.map((post) => {
            return (
                <Col>
                         <Card className="store-card">
                  <Card.Img className="img" variant="top" src={post.image} />
                  <Card.Body>
                    <Card.Title>{post.weldername}</Card.Title>
                    <Card.Text>
                      <p>
                        <b>{post.swinfo}</b>
                      </p>
                    </Card.Text>
                    <Card.Footer>
                        {post.swprice}
                        {post.swlocation}
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
