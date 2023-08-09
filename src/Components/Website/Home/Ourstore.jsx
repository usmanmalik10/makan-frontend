import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import logo from "../../../images/sidelogo.png";
import Slider from "react-slick";
import Card from "react-bootstrap/Card";
import { data } from "./Storehomedata";
import { Link } from "react-router-dom";


export const Ourstore = () => {
  const settings = {
    dots: false,
    infinite: true,
    // speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 3000,

    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          // dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };
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
            
              <h1 className="home_store_heading">Our Store's</h1>
              
            
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
          <Col>
            <div>
              <Slider {...settings}>
                {data.map((post) => {
                  return (
                    <Card className="store-card">
                      <Card.Img
                        className="img"
                        variant="top"
                        src={post.image}
                      />
                      <Card.Body>
                        <Card.Title className="store-names">{post.storename}</Card.Title>
                        <Card.Text>
                          {/* <p>
                            <Link to="/link"> {post.see}</Link>
                          </p> */}
                        </Card.Text>
                      </Card.Body>
                    </Card>
                  );
                })}

              </Slider>
            </div>
          </Col>
        </Row>
        <Row></Row>
      </Container>
    </section>
  );
};
