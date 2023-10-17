import React, { useState } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import "./Strategic.scss"
import OneImageCustomUploader from '../../Common/OneImageCustomUploader/OneImageCustomUploader'

export const Strategicsalepartner = () => {
  const [fileProfile, setFileProfile] = useState({
    file : null , 
    src : '',
  });
  const [fileIdCardFront, setFileIdCardFront] = useState({
    file : null , 
    src : '',
  });
   const [fileIdCardBack, setFileIdCardBack] = useState({
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

                <OneImageCustomUploader isCustom={ true} file={fileProfile} setFile={setFileProfile}>
                <div className='profile-pic'>
               <img src={fileProfile.src.length > 5 ? fileProfile.src : '/user.webp'} alt="profile" />
           
               </div>
                </OneImageCustomUploader>
              
                </Row>
                <Row>
                    <Col lg={6} md={6} sm={12} xs={12}>
                    <label className='strategic_labels'>Front Id Card Pic :</label> <br/>
                        
                <OneImageCustomUploader isCustom={ true} file={fileIdCardFront} setFile={setFileIdCardFront}>
                <div className='id-pic'>
               <img src={fileIdCardFront.src.length > 5 ? fileIdCardFront.src : '/iccardback.jpg'} alt="profile" />
           
               </div>
                </OneImageCustomUploader>
                <small>(Click or drop on images to select image)</small>

                    </Col>
                    <Col lg={6} md={6} sm={12} xs={12}>
                    <label className='strategic_labels'>Back Id Card Pic :</label> <br/>
                  
                        
                <OneImageCustomUploader isCustom={ true}  file={fileIdCardBack} setFile={setFileIdCardBack}>
                <div className='id-pic'>
                    
                <img src={fileIdCardBack.src.length > 5 ? fileIdCardBack.src : '/iccardfront.jpg'} alt="profile" />
           
               </div>
               
                </OneImageCustomUploader>
                <small>(Click or drop on images to select image)</small>
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



