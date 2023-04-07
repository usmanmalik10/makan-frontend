import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import logo from "../../../images/sidelogo.png";
import Card from 'react-bootstrap/Card';
import {data} from "./Projecthomedata"
import { Link } from "react-router-dom";
export const Ourprojects = () => {
  return (
    <section className="homepage-allsection">
      <Container className="homepage-allcontainers">
        <Row>
          <Col lg={5} md={5} sm={12}>
          <div className='side-img-div'><img className="store-sideimage" src={logo} alt="log" /></div>
          </Col>
          <Col lg={5} md={5} sm={12}>
            <h1 className='home-allheadings'>Our Projects</h1>
          </Col>
          <Col lg={2} md={2} sm={12}>
            <div className="viewall-div">
              <Link to="/" className="team-viewall"> View All</Link>
            </div>
          </Col>
        </Row>
        <Row className="pt-5">
          {data.map((post) => {
            return (
              <Col lg={4} md={4} sm={12}>
                <Card className="store-card">
                  <Card.Img className="project-cardimg" variant="top" src={post.image} />
                  <Card.Body>
                    <Card.Title>{post.societyname}</Card.Title>
                    <Card.Text>
                      <p>
                        <b>{post.marla}</b>
                      </p>
                      <p>
                        <b>{post.kanal}</b>
                      </p>
                      <p>
                        <b>{post.detail}</b>
                      </p>
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Col>
            );
          })}
        </Row>
      </Container>
    </section>
  );
};
