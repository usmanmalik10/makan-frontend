import React, { useState } from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import "./Strategicsalepartners.scss"
import { FiEye, FiEyeOff, FiCopy } from 'react-icons/fi';
import { toast } from 'react-toastify';
export const Strategicprofile = () => {
  const [isRevealed, setIsRevealed] = useState(false);
  const apiKey = "hidden referal key";
  const copyToClipboard = (text) => {
    toast.dismiss()
    const el = document.createElement('textarea');
    el.value = text;
    document.body.appendChild(el);
    el.select();
    document.execCommand('copy');
    document.body.removeChild(el);
    toast.info('Copied')
    // Optionally show a notification/toast saying "Copied to Clipboard"
  };


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
    <label className='strat_refr_label'> Referral key :</label><br />
    <div className="input-container">
      <input 
        className='strat_refr_input' 
        type={isRevealed ? 'text' : 'password'} 
        value={apiKey} 
        readOnly
      />
      {isRevealed ? 
        <FiEyeOff height={20} width={20}  className="icon-eye" onClick={() => setIsRevealed(false)} /> : 
        <FiEye height={20} width={20}   className="icon-eye" onClick={() => setIsRevealed(true)} />
      }
      <FiCopy height={20} width={20}   className="icon-copy" onClick={() => copyToClipboard(apiKey)} />
    </div>
  </div>
</Col>
          </Row>
        </Container>
      </section>
    </>
  )
}
