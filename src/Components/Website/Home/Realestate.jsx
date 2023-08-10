import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import logo from "../../../images/sidelogo.png";
import Card from "react-bootstrap/Card";
import { data } from "./Realesatehomedata";
import { Link } from "react-router-dom";
export const Realestate = () => {
  return (
    <section className="homepage-allsection">
      <Container>
        <Row>
          <Col lg={5} md={5} sm={4} xs={4}>
            <div className="side-img-div">
              <img className="store-sideimage" src={logo} alt="log" />
            </div>
          </Col>
          <Col lg={5} md={5} sm={4} xs={4}>
            <h1 className="real_home_heading">Real Estate</h1>
          </Col>
          <Col lg={2} md={2} sm={4} xs={4}>
            <div className="viewall-div">
              <Link to="/" className="team-viewall">
                {" "}
                View All
              </Link>
            </div>
          </Col>
        </Row>
        <Row className="pt-5">
          {data.map((post) => {
            return (
              <Col lg={4} md={4} sm={12}>
                <Card className="store-card">
                  <Card.Img className="img" variant="top" src={post.image} />
                  <Card.Body>
                    <Card.Title></Card.Title>
                    <Card.Text>
                      <p className="estate_ineer_text">
                      {post.houseno}
                      </p>
                      <p className="estate_ineer_text">
                        {post.location}
                      </p>
                      <p className="estate_ineer_text">
                        {post.size}
                      </p>
                      <p className="estate_ineer_text">
                        {post.selectbedrooms} 
                      </p>
                      <p className="estate_ineer_text">
                        {post.detail}
                      </p>
                      <p className="estate_ineer_text">
                        {post.price}
                      </p>
                      <p className="estate_ineer_text">
                        {post.contactnumber}
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
