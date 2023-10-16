import React, { useState, useEffect } from "react";
import { Container, Row, Col } from 'react-bootstrap'
import Card from "react-bootstrap/Card";
import { useDispatch, useSelector } from "react-redux";
import Spinner2 from "../../Common/spinner2/spinner2";
import axios from "axios";
import { USERS_BASE_URL } from "../../constants/config/config.dev";
import { useGetShopsDataQuery } from "../../../Redux/RtkQuery/MainPageStore";

export const Boringstore = () => {
  const { data: boringMaterialData, error: boringMaterialError, isLoading: isBoringMaterialLoading } = useGetShopsDataQuery({
    category: 'boringmaterial',
  });
    if (isBoringMaterialLoading) {
      return <Spinner2 />;
    }
  
  return (
    <>
        <section>
            <Container>
                <Row>
                    <Col>
                        <h3>Boring Material Stores</h3>
                    </Col>
                </Row>
                <Row>
        {boringMaterialData.data.docs.map((ad) => (
          <Col lg={4} md={4} sm={12} xs={12}>
            <Card key={ad._id} className="wstores-card">
            <Card.Img   />
              <Card.Body>
              <Card.Text>
                  <p className="wstores_card_text">Shop Name : {ad.shopName}</p>
                  <p className="wstores_card_text">Address: {ad.address}</p>
                  <p className="wstores_card_text">Area of Service: {ad.areaOfService.join(", ")}</p>
                  <p className="wstores_card_text"> Contact Number: {ad.contectNumber}</p>

                  {/* <p className="active_card_text"> Product Name : {ad.productName}</p>
                  <p className="active_card_text">Price: {ad.price}</p>
                  <p className="active_card_text">Company Name: {ad.companyName}</p>
                  <p className="active_card_text">Details Key1: {ad.details.key1}</p>
                  <p className="active_card_text">Details Key2: {ad.details.key2}</p>
                  <p className="active_card_text">Details Key3: {ad.details.key3}</p> */}
                  
                  
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
