import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import heroimg from "../../../images/abouthero.png";
import Video from "../../../images/companyvideo.mp4"
export const Aboutcomponent = () => {
  return (
    <div>
      <section>
        <Container fluid>
          <Row>
            <Col>
              {/* <img className="about-hero-img" src={heroimg} alt="hero" /> */}
              {/* <video>
                <source src={video} type="video/mp4" />
              </video> */}
              <video src={Video} autoPlay="true" />
            </Col>
          </Row>
        </Container>
      </section>
      <section className="aboutus-section">
        <Container>
          <Row>
            <Col>
              <p className="aboutus-paragraphs">
                Makan Manager Pvt Ltd is an IT based real-estate company,
                offering world-class online and offline solutions to all kind of
                real estate needs, operational since 2020, in Pakistan.
              </p>
              <p className="aboutus-paragraphs">
                Our core values submit to deliver transparency and ensure
                sublime service standards to our real estate clients and diverse
                range of stakeholders. We guarantee real time tracking and
                control on the project management, development, customer support
                and customer satisfaction. We aim to become a top virtual
                platform of real estate services & supplies, globally.
              </p>
              <p className="aboutus-paragraphs">
                We are a true believer of “Say What You Mean and Mean What You
                Say”, uncompromised delivery of commitments, keeping highest
                standards of POLITES, raising the bars of industry to an
                ultimate customer satisfaction and investment opportunities.
              </p>
            </Col>
          </Row>
          <Row>
            <Col>
              <h2>Vision</h2>
              <p className="aboutus-paragraphs">
                To be a world class premier digital platform for Real Estate
                services and supplies
              </p>
            </Col>
          </Row>
          <Row>
            <Col>
              <h2>Mission</h2>
              <p className="aboutus-paragraphs">
                To offer an elite, optimal and 360-degree real estate experience
                to customers, investors, builders and developers, through a
                state-of-the-art online solution
              </p>
            </Col>
          </Row>
        </Container>
      </section>
    </div>
  );
};