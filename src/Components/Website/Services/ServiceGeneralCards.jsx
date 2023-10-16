import React, { useState, useEffect } from "react";
import { Col, Container, Row } from 'react-bootstrap';
import { Card } from 'react-bootstrap';
import "./serviceall.css";
import { Link } from 'react-router-dom';
import Spinner2 from "../../Common/spinner2/spinner2";
import service_image from "../../../Assets/Services-Screen/Group 46137.png";
import { useGetServicesDataQuery } from "../../../Redux/RtkQuery/MainPageService";

export const ServiceGeneralCardsComponent = ( {category , title }) => {


  const { data, error, isLoading } = useGetServicesDataQuery({
    category,
  });

  if (isLoading) {
    return <Spinner2 />;
  }

  if (error) {
    return <div>Error loading {title} data</div>;
  }

  return (
    <>
      <section>

        <Container>
            <Row>
                <Col>
                    <h1 className="service_all_main_headings">
                        {title}
                    </h1>
                </Col>
                <Col>
                <div className='service_all_see_div'>
                <Link to={`/service/${category}`} className='service_all_see'>see all</Link>
                </div>
                </Col>
            </Row>
        

<Row>
  {data.data.docs.length === 0 && <p className="ml-4">No {title} Ads</p>}
            {data.data.docs.map((serviceProvider) => (
              <Col lg={4} md={4} sm={12} xs={12}>
                <Card key={serviceProvider._id} className="services_card">
                  <Card.Img src={service_image} alt="service image" />
                  <Card.Body>
                    <Card.Text>
                      <p className="service_all_data">
                        Contractor Name :{" "}
                        <span className="card_inner_text">
                          {serviceProvider.contractorName}{" "}
                        </span>
                      </p>
                      <p className="service_all_data">
                        Conact Number :{" "}
                        <span className="card_inner_text">
                          {serviceProvider.contectNumber}
                        </span>
                      </p>
                      <p className="service_all_data">
                        Address :{" "}
                        <span className="card_inner_text">
                          {serviceProvider.address}{" "}
                        </span>
                      </p>
                      <p className="service_all_data">
                        Area of Service :{" "}
                        <span className="card_inner_text">
                          {serviceProvider.areaOfService.join(", ")}{" "}
                        </span>
                      </p>
                      <p className="service_all_data">
                        Charging Schedule :{" "}
                        <span className="card_inner_text">
                          {serviceProvider.chargingSchedule}
                        </span>{" "}
                      </p>
                      <p className="service_all_data">
                        Labor Rate : Rs/{" "}
                        <span className="card_inner_text">
                          {serviceProvider.laborRates}
                        </span>
                      </p>
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </Container>
        </section>
    </>
  )
}
