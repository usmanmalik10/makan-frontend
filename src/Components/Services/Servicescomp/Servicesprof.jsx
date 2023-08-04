import React, { useState, useEffect } from "react";
import "./Servicesprof.scss";
import service_image from "../../../Assets/Services-Screen/Group 46137.png";
import { Container, Row, Col } from "react-bootstrap";
import Spinner2 from "../../Common/spinner2/spinner2";
import axios from "axios";
import { USERS_BASE_URL } from "../../constants/config/config.dev";

export const Servicesprof = () => {

  const token = localStorage.getItem("accessToken");
  // console.log('checktoken', token)

  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

   useEffect(() => {
    // Define your API endpoint URL
    const apiUrl = `${USERS_BASE_URL}/v1/service`;

    // Define query parameters
    const queryParams = {
      limit: 10,
      page: 1,
      sortBy: "createdAt:desc",
      category: "marble",
    };

    // Make the API call using axios
    axios
      .get(apiUrl, {
        params: queryParams,
        headers: {
          authorization: `Bearer ${token}`,
        },
      })
      .then((response) => {
        setData(response.data?.data?.docs);
        setIsLoading(false);
        const limit = response.data?.data?.limit;
      console.log("limit",limit);
      localStorage.setItem('limit', limit);
      const page = response.data?.data?.page;
      console.log("page",page);
      localStorage.setItem('page', page);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
        setIsLoading(false);
      });
  }, []);

  if (isLoading) {
    return <Spinner2 />;
  }
  console.log("data:", data);
  return (
    <>
      <div className="Service_section">
        <div className="service_deatil">
          <Container>
            {data.map((serviceProvider) => (
              <div key={serviceProvider._id}>
                   <Row>
                <Col>
                <img src={service_image} className="service_image" alt="service image" />
                </Col>
              </Row>
              <Row className="pt-3">
                <Col lg={6} md={6} sm={12}>
                  <div>
                    <label className="business-labels">
                      <span className="business-label-headings">Selected Category :</span>
                    </label>
                    <br />
                    <div className="des">{serviceProvider.category}</div>
                  </div>
                </Col>
                <Col lg={6} md={6} sm={12}>
                  <div>
                    <label className="business-labels">
                      <span className="business-label-headings">Contractor Name:</span>
                    </label>
                    <br />
                    <div className="des">{serviceProvider.contractorName}</div>
                  </div>
                </Col>
              </Row>
              <Row className="pt-3">
                <Col lg={6} md={6} sm={12}>
                  <div>
                    <label className="business-labels">
                      <span className="business-label-headings">Contact Number :</span>
                    </label>
                    <br />
                    <div className="des">{serviceProvider.contectNumber}</div>
                  </div>
                </Col>
                <Col lg={6} md={6} sm={12}>
                  <div>
                    <label className="business-labels">
                      <span className="business-label-headings">Address :{" "}</span>
                    </label>
                    <br />
                    <div className="des">{serviceProvider.address}</div>
                  </div>
                </Col>
              </Row>
              <Row className="pt-3">
                <Col lg={6} md={6} sm={12}>
                  <div>
                    <label className="business-labels">
                      <span className="business-label-headings">Area of Services :</span>
                    </label>
                    <br />
                    <div className="des">{serviceProvider.areaOfService.join(", ")}</div>
                  </div>
                </Col>
                <Col lg={6} md={6} sm={12}>
                  <div>
                    <label className="business-labels">
                      <span className="business-label-headings">Charging Schedule :</span>
                    </label>
                    <br />
                    <div className="des">{serviceProvider.chargingSchedule}</div>
                  </div>
                </Col>
              </Row>
              <Row className="pt-3">
                <Col lg={6} md={6} sm={12}>
                  <div>
                    <label className="business-labels">
                      <span className="business-label-headings">Labor Rate :</span>
                    </label>{" "}
                    <br />
                    <div className="des">{serviceProvider.laborRates}</div>
                  </div>
                </Col>
              </Row>
              </div>))}
          </Container>
        </div>
      </div>
    </>
  );
};
