import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import logo from "../../../images/sidelogo.png";
import p1 from "../../../images/pj1.png";
import p2 from "../../../images/pj2.png";
import p3 from "../../../images/pj3.png";
import p4 from "../../../images/pj4.png";
import p5 from "../../../images/pj5.png";
import p6 from "../../../images/pj6.png";
import { Link } from "react-router-dom";
export const Completedprojects = () => {
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
            <div>
              <h1 className="home-allheadings">Completed Projects</h1>
            </div>
          </Col>
          <Col lg={2} md={2} sm={12}>
            <div className="viewall-div">
              <Link to="/" className="team-viewall">
                {" "}
                View All
              </Link>
            </div>
          </Col>
        </Row>

        <Row className="pt-5">
          <Col lg={4} md={6} sm={12}>
            <div>
              <img className="home-project-image" alt="im" src={p1} />
            </div>
          </Col>
          <Col lg={4} md={6} sm={12}>
            <div>
              <img className="home-project-image" alt="im" src={p2} />
            </div>
          </Col>
          <Col lg={4} md={6} sm={12}>
            <div>
              <img className="home-project-image" alt="im" src={p3} />
            </div>
          </Col>
        </Row>
        <div className="pt-4">
          <Row>
            <Col lg={4} md={6} sm={12}>
              <div>
                <img className="home-project-image" alt="im" src={p4} />
              </div>
            </Col>
            <Col lg={4} md={6} sm={12}>
              <div>
                <img className="home-project-image" alt="im" src={p5} />
              </div>
            </Col>
            <Col lg={4} md={6} sm={12}>
              <div>
                <img className="home-project-image" alt="im" src={p6} />
              </div>
            </Col>
          </Row>
        </div>
      </Container>
    </section>
  );
};
