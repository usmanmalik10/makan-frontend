import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import Slider from "react-slick";
import slide1 from "../../../images/sslide1.png"
import slide2 from "../../../images/sslide2.png"
import slide3 from "../../../images/sslide3.png"

export const Serviceshero = () => {
    const settings = {
        className: "center",
        centerMode: true,
        infinite: true,
        centerPadding: "60px",
        slidesToShow: 1,
        speed: 500
      };
  return (
    <div>
        <Container fluid>
            <Row>
                <Col>
                
        <Slider {...settings}>
          <div>
                <img className='services-slider-images' src={slide1} alt="s1" />
          </div>
          <div>
          <img src={slide2} alt="s1" />
          </div>
          <div>
          <img src={slide3} alt="s1" />
          </div>
      
        </Slider>
                </Col>
            </Row>
        </Container>
    </div>
  )
}
