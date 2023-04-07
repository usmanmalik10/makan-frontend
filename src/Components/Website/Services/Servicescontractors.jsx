import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { Card } from 'react-bootstrap'
import { data } from './Contractorsdata'
export const Servicescontractors = () => {
  return (
    <div>
      <Container>
        <Row>
          <Col>
            <h1>
              Contractors
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
                    <Card.Title>{post.contractorname}</Card.Title>
                    <Card.Text>
                      <p>
                        <b>{post.cinfo}</b>
                      </p>
                    </Card.Text>
                    <Card.Footer>
                        {post.cprice}
                        {post.clocation}
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
