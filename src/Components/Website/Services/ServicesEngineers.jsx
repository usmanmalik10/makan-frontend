import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import { data } from './Engineersdata'
import { Card } from 'react-bootstrap'
import "./serviceall.css";
import { Link } from 'react-router-dom';

export const ServicesEngineers = () => {
  return (
    <div>
      <Container>
        <Row>
          <Col>
            <h1>Engineers</h1>
          </Col>
          <Col>
                <div className='service_all_see_div'>
                <Link to="/" className='service_all_see'>see all</Link>
                </div>
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
                   <p className='service_all_data'> Engineer Name : {post.engineername}</p>
                      <p className='service_all_data'>Contact Number : {post.contact}</p>
                      <p className='service_all_data'>Address : {post.location} </p>
                      <p className='service_all_data'>Area Of Service : {post.areaofservice}</p>
                      <p className='service_all_data'>Charging Schedule : {post.chargingschedule}</p>
                      <p className='service_all_data'>Price : {post.rate}</p>
                    </Card.Text>
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
