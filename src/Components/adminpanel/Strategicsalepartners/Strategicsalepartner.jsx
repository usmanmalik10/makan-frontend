import React, { useState } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import "./Strategic.scss"
import OneImageCustomUploader from '../../Common/OneImageCustomUploader/OneImageCustomUploader'

export const Strategicsalepartner = () => {
  const [file, setFile] = useState({
    file : null , 
    src : '',
  });

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
                <label className='strategic_labels'>User Profile :</label> <br/>

                <OneImageCustomUploader isCustom={ true} file={file} setFile={setFile}>
                <div className='profile-pic'>
               <img src={file.src.length > 5 ? file.src : '/logo192.png'} alt="profile" />
           
               </div>
                </OneImageCustomUploader>
              
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
