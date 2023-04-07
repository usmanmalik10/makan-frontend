import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import logo from "../../../images/sidelogo.png";
import { Link } from "react-router-dom";
import mimage from "../../../images/mmhomes.jpg"

export const Mmhomes = () => {
  return (
    <div>
      <section className="homepage-allsection">
        <Container  className="homepage-allcontainers" >
          <Row >
            <Col lg={5} md={5} sm={12}>
              <div className="side-img-div">
                <img className="store-sideimage" src={logo} alt="log" />
              </div>
            </Col>
            <Col lg={5} md={5} sm={12}>
              <h1 className="home-allheadings">Makan Manager Project</h1>
            </Col>
            <Col lg={2} md={2} sm={12}>
            <div className="viewall-div">
              <Link to="/" className="team-viewall"> View All</Link>
            </div>
          </Col>
          </Row>
          <Row className="pt-5">
                <Col lg={8} md={8} sm={12}>
                    <div>
                        <img className="mm-image" src={mimage} alt="mimg" />
                    </div>
                </Col>
                <Col lg={4} md={4} sm={12}>
                    <h2 className="mm-heading">Makan Manager Homes</h2>
                    <p>Perfect place where your dreams comes true</p>

                    <Link to="/"> See all details</Link>
                </Col>
          </Row>
        </Container>
      </section>
    </div>
  );
};
