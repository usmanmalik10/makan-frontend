import React, { useState, useEffect } from "react";
import { Container, Row, Col } from 'react-bootstrap'
import Card from "react-bootstrap/Card";
import { useDispatch, useSelector } from "react-redux";
import Spinner2 from "../../Common/spinner2/spinner2";
import axios from "axios";
import { USERS_BASE_URL } from "../../constants/config/config.dev";
import { useGetShopsDataQuery } from "../../../Redux/RtkQuery/MainPageStore";

export const Marblestore = () => {

  const {
    data,
    error: shopError,
    isLoading,
  } = useGetShopsDataQuery({
    category: 'marbleandtilestore',
  });


  if (isLoading) {
    return <Spinner2 />;
  }

  if (shopError) {
    return <div>Error loading data</div>;
  }
  return (
    <>
        <section>
            <Container>
                <Row>
                    <Col>
                        <h3>Marble & Tiles Stores</h3>
                    </Col>
                </Row>
                 <Row>
                  {
                    data.data.docs.length === 0  && <p>No Data</p>
                  }
        {data.data.docs.map((ad) => (
          <Col lg={4} md={4} sm={12} xs={12}>
            <Card key={ad._id} >
            <Card.Img   />
              <Card.Body>
              <Card.Text>
                  <p className="active_card_text">Shop Name : {ad.shopName}</p>
                 
                  <p className="active_card_text">Address: {ad.address}</p>
                  <p className="active_card_text">Area of Service: {ad.areaOfService.join(", ")}</p>
                  <p className="active_card_text"> Contact Number: {ad.contectNumber}</p>
                
                  
                  
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
