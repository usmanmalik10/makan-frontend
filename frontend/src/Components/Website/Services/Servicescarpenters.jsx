import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import { Card } from 'react-bootstrap'
import { data } from './Carpenterdata'
export const Servicescarpenters = () => {
  return (
    <div>
      <Container>
        <Row>
          <Col>
              <h1>Carpenter</h1>
          </Col>
        </Row>
        <Row>
        {data.map((post) => {
            return (
                <Col>
                         <Card className="store-card">
                  <Card.Img className="img" variant="top" src={post.image} />
                  <Card.Body>
                    <Card.Title>{post.carpentername}</Card.Title>
                    <Card.Text>
                      <p>
                        <b>{post.cptinfo}</b>
                      </p>
                    </Card.Text>
                    <Card.Footer>
                        {post.cptprice}
                        {post.cptlocation}
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
