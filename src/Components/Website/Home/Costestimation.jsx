import React from 'react'
import { Col, Container, Row, Form } from 'react-bootstrap'

export const Costestimation = () => {
  return (
    <>
        <section className='cost_section'>
            <Container>
                <Row>
                    <Col>
                        <h1>
                            <h1 className='cost_heading'>Cost Estimation Calculator</h1>
                        </h1>
                    </Col>
                </Row>
                <form>
                <Row>
                    
                    <Col lg={4} md={4} sm={12} xs={12}>
                        <div>
                            <label className='cost_lables'>Area in sqft :</label><br/>
                            <input className='cost_inputs' type="text" placeholder='Area in sqft' />
                        </div>
                    </Col>
                    <Col lg={4} md={4} sm={12} xs={12}>
                        <div>
                            <label className='cost_lables'>Select Stories :</label><br/>
                            <Form.Select className='cost_inputs'>
                                <option>Select Stories</option>
                                <option>Single Story</option>
                                <option>Double Story</option>
                                <option>Triple Story</option>
                            </Form.Select>
                        </div>
                    </Col>
                    <Col lg={4} md={4} sm={12} xs={12}>
                    <div>
                            <label className='cost_lables'>Construction Type :</label><br/>
                            <Form.Select className='cost_inputs'>
                                <option>Construction Type</option>
                                <option>Grey Structure</option>
                                <option>Complete</option>
                               
                            </Form.Select>
                        </div>
                    </Col>
                    
                </Row>
                <Row>
                    <Col lg={4} md={4} sm={12}>
                    <div>
                            <label className='cost_lables'> Cement in Bags :</label>
                            <br/>
                            <input className='cost_inputs' type='text' placeholder='Cement in Bags' />
                        </div>
                    </Col>
                    <Col lg={4} md={4} sm={12}>
                    <div>
                            <label className='cost_lables'> Concrete in sqft :</label>
                            <br/>
                            <input className='cost_inputs' type='text' placeholder='Concrete in sqft' />
                        </div>
                    </Col>
                    <Col lg={4} md={4} sm={12}>
                    <div>
                            <label className='cost_lables'> Sand in sqft :</label>
                            <br/>
                            <input className='cost_inputs' type='text' placeholder='Sand in sqft' />
                        </div>
                    </Col>
                </Row>
                <Row>
                    <Col lg={4} md={4} sm={12} xs={12}>
                    <div>
                            <label className='cost_lables'> Bricks :</label>
                            <br/>
                            <input className='cost_inputs' type='text' placeholder='Bricks' />
                        </div>
                    </Col>
                    <Col lg={4} md={4} sm={12} xs={12}>
                    <div>
                            <label className='cost_lables'> Metal in Ton's :</label>
                            <br/>
                            <input className='cost_inputs' type='text' placeholder='Metal in Ton' />
                        </div>
                    </Col>
                    <Col lg={4} md={4} sm={12} xs={12}></Col>
                </Row>
                </form>
            </Container>
        </section>
    </>
  )
}
