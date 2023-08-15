import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import img from "../../../images/sslide2.png"
import sidelogo from "../../../images/sidelogo.png"
import { Card } from 'react-bootstrap'
import { data } from './Estaterentdata'
import { saledata } from './Estatesaledata'
import "./Realestate.scss"

export const Realestatehero = () => {
  return (
    <div>
        <section className='real_estate_sec'>
            <Container fluid>
                <Row>
                    <Col>
                        <img className='estate_hero_img' src={img} alt="im" />
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
                            <h1>House For Rent</h1>
                        </Col>
                    </Row>
                    <Row>
                    {data.map((post) => {
            return (
                <Col lg={4} md={4} sm={12} xs={12}>
                         <Card className="store-card">
                  <Card.Img className="img" variant="top" src={post.image} />
                  <Card.Body>
                   
                    <Card.Text>
                      <p className='estate_rent'> House Number : {post.housenumber}</p>
                      <p className='estate_rent'>
                        Address : {post.location}
                      </p>
                      <p className='estate_rent'>Size : {post.size}</p>
                      <p className='estate_rent'> Bedrooms : {post.bedrooms}</p>
                      <p className='estate_rent'> Detail : {post.detail}</p>
                      <p className='estate_rent'> Rent : Rs / {post.rent}</p>
                      <p className='estate_rent'>  Contact Number : {post.contact}</p>
                    </Card.Text>
                    
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
                            <h1>House For Sale</h1>
                        </Col>
                    </Row>
                    <Row>
                    {saledata.map((post) => {
            return (
                <Col lg={4} md={4} sm={12} xs={12}>
                         <Card className="store-card">
                  <Card.Img className="img" variant="top" src={post.image} />
                  <Card.Body>
                  <Card.Text>
                      <p className='estate_rent'> House Number : {post.housenumber}</p>
                      <p className='estate_rent'>
                        Address : {post.location}
                      </p>
                      <p className='estate_rent'>Size : {post.size}</p>
                      <p className='estate_rent'> Bedrooms : {post.bedrooms}</p>
                      <p className='estate_rent'> Detail : {post.detail}</p>
                      <p className='estate_rent'> Price : Rs / {post.price}</p>
                      <p className='estate_rent'>  Contact Number : {post.contact}</p>
                    </Card.Text>
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
