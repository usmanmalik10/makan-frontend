import React, { useState, useEffect } from "react";
import "./Servicesprof.scss";
import service_image from "../../../Assets/Services-Screen/Group 46137.png";
import { Container, Row, Col, Pagination } from "react-bootstrap";
import axios from "axios";
import { USERS_BASE_URL } from "../../constants/config/config.dev";
import Card from "react-bootstrap/Card";

export const Servicesprof = () => {
  const token = localStorage.getItem("accessToken");
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const itemsPerPage = 10; // Number of items per page
  console.log("Total Pages:", totalPages);
  console.log("Current Page:", currentPage);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `${USERS_BASE_URL}/v1/service/userId`,
          {
            params: {
              limit: itemsPerPage,
              page: currentPage,
              sortBy: "createdAt:desc",
              userId: localStorage.getItem("Userid"),
            },
            headers: {
              authorization: `Bearer ${token}`,
            },
          }
        );
  
        const responseData = response.data?.data;
  
        if (!responseData) {
          console.error("No data in the response:", response);
          setIsLoading(false);
          return;
        }
  
        const totalItems = responseData.total;
        const totalPages = Math.max(Math.ceil(totalItems / itemsPerPage), 1);
        setTotalPages(totalPages);
        setData(responseData.docs);
        setIsLoading(false);
      } catch (error) {
        console.error("Error fetching data:", error);
        setIsLoading(false);
        // Handle the error here, such as displaying an error message
      }
    };
  
    fetchData();
  }, [token, currentPage]);
  

  const handlePageChange = (newPage) => {
    setCurrentPage(newPage);
  };

  if (isLoading) {
    return <div>Loading...</div>; // Replace with your loading indicator
  }

  return (
    <div className="Service_section">
      <div className="service_deatil">
        <Container>
          <Row>
            <Col>
              <h1 className="service_allads_heading">All Add's</h1>
            </Col>
          </Row>
          <Row className="pt-3">
            {data.map((serviceProvider) => (
              <Col lg={4} md={4} sm={12} xs={12} key={serviceProvider._id}>
                <Card className="service_card">
                  <Card.Img src={service_image} alt="service image" />
                  <Card.Body>
                    <Card.Text>
                      <p className="service_profile_inner">
                        Category :{" "}
                        <span className="card_inner_text">
                          {serviceProvider.category}
                        </span>
                      </p>
                      <p className="service_profile_inner">
                        Contractor Name :{" "}
                        <span>{serviceProvider.contractorName}</span>
                      </p>
                      <p className="service_profile_inner">
                        Conact Number :{" "}
                        <span>{serviceProvider.contectNumber}</span>
                      </p>
                      <p className="service_profile_inner">
                        Address : <span>{serviceProvider.address}</span>
                      </p>
                      <p className="service_profile_inner">
                        Area of Service :{" "}
                        <span>{serviceProvider.areaOfService.join(", ")}</span>
                      </p>
                      <p className="service_profile_inner">
                        Charging Schedule :{" "}
                        <span>{serviceProvider.chargingSchedule}</span>{" "}
                      </p>
                      <p className="service_profile_inner">
                        Labor Rate : Rs/{" "}
                        <span>{serviceProvider.laborRates}</span>{" "}
                      </p>
                    
                    </Card.Text>
                    <Card.Text>
                      <div className="card_lower_buttons">
                        <div className="update_button">
                          <button type="submit">Update</button>
                        </div>
                        <div className="update_button">
                          <button type="submit">Delete</button>
                        </div>
                      </div>
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
          <Row className="pt-3">
            <Col>
              <Pagination>
                <Pagination.First
                  onClick={() => handlePageChange(1)}
                  disabled={currentPage === 1}
                />
                <Pagination.Prev
                  onClick={() => handlePageChange(currentPage - 1)}
                  disabled={currentPage === 1}
                />

                {Array.from({ length: totalPages }, (_, index) => (
                  <Pagination.Item
                    key={index}
                    active={index + 1 === currentPage}
                    onClick={() => handlePageChange(index + 1)}
                  >
                    {index + 1}
                  </Pagination.Item>
                ))}

                <Pagination.Next
                  onClick={() => handlePageChange(currentPage + 1)}
                  disabled={currentPage === totalPages}
                />
                <Pagination.Last
                  onClick={() => handlePageChange(totalPages)}
                  disabled={currentPage === totalPages}
                />
              </Pagination>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
};
