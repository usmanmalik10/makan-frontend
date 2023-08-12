import React, { useState, useEffect } from "react";
import { Container, Row, Col } from 'react-bootstrap'
import Card from "react-bootstrap/Card";
import { useDispatch, useSelector } from "react-redux";
import Spinner2 from "../../Common/spinner2/spinner2";
import axios from "axios";
import { USERS_BASE_URL } from "../../constants/config/config.dev";

export const Storesprof = () => {


  const token = localStorage.getItem("accessToken");
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `${USERS_BASE_URL}/v1/shop/userId`,
          {
            params: {
              limit: 10,
              page: 1,
              sortBy: "createdAt:desc",
              userId: localStorage.getItem("Userid"),
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
    <>
    <section>
      <Container>
        <Row>
          <Col>
            <h1>All Add's</h1>
          </Col>
        </Row>
        <Row>
        {data.map((ad) => (
          <Col lg={4} md={4} sm={12} xs={12}>
            <Card key={ad._id} >
              <Card.Body>
                <Card.Title> Shop Name{ad.shopName}</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">{ad.productName}</Card.Subtitle>
                <Card.Text>Price: {ad.price}</Card.Text>
                <Card.Text>Address: {ad.address}</Card.Text>
                {ad.areaOfService && (
                  <Card.Text>Area of Service: {ad.areaOfService.join(", ")}</Card.Text>
                )}
                {ad.contectNumber && <Card.Text>Contact Number: {ad.contectNumber}</Card.Text>}
                {ad.companyName && <Card.Text>Company Name: {ad.companyName}</Card.Text>}
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
