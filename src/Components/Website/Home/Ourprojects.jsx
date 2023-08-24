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
          <Col lg={5} md={5} sm={4} xs={4}>
          <div className='side-img-div'><img className="store-sideimage" src={logo} alt="log" /></div>
          </Col>
          <Col lg={5} md={5} sm={4} xs={4}>
            <h1 className='our_project_home'>Our Projects</h1>
          </Col>
          <Col lg={2} md={2} sm={4} xs={4}>
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
                    <Card.Title className="society_name">{post.societyname}</Card.Title>
                    <Card.Text>
                      <p className="project_inner_text"> 
                      {post.marla}
                      </p>
                      <p className="project_inner_text">
                        {post.kanal}
                      </p>
                      <p className="project_inner_text">
                        {post.shops}
                      </p>
                      <p className="project_inner_text">
                        {post.detail}
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
