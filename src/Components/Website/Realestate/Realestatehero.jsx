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
import { Link } from "react-router-dom";
import { realEstateData } from "../../../lib/realEstateData";
import RealEstateGeneralComponent from "./RealEstateGeneralComponent";

export const Realestatehero = () => {
  // const {
  //   data: houseRentData,
  //   error: homeForRentError,
  //   isLoading: isHomeForRentLoading,
  // } = useGetRealEstateDataQuery({ category: 'house', subCategory: 'rent' , limit:6 });

  // const {
  //   data: houseSaleData,

  //   error: homeForSaleError,
  //   isLoading: isHomeForSaleLoading,
  // } = useGetRealEstateDataQuery({ category: 'house', subCategory: 'sale' , limit:6 });

  // const {
  //   data: plotRentData,

  //   error: plotForRentError,
  //   isLoading: isPlotForRentLoading,
  // } = useGetRealEstateDataQuery({ category: 'plot', subCategory: 'rent' , limit:6 });

  // const {
  //   data: plotSaleData,

  //   error: plotForSaleError,
  //   isLoading: isPlotForSaleLoading,
  // } = useGetRealEstateDataQuery({ category: 'plot', subCategory: 'sale' , limit:6 });

  // // Add loading and error handling logic here
  // const isLoading = isHomeForRentLoading || isHomeForSaleLoading || isPlotForRentLoading || isPlotForSaleLoading;
  // const error = homeForRentError || homeForSaleError || plotForRentError || plotForSaleError;

  
  // if (isLoading) {
  //   return <Spinner2 />;
  // }

  // if (error) {
  //   return <div>Error loading data</div>;
  // }

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
  
         
        </Container>
        {
          realEstateData.map((data)=><RealEstateGeneralComponent title={data.title} category={data.category} subCategory={data.subCategory}></RealEstateGeneralComponent>)
        }
      
      </section> 
    </div>
  );
};
