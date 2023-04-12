import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import logo from "../../../images/sidelogo.png";
import ceo from "../../../images/ceo.JPG";
import directorsale from "../../../images/directorsale.JPG";
import {FiPhone} from "react-icons/fi"
import { Link } from "react-router-dom";
export const Ourteam = () => {
  return (
    <section className="homepage-allsection">
      <Container>
        <Row>
          <Col lg={5} md={5} sm={12}>
            <div className="side-img-div">
              <img className="store-sideimage" src={logo} alt="log" />
            </div>
          </Col>
          <Col lg={5} md={5} sm={12}>
            <h1 className='home-allheadings'>Our Team</h1>
          </Col>
          <Col lg={2} md={2} sm={12}>
            <div className="viewall-div">
              <Link to="/" className="team-viewall"> View All</Link>
            </div>
          </Col>
        </Row>
        <Row className="pt-5">
          <Col lg={4} md={6} sm={12}>
            <div>
              <img className="team-home-image" alt="img" src={ceo} />
            </div>
          </Col>
          <Col lg={2} md={6} sm={12}>
            <div className="pt-5">
              <h6>Asim Ali Raza</h6>
              <p>Founder & Chief Executive Officer</p>
              <p><FiPhone /> +92312 6006006</p>
            </div>
          </Col>
          <Col lg={4} md={6} sm={12}>
            <div>
              <img className="team-home-image" alt="img" src={directorsale} />
            </div>
          </Col>
          <Col lg={2} md={6} sm={12}>
            <div className="pt-5">
              <h6>Amar Ali Raza</h6>
              <p>Director & Sales Head</p>
              <p><FiPhone /> +92322 7042009</p>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};
