import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import img from "../../../images/abouthero.png";
import { Link } from "react-router-dom";

export const Contact = () => {
  return (
    <div>
      <section>
        <Container fluid>
          <Row>
            <Col className="col-padding">
              <img className="contact-hero-img" src={img} alt="i" />
            </Col>
          </Row>
        </Container>
      </section>
      <section className="contactus-section">
        <Container>
          <Row className="pt-5">
            <Col lg={6} md={6} sm={12}>
              <div>
                <h2 className="message-heading">Leave us a message</h2>
              </div>
              <div>
                <input className="contactus-input" type="text" placeholder="Name" required  />
              </div>
              <div>
                <input className="contactus-input" type="text" placeholder="Email" />
              </div>
              <div>
                <textarea className="contact-messagearea" placeholder="Message" />
              </div>
              <div className="message-button-div">
                <Link to="/" className="contactus-button"> Send Message</Link>
              </div>
            </Col>
            <Col lg={6} md={6} sm={12}>
              <div>
                <h2>Contact Us</h2>
                <p>For any query or complaint, please feel free to contact us; <br/>
                Location: 	23-C First Floor, Fateh Sher Road, Sahiwal <br/>
                Phone:		+92 3 111 444 666 <br/>
                Email Address:	info@makanmanager.com
                </p>
              </div>
            </Col>
          </Row>
          <Row>
            <Col>
              <div></div>
            </Col>
          </Row>
        </Container>
      </section>
    </div>
  );
};
