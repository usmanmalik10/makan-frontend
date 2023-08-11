import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import Card from "react-bootstrap/Card";
export const Storesprof = () => {
  return (
    <>
    <section>
      <Container>
        <Row>
          <Col>
            <h1>All Add's</h1>
          </Col>
        </Row>
        <Row>
          <Col lg={4} md={4} sm={12} xs={12}>
          <Card>
                  <Card.Img />
                  <Card.Body>
                    <Card.Text>
                    
                    </Card.Text>
                  </Card.Body>
                </Card>
          </Col>
        </Row>
      </Container>
    </section>
    </>
  )
}
