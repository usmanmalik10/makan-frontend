import React, { useState, useEffect } from "react";
import "./Servicesprof.scss";
import service_image from "../../../Assets/Services-Screen/Group 46137.png";
import { Container, Row, Col } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { getservicebyuserid } from "../../../features/serviceprovider/serviceproviderSlice";
import Spinner2 from "../../Common/spinner2/spinner2";
import axios from "axios";
import { USERS_BASE_URL } from "../../constants/config/config.dev";
import Card from "react-bootstrap/Card";

export const Servicesprof = () => {
  const token = localStorage.getItem("accessToken");
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`${USERS_BASE_URL}/v1/service/userId`, {
          params: {
            limit: 10,
            page: 1,
            sortBy: "createdAt:desc",
            userId: localStorage.getItem("Userid"),
          },
          headers: {
            authorization: `Bearer ${token}`,
          },
        });
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
    <div className="Service_section">
      <div className="service_deatil">
        <Container>
         
              {/* <Row>
                <Col>
                  <img src={service_image} className="service_image" alt="service image" />
                </Col>
              </Row>
              <Row className="pt-3">
                <Col lg={6} md={6} sm={12}>
                  <div>
                    <label className="business-labels">
                      <span className="business-label-headings">Selected Category:</span>
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
                      <span className="business-label-headings">Contact Number:</span>
                    </label>
                    <br />
                    <div className="des">{serviceProvider.contectNumber}</div>
                  </div>
                </Col>
                <Col lg={6} md={6} sm={12}>
                  <div>
                    <label className="business-labels">
                      <span className="business-label-headings">Address:</span>
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
                      <span className="business-label-headings">Area of Services:</span>
                    </label>
                    <br />
                    <div className="des">{serviceProvider.areaOfService.join(", ")}</div>
                  </div>
                </Col>
                <Col lg={6} md={6} sm={12}>
                  <div>
                    <label className="business-labels">
                      <span className="business-label-headings">Charging Schedule:</span>
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
                      <span className="business-label-headings">Labor Rate:</span>
                    </label>{" "}
                    <br />
                    <div className="des">{serviceProvider.laborRates}</div>
                  </div>
                </Col>
              </Row> */}
              <Row>
                <Col>
                  <h1 className="service_allads_heading">All Add's</h1>
                </Col>
              </Row>
              <Row className="pt-3">
              {data.map((serviceProvider) => (
            <div key={serviceProvider._id}>
                <Col lg={4} md={4} sm={12} xs={12}>
                
              <Card className='service_card'>
                  <Card.Img src={service_image} alt="service image"  />
                  <Card.Body>
                    
                    <Card.Text>
                      <p className='service_profile_inner'>Category : <span className="card_inner_text">{serviceProvider.category}</span></p>
                      <p className='service_profile_inner'>Contractor Name : <span className="card_inner_text">{serviceProvider.contractorName} </span></p>
                      <p className='service_profile_inner'>Conact Number : <span className="card_inner_text">{serviceProvider.contectNumber}</span></p>
                      <p className='service_profile_inner'>Address : <span className="card_inner_text">{serviceProvider.address} </span></p>
                      <p className='service_profile_inner'>Area of Service : <span className="card_inner_text">{serviceProvider.areaOfService.join(", ")} </span></p>
                      <p className='service_profile_inner'>Charging Schedule : <span className="card_inner_text">{serviceProvider.chargingSchedule}</span> </p>
                      <p className='service_profile_inner'>Labor Rate : Rs/ <span className="card_inner_text">{serviceProvider.laborRates}</span></p>
                      
                    </Card.Text>
                  </Card.Body>
                </Card>
                  </Col>
                  </div>

))}
              </Row>
        
        </Container>
      </div>
    </div>
  );
};
