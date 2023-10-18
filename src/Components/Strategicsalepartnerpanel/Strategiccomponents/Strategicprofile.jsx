import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import "./Strategicsalepartners.scss"

export const Strategicprofile = () => {
  return (
    <>
      <section className='strategic_sale_Profile_sec'>
        <Container>
          <Row>
            <Col>
                <h3 className='Strategic_prof_heading'>Strategic Sale Partners Profile</h3>
            </Col>
          </Row>
          <Row>
              <Col lg={6} md={6} sm={12} xs={12}>

              </Col>
              <Col lg={6} md={6} sm={12} xs={12}>
                  <div className='strat_div'>
                    <label className='strat_refr_label'> Referral key :</label><br/>
                    <input className='strat_refr_input' type='text'  />
                  </div>
              </Col>
          </Row>
        </Container>
      </section>
    </>
  )
}
