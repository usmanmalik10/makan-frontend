import React from 'react'
import { Container, Row , Col} from 'react-bootstrap'
import Card from "react-bootstrap/Card";
import "./Activeadd.scss"

export const Activead = () => {
  return (
   <>
    <section className='service_activeadd_section'>
      <Container>
        <Row>
          <Col>
            <h1 className='service_active_heading'>Active Adds</h1>
          </Col>
        </Row>
        <Row className='pt-3'>
          <Col lg={4} md={4} sm={12} xs={12}>
          <Card className='serivce_active_card'>
                  <Card.Img  />
                  <Card.Body>
                    
                    <Card.Text>
                      <p className='active_card_inner'>Category :</p>
                      <p className='active_card_inner'>Contractor Name :</p>
                      <p className='active_card_inner'>Conact Number :</p>
                      <p className='active_card_inner'>Address :</p>
                      <p className='active_card_inner'>Area of Service :</p>
                      <p className='active_card_inner'>Charging Schedule : </p>
                      <p className='active_card_inner'>Labor Rate : Rs/ </p>
                      
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
