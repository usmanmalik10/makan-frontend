import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import heroimg from "../../../images/sslide1.png"
import sidelogo from "../../../images/sidelogo.png"
import { Card } from 'react-bootstrap'
import { data } from './Teamdata'
export const Team = () => {
  return (
    <div>
        <section className='pt-5 pb-5'>
        <Container fluid>
            <Row>
                <Col className="col-padding">
                    
                        <img className='team-hero-img' src={heroimg} alt="hi" />
                   
                </Col>
            </Row>
            
        </Container>
        <Container>
            <Row>
                <Col>
                    <div className='team-heading-div'>
                     <img className='side-logo' src={sidelogo} alt="sd" /> <strong className='team-heading'>Our Team</strong>
                    </div>
                </Col>
            </Row>

            <Row>
            {data.map((post) => {
            return (
                <Col lg={4} md={6} sm={12}>
                         <Card className="store-card">
                  <Card.Img className="team-cardimg" variant="top" src={post.image} />
                  <Card.Body>
                    <Card.Title>{post.membername}</Card.Title>
                    <Card.Text>
                      <p>
                        <b>{post.designation}</b>
                      </p>
                      <p>{post.description}</p>
                    </Card.Text>
                    <Card.Footer>
                        {post.contact}
                        
                    </Card.Footer>
                  </Card.Body>
                </Card>
                </Col>
                 );
                })}
            </Row>
        </Container>
        </section>
    </div>
  )
}
