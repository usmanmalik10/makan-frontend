import React, { useState, useEffect } from "react";
import { Container, Row, Col } from 'react-bootstrap'
import Card from "react-bootstrap/Card";
import { useDispatch, useSelector } from "react-redux";
import Spinner2 from "../../Common/spinner2/spinner2";
import axios from "axios";
import { USERS_BASE_URL } from "../../constants/config/config.dev";
import "./Storeprof.scss"
import { useFetchStoresDataQuery } from "../../../Redux/RtkQuery/StoresDashboard";

export const Storesprof = () => {


  const token = localStorage.getItem('accessToken');
  const userId = localStorage.getItem('Userid');

  // Use the RTK Query hook to fetch stores data
  const { data , isLoading } = useFetchStoresDataQuery(userId);
 
  if (isLoading) {
    return <div>Loading...</div>; 
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
          {data.data.docs.length === 0 && <p>No Stores</p>}
        {data.data.docs.map((ad) => (
          <Col lg={4} md={4} sm={12} xs={12}>
            <Card key={ad._id} >
            <Card.Img   />
              <Card.Body>
                <Card.Text>
                  <p className="store_card_text">Shop Name : {ad.shopName}</p>
                  <p className="store_card_text">Address: {ad.address}</p>
                  <p className="store_card_text">Area of Service: {ad.areaOfService.join(", ")}</p>
                  <p className="store_card_text"> Contact Number: {ad.contectNumber}</p>
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
