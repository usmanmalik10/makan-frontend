import React, { useState, useEffect } from "react";
import { Col, Container, Row } from "react-bootstrap";
import img from "../../../images/sslide2.png";
import sidelogo from "../../../images/sidelogo.png";
import { Card } from "react-bootstrap";
import "./Realestate.scss";
import Spinner2 from "../../Common/spinner2/spinner2";
import axios from "axios";
import { USERS_BASE_URL } from "../../constants/config/config.dev";
import img1 from "../../../images/realestate1.png";
import img2 from "../../../images/realestate2.png";
import { useGetRealEstateDataQuery } from "../../../Redux/RtkQuery/MainPageRealEstate";

export const Realestatehero = () => {
  const {
    data: houseRentData,
    error: homeForRentError,
    isLoading: isHomeForRentLoading,
  } = useGetRealEstateDataQuery({ category: 'house', subCategory: 'rent' });

  const {
    data: houseSaleData,

    error: homeForSaleError,
    isLoading: isHomeForSaleLoading,
  } = useGetRealEstateDataQuery({ category: 'house', subCategory: 'sale' });

  const {
    data: plotRentData,

    error: plotForRentError,
    isLoading: isPlotForRentLoading,
  } = useGetRealEstateDataQuery({ category: 'plot', subCategory: 'rent' });

  const {
    data: plotSaleData,

    error: plotForSaleError,
    isLoading: isPlotForSaleLoading,
  } = useGetRealEstateDataQuery({ category: 'plot', subCategory: 'sale' });

  // Add loading and error handling logic here
  const isLoading = isHomeForRentLoading || isHomeForSaleLoading || isPlotForRentLoading || isPlotForSaleLoading;
  const error = homeForRentError || homeForSaleError || plotForRentError || plotForSaleError;

  
  if (isLoading) {
    return <Spinner2 />;
  }

  if (error) {
    return <div>Error loading data</div>;
  }

  return (
    <div>
     <section className="real_estate_sec">
        <Container fluid>
          <Row>
            <Col>
              <img className="estate_hero_img" src={img} alt="im" />
            </Col>
          </Row>
        </Container>
        <Container>
          <Row>
            <Col>
              <div className="team-heading-div">
                <img className="side-logo" src={sidelogo} alt="sd" />{" "}
                <strong className="team-heading">Real Estate</strong>
              </div>
            </Col>
          </Row>
          <Row>
            <Col>
              <h1 className="home_estate_all_heading">House For Rent</h1>
            </Col>
          </Row>

          <Row>
            {houseRentData.data.docs.length === 0  && <p>No Data</p>}
            {houseRentData.data.docs.map((houseData) => (
              <Col lg={4} md={4} sm={12} xs={12}>
                <Card key={houseData._id} className="home_estate_card">
                  <Card.Img src={img1} alt="House Image" className="img" />
                  <Card.Body>
                    <Card.Text>
                      <p className="estate_rent">
                        House # : {houseData.address}
                      </p>
                      <p className="estate_rent">
                        Location : {houseData.location}
                      </p>
                      <p className="estate_rent">Size : {houseData.size}</p>
                      <p className="estate_rent">
                        Bedrooms : {houseData.bedRooms}
                      </p>
                      <p className="estate_rent">
                        Detail : {houseData.details.story}
                      </p>
                      <p className="estate_rent">
                        Rent : Rs/ {houseData.price}
                      </p>
                      <p className="estate_rent">
                        Contact Number : {houseData.contectNumber}
                      </p>
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </Container>
        <Container>
          <Row>
            <Col>
              <h1 className="home_estate_all_heading">House For Sale</h1>
            </Col>
          </Row>

          <Row>
          {houseSaleData.data.docs.length === 0  && <p>No Data</p>}

            {houseSaleData.data.docs.map((houseData) => (
              <Col lg={4} md={4} sm={12} xs={12}>
                <Card key={houseData._id} className="home_estate_card">
                  <Card.Img src={img2} alt="House Image" className="img" />
                  <Card.Body>
                    <Card.Text>
                      <p className="estate_rent">
                        House # : {houseData.address}
                      </p>
                      <p className="estate_rent">
                        Location : {houseData.location}
                      </p>
                      <p className="estate_rent">Size : {houseData.size}</p>
                      <p className="estate_rent">
                        Bedrooms : {houseData.bedRooms}
                      </p>
                      <p className="estate_rent">
                        Detail : {houseData.details.story}
                      </p>
                      <p className="estate_rent">
                        Price : Rs/ {houseData.price}
                      </p>
                      <p className="estate_rent">
                        Contact Number : {houseData.contectNumber}{" "}
                      </p>
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </Container>
        <Container>
          <Row>
            <Col>
              <h1 className="home_estate_all_heading">Plots For Sale</h1>
            </Col>
          </Row>
          <Row>
          {plotSaleData.data.docs.length === 0  && <p>No Data</p>}

            {plotSaleData.data.docs.map((houseData) => (
              <Col lg={4} md={4} sm={12} xs={12}>
                <Card key={houseData._id} className="home_estate_card">
                  <Card.Img src={img1} alt="House Image" className="img" />
                  <Card.Body>
                    <Card.Text>
                      <p className="estate_rent">
                        Plot # : {houseData.address}
                      </p>
                      <p className="estate_rent">
                        Location : {houseData.location}
                      </p>
                      <p className="estate_rent">Size : {houseData.size}</p>
                      <p className="estate_rent">
                        Price : Rs/ {houseData.price}
                      </p>
                      <p className="estate_rent">
                        Contact Number : {houseData.contectNumber}{" "}
                      </p>
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </Container>
        <Container>
          <Row>
            <Col>
              <h1 className="home_estate_all_heading">Plots For Rent</h1>
            </Col>
          </Row>
          <Row>
          {plotRentData.data.docs.length === 0  && <p>No Data</p>}

            {plotRentData.data.docs.map((houseData) => (
              <Col lg={4} md={4} sm={12} xs={12}>
                <Card key={houseData._id} className="home_estate_card">
                  <Card.Img src={img2} alt="House Image" className="img" />
                  <Card.Body>
                    <Card.Text>
                      <p className="estate_rent">
                        Plot # : {houseData.address}
                      </p>
                      <p className="estate_rent">
                        Location : {houseData.location}
                      </p>
                      <p className="estate_rent">Size : {houseData.size}</p>
                      <p className="estate_rent">
                        Rent : Rs/ {houseData.price}
                      </p>
                      <p className="estate_rent">
                        Contact Number : {houseData.contectNumber}
                      </p>
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </Container>
      </section> 
    </div>
  );
};
