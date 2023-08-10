import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import Card from "react-bootstrap/Card";
import './Estatealldata.scss'
export const Esatatealldata = () => {
  return (
    <div className='estate_all_section'>
        <section >
            <Container>
                <Row>
                    <Col>
                        <h2>Houses For Rent</h2>
                    </Col>
                </Row>
                <Row>
                    <Col lg={4} md={4} sm={12} xs={12}>
                    <Card className=''>
                  <Card.Img  />
                  <Card.Body>
                    
                    <Card.Text>
                      <p className='all_house_rent'>House # :</p>
                      <p className='all_house_rent'>Location :</p>
                      <p className='all_house_rent'>Size :</p>
                      <p className='all_house_rent'>Bedrooms :</p>
                      <p className='all_house_rent'>Detail :</p>
                      <p className='all_house_rent'>Rent : Rs/</p>
                      <p className='all_house_rent'>Contact Number :  </p>
                      
                    </Card.Text>
                  </Card.Body>
                </Card>
                    </Col>
                </Row>
            </Container>
        </section>
        <section>
            <Container>
                <Row>
                    <Col>
                        <h2>Houses For Sale</h2>
                    </Col>
                </Row>
                <Row>
                    <Col lg={4} md={4} sm={12} xs={12}>
                    <Card className=''>
                  <Card.Img  />
                  <Card.Body>
                    
                    <Card.Text>
                      <p className='all_house_sale'>House # :</p>
                      <p className='all_house_sale'>Location :</p>
                      <p className='all_house_sale'>Size :</p>
                      <p className='all_house_sale'>Bedrooms :</p>
                      <p className='all_house_sale'>Detail :</p>
                      <p className='all_house_sale'>Price : Rs/</p>
                      <p className='all_house_sale'>Contact Number :  </p>
                      
                    </Card.Text>
                  </Card.Body>
                </Card>
                    </Col>
                </Row>
            </Container>
        </section>
        <section>
            <Container>
                <Row>
                    <Col>
                        <h2>Plots For Sale</h2>
                    </Col>
                </Row>
                <Row>
                    <Col lg={4} md={4} sm={12} xs={12}>
                    <Card className=''>
                  <Card.Img  />
                  <Card.Body>
                    
                    <Card.Text>
                      <p className='all_plot_sale'>Plot # :</p>
                      <p className='all_plot_sale'>Location :</p>
                      <p className='all_plot_sale'>Size :</p>
                      <p className='all_plot_sale'>Price : Rs/</p>
                      <p className='all_plot_sale'>Contact Number :  </p>
                      
                    </Card.Text>
                  </Card.Body>
                </Card>
                    </Col>
                </Row>
            </Container>
        </section>
        <section>
            <Container>
                <Row>
                    <Col>
                        <h2>Plots For Rent</h2>
                    </Col>
                </Row>
                <Row>
                    <Col lg={4} md={4} sm={12} xs={12}>
                    <Card className=''>
                  <Card.Img  />
                  <Card.Body>
                    
                    <Card.Text>
                      <p className='all_plot_rent'>Plot # :</p>
                      <p className='all_plot_rent'>Location :</p>
                      <p className='all_plot_rent'>Size :</p>
                      <p className='all_plot_rent'>Rent : Rs/</p>
                      <p className='all_plot_rent'>Contact Number :  </p>
                      
                    </Card.Text>
                  </Card.Body>
                </Card>
                    </Col>
                </Row>
            </Container>
        </section>
    </div>
  )
}
