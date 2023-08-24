import React, { useState, useEffect } from "react";
import { Container, Row, Col } from 'react-bootstrap'
import Card from "react-bootstrap/Card";
import { useDispatch, useSelector } from "react-redux";
import Spinner2 from "../../Common/spinner2/spinner2";
import axios from "axios";
import { USERS_BASE_URL } from "../../constants/config/config.dev";
import "./Storeprof.scss"

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
    <section className="store_profile_sec">
      <Container>
        <Row>
          <Col>
            <h1 className="prof_all_head">All Add's</h1>
          </Col>
        </Row>
        <Row>
        {data.map((ad) => (
          <Col lg={4} md={4} sm={12} xs={12}>
            <Card key={ad._id} >
            <Card.Img   />
              <Card.Body>
                <Card.Text>
                  <p className="store_card_text">Shop Name : {ad.shopName}</p>
                  <p className="store_card_text"> Product Name : {ad.productName}</p>
                  <p className="store_card_text">Price: {ad.price}</p>
                  <p className="store_card_text">Address: {ad.address}</p>
                  <p className="store_card_text">Area of Service: {ad.areaOfService.join(", ")}</p>
                  <p className="store_card_text"> Contact Number: {ad.contectNumber}</p>
                  <p className="store_card_text">Company Name: {ad.companyName}</p>
                </Card.Text>
                <Card.Text>
                      <div className="store_lower_buttons">
                    <div className="store_update_button">
                    <button type="submit" >Update</button>
                  </div>
                  <div className="store_update_button">
                    <button type="submit" >Delete</button>
                  </div>
                  </div>
                    </Card.Text>
                {/* <Card.Title> </Card.Title>
                <Card.Subtitle className="mb-2 text-muted"></Card.Subtitle>
                <Card.Text> </Card.Text>
                <Card.Text></Card.Text>
                {ad.areaOfService && (
                  <Card.Text></Card.Text>
                )}
                {ad.contectNumber && <Card.Text></Card.Text>}
                {ad.companyName && <Card.Text></Card.Text>} */}
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
