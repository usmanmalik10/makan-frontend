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
                            <h1 className='cost_heading'>Cost Estimation's </h1>
                        </h1>
                    </Col>
                </Row>
                <form>
                <Row>
                    
                    <Col lg={4} md={4} sm={12} xs={12}>
                        <div>
                            <label>Area in sqft :</label><br/>
                            <input type="text" placeholder='Area in sqft' />
                        </div>
                    </Col>
                    <Col lg={4} md={4} sm={12} xs={12}>
                        <div>
                            <label>select Stories :</label><br/>
                            <Form.Select>
                                <option>Select Stories</option>
                                <option>Single Story</option>
                                <option>Double Story</option>
                                <option>Triple Story</option>
                            </Form.Select>
                        </div>
                    </Col>
                    
                </Row>
                </form>
            </Container>
        </section>
    </>
  )
}
