import React, { useState, useEffect } from "react";
import { Container, Row, Col } from 'react-bootstrap'
import Card from "react-bootstrap/Card";
import { useDispatch, useSelector } from "react-redux";
import Spinner2 from "../../../Common/spinner2/spinner2";
import axios from "axios";
import { USERS_BASE_URL } from "../../../constants/config/config.dev";

export const Adminaluminumstores = () => {

  const token = localStorage.getItem("accessToken");
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `${USERS_BASE_URL}/v1/shop`,
          {
            params: {
              limit: 12,
              page: 1,
              sortBy: "createdAt:desc",
              category: "aluminumstore"
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
    <section className="active_sec">
      <Container>
        <Row>
          <Col>
            <h1 className="active_head">Active Add's</h1>
          </Col>
        </Row>
        <Row>
        {data.map((ad) => (
          <Col lg={4} md={4} sm={12} xs={12}>
            <Card key={ad._id} >
            <Card.Img   />
              <Card.Body>
              <Card.Text>
                  <p className="active_card_text">Shop Name : {ad.shopName}</p>
                  <p className="active_card_text"> Product Name : {ad.productName}</p>
                  <p className="active_card_text">Price: {ad.price}</p>
                  <p className="active_card_text">Address: {ad.address}</p>
                  <p className="active_card_text">Area of Service: {ad.areaOfService.join(", ")}</p>
                  <p className="active_card_text"> Contact Number: {ad.contectNumber}</p>
                  <p className="active_card_text">Company Name: {ad.companyName}</p>
                  <p className="active_card_text">Details Key1: {ad.details.key1}</p>
                      <p className="active_card_text">Details Key2: {ad.details.key2}</p>
                      <p className="active_card_text">Details Key3: {ad.details.key3}</p>
                  
                  
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