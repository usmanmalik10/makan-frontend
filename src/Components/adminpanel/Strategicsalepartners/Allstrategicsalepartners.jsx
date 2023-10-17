import React from 'react'
import { Container, Row , Col } from 'react-bootstrap'
import "./Allstrategic.scss"
import Card from "react-bootstrap/Card";
export const Allstrategicsalepartners = () => {
  return (
    <>
        <section className='all_strategic_section'>
            <Container>
                <Row>
                    <Col>
                        <h3 className='all_strategic_heading'>All Strategics Sales Partners</h3>
                    </Col>
                </Row>
                <Row>
                   
                    {/* {data.map(() => ( */}
              <Col lg={3} md={3} sm={12} xs={12}>
                <Card  className="all_strategic_card">
                  <Card.Img  />
                  <Card.Body>
                    <Card.Text>
                      <p className="all_strategic_card_text">
                        Name : <span>{}</span>
                      </p>
                      <p className="all_strategic_card_text">
                        CNIC :
                        <span>{}</span>
                      </p>
                      <p className="all_strategic_card_text">
                        Conact Number :
                        <span>{}</span>
                      </p>
                      <p className="all_strategic_card_text">
                        Address : <span>{}</span>
                      </p>
                      <p className="all_strategic_card_text">
                        Province :
                        <span>{}</span>
                      </p>
                      <p className="all_strategic_card_text">
                        City :
                        <span>{}</span>
                      </p>
                      
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Col>
            {/* ))} */}

                  
                </Row>
            </Container>
        </section>
    </>
  )
}
