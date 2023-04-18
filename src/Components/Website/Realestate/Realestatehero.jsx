import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import img from "../../../images/sslide2.png"
import sidelogo from "../../../images/sidelogo.png"
import { Card } from 'react-bootstrap'
import { data } from './Estaterentdata'
import { saledata } from './Estatesaledata'
export const Realestatehero = () => {
  return (
    <div>
        <section>
            <Container fluid>
                <Row>
                    <Col>
                        <img src={img} alt="im" />
                    </Col>
                </Row>
            </Container>
                <Container>
                    <Row>
                        <Col>
                        <div className='team-heading-div'>
                     <img className='side-logo' src={sidelogo} alt="sd" /> <strong className='team-heading'>Real Estate</strong>
                    </div>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <h1>For Rent</h1>
                        </Col>
                    </Row>
                    <Row>
                    {data.map((post) => {
            return (
                <Col>
                         <Card className="store-card">
                  <Card.Img className="img" variant="top" src={post.image} />
                  <Card.Body>
                    <Card.Title>{post.housenumber}</Card.Title>
                    <Card.Text>
                      <p>
                        <b>{post.location}</b>
                      </p>
                      <p>{post.detail}</p>
                      <p>{post.size}</p>
                      <p>{post.rent}</p>
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
                <Container>
                    <Row>
                        <Col>
                            <h1>For Sale</h1>
                        </Col>
                    </Row>
                    <Row>
                    {saledata.map((post) => {
            return (
                <Col>
                         <Card className="store-card">
                  <Card.Img className="img" variant="top" src={post.image} />
                  <Card.Body>
                    <Card.Title>{post.housenumber}</Card.Title>
                    <Card.Text>
                      <p>
                        <b>{post.location}</b>
                      </p>
                      <p>{post.detail}</p>
                      <p>{post.size}</p>
                      <p>{post.price}</p>
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
