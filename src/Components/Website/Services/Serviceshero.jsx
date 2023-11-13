import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import serviceimg from "../../../images/servicemain.jpeg"
import "./serviceall.css"


export const Serviceshero = () => {
    
  return (
    <div>
        <Container fluid>
            <Row>
                <Col>
                
                  <img  className="service_hero_img" src={serviceimg} alt='s2' />
                </Col>
            </Row>
        </Container>
    </div>
  )
}
