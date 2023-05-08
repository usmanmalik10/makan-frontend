import React from "react";
import Slider from "react-slick";
import img1 from "../../../images/homehero1.jpg";
import img2 from "../../../images/homehero2.jpg";
import img3 from "../../../images/homehero3.jpg";
import { Container, Row, Col } from "react-bootstrap";

const Hero = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 3000,
  };
  return (
    <div>
      <Container fluid>
        <Row>
          <Col className="col-padding">
            <div>
              <Slider {...settings}>
                <div>
                  <img className="hero-image1" alt="her" src={img1} />
                  <div className="hero-text-div">
                      <h1 className="hero-text">Let’s start with your house</h1>
                      <h6 className="hero-text">If you are building a House, we are your key partners</h6>
                  </div>
                </div>
                <div>
                  <img className="hero-image1" alt="her" src={img2} />
                  <div className="hero-text-div">
                      <h1 className="hero-text">You Think we deliver</h1>
                      <h6 className="hero-text">You just think of a house, we will build it</h6>
                  </div>
                </div>
                <div>
                  <img className="hero-image1" alt="her" src={img3} />  <div className="hero-text-div">
                      <h1 className="hero-text">We Care for your House</h1>
                      <h6 className="hero-text">If you need an idea for your house, try us</h6>
                  </div>
                </div>
              </Slider>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Hero;
