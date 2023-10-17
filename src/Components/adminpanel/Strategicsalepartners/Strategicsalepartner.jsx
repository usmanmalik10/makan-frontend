import React, { useState } from 'react'
import { Col, Container, Row, Form } from 'react-bootstrap'
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
                        <label className='strategic_labels'>Contact Number :</label><br/>
                        <input className='strategic_inputs' type='text' placeholder='Contact Number' />
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
                    <Col lg={6} md={6} sm={12} xs={12}>
                    <div className='strategic_divs'>
                    <label className='strategic_labels'> Select Province :</label><br/>
                       <Form.Select className='strategic_inputs' type='text' placeholder='Select Province'>
                       <option>Select Province</option>
                       <option>Punjab</option>
                       <option>Sindh</option>
                       <option>KPK</option>
                       <option>Azad jammu & Kasmir</option>
                     
                       </Form.Select>
                       </div>
                    </Col>
                    <Col lg={6} md={6} sm={12} xs={12}>
                    <div className='strategic_divs'>
                    <label className='strategic_labels'> Select City :</label><br/>
                       <Form.Select className='strategic_inputs' type='text' placeholder='Select City'>
                       <option>Select City</option>
                       <option>Lahore</option>
                       <option>Faisalabad</option>
                       <option>Sialkot</option>
                       <option>Sheikhupura</option>
                       <option>Jarranwala</option>
                       <option>Toba Tek Singh</option>
                       <option>Nankana</option>
                       <option>Gujranwala</option>
                       <option>Gujrat</option>
                       <option>Rawalpindi</option>
                       <option>Islamabad</option>
                       <option>Multan</option>
                       <option>Bhawalpur</option>
                       <option>Hasilpur</option>
                       <option>Rahim yar Khan</option>
                       <option>Chistian</option>
                       <option>Bhawalnagar</option>
                       <option>Melsi</option>
                       <option>Vehari</option>
                       <option>Burewala</option>
                       <option>Sahiwal</option>
                       <option>Pakpattan</option>
                       <option>Chichawatni</option>
                       <option>Arifwala</option>
                       <option>Okara</option>
                       <option>Pattoki</option>
                       <option>Texla</option>
                       <option>Kasur</option>
                       <option>Khanewal</option>
                       <option>Layyah</option>
                       <option>Lodhran</option>
                       <option>DG Khan</option>
                       <option>Attock</option>
                       <option>Jhelum</option>
                       <option>Chakwal</option>
                       <option>Kharian</option>
                       <option>Gujar Khan</option>
                       <option>Kahota</option>
                       <option>hassan Abdal</option>
                       <option>Johrabad</option>
                       <option>Jhang</option>
                       <option>Mianwali</option>
                       <option>Bhakkar</option>
                       <option>Mandi Bahaudin</option>
                       <option>Chiniot</option>

                       
                       </Form.Select>
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
