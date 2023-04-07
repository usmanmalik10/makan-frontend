import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'

export const Profile = () => {
  return (
    <>
      <section>
        <Container>
            <Row>
              <Row>
                <Col>
                  <div>
                    <img/>
                  </div>
                </Col>
              </Row>
              <Col>
                  <h4>Name</h4><br/>
                  <p>Muhammad Ahmad</p>
              </Col>
            </Row>
            <Row>
              <Col>
                  <h4>Email</h4><br/>
                  <p>muhmmadahmad123@gmail.com</p>
              </Col>
            </Row>
            <Row>
              <Col>
                <h4>Address</h4><br/>
                <p>House # 34 Block C Farid Town Sahiwal</p>
              </Col>
            </Row>
            <Row>
              <Col>
                <h4>Password</h4><br/>
                
              </Col>
            </Row>
        </Container>
      </section>
    </>
  )
}
