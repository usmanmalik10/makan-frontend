import React, { useState, useEffect } from "react";
import { Col, Container, Row } from 'react-bootstrap'
import { Card } from 'react-bootstrap'
import Spinner2 from "../../../Common/spinner2/spinner2";
import axios from "axios";
import { USERS_BASE_URL } from "../../../constants/config/config.dev";
import service_image from "../../../../Assets/Services-Screen/Group 46137.png";

export const Adminglasscuttingandpolishs = () => {
  const token = localStorage.getItem("accessToken");
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `${USERS_BASE_URL}/v1/service`,
          {
            params: {
              limit: 12,
              page: 1,
              sortBy: "createdAt:desc",
              category: "glasscuttingpolish",
            },
            headers: {
              authorization: `Bearer ${token}`,
            },
          }
        );
        setData(response.data?.data?.docs);
        setIsLoading(false);
      } catch (error) {
        console.error("Error fetching data:", error);
        setIsLoading(false);
        // Handle the error here, such as displaying an error message
      }
    };

    fetchData();
  }, [token]);

  if (isLoading) {
    return <Spinner2 />;
  }

  return (
    <div>
    <Container>
      <Row>
        <Col>
          <h1 className="service_all_main_headings">Glass Cutting & Polish</h1>
        </Col>
      
      </Row>
     
      <Row>
          {data.map((serviceProvider) => (
            <Col lg={4} md={4} sm={12} xs={12}>
              <Card key={serviceProvider._id} className="services_card">
                <Card.Img src={service_image} alt="service image" />
                <Card.Body>
                  <Card.Text>
                    {/* <p className="service_profile_inner">
                      Category :{" "}
                      <span className="card_inner_text">
                        {serviceProvider.category}
                      </span>
                    </p> */}
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
  </div>
  )
}