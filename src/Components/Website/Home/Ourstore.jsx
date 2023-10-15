import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import logo from "../../../images/sidelogo.png";
import Slider from "react-slick";
import Card from "react-bootstrap/Card";
import { data } from "./Storehomedata";
import { Link } from "react-router-dom";
import pic1 from "../../../images/ironstore.png"
import pic2 from "../../../images/brickstore.png"
import pic3 from "../../../images/tilestore.png"
import pic4 from "../../../images/paintstore.png"
import pic5 from "../../../images/ironstore.png"


export const Ourstore = () => {
  // const settings = {
  //   dots: false,
  //   infinite: true,
  //   // speed: 500,
  //   slidesToShow: 3,
  //   slidesToScroll: 1,
  //   autoplay: true,
  //   speed: 2000,
  //   autoplaySpeed: 3000,
  //   // className: "center",
  //   // centerMode: true, 
  //   // centerPadding: "60px",

  //   responsive: [
  //     {
  //       breakpoint: 1024,
  //       settings: {
  //         slidesToShow: 3,
  //         slidesToScroll: 3,
  //         infinite: true,
  //         // dots: true
  //       }
  //     },
  //     {
  //       breakpoint: 600,
  //       settings: {
  //         slidesToShow: 1,
  //         slidesToScroll: 1,
  //         initialSlide: 1
  //       }
  //     },
  //     {
  //       breakpoint: 480,
  //       settings: {
  //         slidesToShow: 1,
  //         slidesToScroll: 1
  //       }
  //     }
  //   ]
  
  // };
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    centerMode: true,
centerPadding: '20%',
  };
  return (
    <section className="home-store-section">
      <Container fluid className="stores-container">
        <Row>
          <Col lg={5} md={5} sm={4} xs={4}>
            <div className="side-img-div">
              <img className="store-sideimage" src={logo} alt="log" />
            </div>
          </Col>
          <Col lg={5} md={5} sm={4} xs={4}>
            
              <h1 className="home_store_heading">Stores</h1>
              
            
          </Col>
          <Col lg={2} md={2} sm={4} xs={4}>
            <div className="viewall-div">
              <Link to="/all-stores" className="team-viewall">
                {" "}
                View All
              </Link>
            </div>
          </Col>
        </Row>
        {/* <Row className="pt-5">
          <Col>
            <div>
              <Slider {...settings}>
                {data.map((post) => {
                  return (
                    <Card className="store-card">
                      <Card.Img
                        className="home-store-img"
                        variant="top"
                        src={post.image}
                      />
                      <Card.Body>
                        <Card.Title className="store-names">{post.storename}</Card.Title>
                        <Card.Text>
                        
                        </Card.Text>
                      </Card.Body>
                    </Card>
                  );
                })}
              </Slider>
            </div>
             
          </Col>
        </Row> */}
        <Row className="pt-5">
          <Col>
          <Slider {...settings}>
          <div className="sliderContent">
            <img src={pic1} alt="" className="slickSlider1Bandi" />
            <h3 className="home-store-labels">Iron Stores</h3>
          </div>
          <div className="sliderContent">
          <img src={pic2} alt="" className="slickSlider1Bandi" />
          <h3 className="home-store-labels">Brick Stores</h3>
          </div>
          <div className="sliderContent">
          <img src={pic3} alt="" className="slickSlider1Bandi" />
          <h3 className="home-store-labels">Marble & Tile Stores</h3>
          </div>
          <div className="sliderContent">
          <img src={pic4} alt="" className="slickSlider1Bandi" />
          <h3 className="home-store-labels">Paint Stores</h3>
          </div>
          <div className="sliderContent">
          <img src={pic5} alt="" className="slickSlider1Bandi" />
          <h3 className="home-store-labels">Wood Stores</h3>
          </div>
        
        </Slider>
          </Col>
        </Row>
        
      </Container>
    </section>
  );
};
