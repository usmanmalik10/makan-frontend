import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import "./Strategic.scss"

export const Strategicsalepartner = () => {
  return (
    
    <>
        <section className='strategic-sale-section'>
            <Container>
                <Row>
                    <Col >
                        <h3 className='strategic_heading'>Create Strategic Sale Partners</h3>
                    </Col>
                </Row>
                <Row>
                    <Col lg={6} md={6} sm={12} xs={12}>
                        <div className='strategic_divs'>
                            <label className='strategic_labels'>User Name :</label> <br/>
                            <input className='strategic_inputs' type='text' placeholder='User Name'/>
                        </div>
                    </Col>
                    <Col lg={6} md={6} sm={12} xs={12}>
                        <div className='strategic_divs'>
                            <label className='strategic_labels'>Email/Phone Number :</label><br/>
                            <input className='strategic_inputs' type='text' placeholder='Email/Phone Number'/>
                        </div>
                    </Col>
                </Row>
                <Row>
                    <Col lg={6} md={6} sm={12} xs={12}>
                    <div className='strategic_divs'>
                        <label className='strategic_labels'>
                            Password :
                        </label><br/>
                        <input className='strategic_inputs' type='text' placeholder='Password' />
                        </div>
                    </Col>
                    <Col lg={6} md={6} sm={12} xs={12}>   
                    <div className='strategic_divs'>
                        <label className='strategic_labels'>
                            CNIC Number :
                        </label><br/>
                        <input className='strategic_inputs' type='text' placeholder='CNIC Number' />
                        </div>
                    </Col>
                </Row>
                <Row>
                    <Col lg={6} md={6} sm={12} xs={12}>
                    <div className='strategic_divs'> 
                        <label className='strategic_labels'>Phone Number :</label><br/>
                        <input className='strategic_inputs' type='text' placeholder='PhoneNumber' />
                        </div>
                    </Col>
                    <Col lg={6} md={6} sm={12} xs={12}>
                    <div className='strategic_divs'>
                    <label className='strategic_labels'> Address :</label><br/>
                       <input className='strategic_inputs' type='text' placeholder='Address'/>
                       </div>
                    </Col>
                </Row>
                <Row>
                    <Col>
                    <div className=" strategic_create_button">
                    <button type="submit" >Create</button>
                  </div>
                    </Col>
                </Row>
            </Container>
        </section>
    </>
  )
}
