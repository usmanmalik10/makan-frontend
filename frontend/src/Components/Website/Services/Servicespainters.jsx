import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { Card } from 'react-bootstrap'
import { data } from './painters'
export const Servicespainters = () => {
  return (
    <div>
        <Container>
            <Row>
                <Col>
                    <h1>Painters</h1>
                </Col>
            </Row>
            <Row>
            {data.map((post) => {
            return (
                <Col>
                         <Card className="store-card">
                  <Card.Img className="img" variant="top" src={post.image} />
                  <Card.Body>
                    <Card.Title>{post.paintername}</Card.Title>
                    <Card.Text>
                      <p>
                        <b>{post.ptinfo}</b>
                      </p>
                    </Card.Text>
                    <Card.Footer>
                        {post.ptprice}
                        {post.ptlocation}
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
