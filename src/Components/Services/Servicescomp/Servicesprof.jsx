import React, { useState, useEffect } from "react";
import "./Servicesprof.scss";
import service_image from "../../../Assets/Services-Screen/Group 46137.png";
import { Container, Row, Col, Pagination } from "react-bootstrap";
import axios from "axios";
import { USERS_BASE_URL } from "../../constants/config/config.dev";
import Card from "react-bootstrap/Card";
import { useFetchServicesDataQuery } from "../../../Redux/RtkQuery/ServiceDashboard";
import { Link } from "react-router-dom";
import { selectCurrentUser } from "../../../Redux/Slices/authSlice";
import { useSelector } from "react-redux";

export const Servicesprof = () => {
  const user = useSelector(selectCurrentUser)
  const service = user.service;

 
    return (
      <>
      <section className="store_profile_sec">
      {service.active ==="true" ? <Container>
        <Row className="mb-4">
          <Col>
            {/* Banner Image */}
            <div className="banner-image" style={{ backgroundImage: `url(${user.shop.shopImage })` }}>
              {/* You can add styles for this div in SCSS */}
            </div>
          </Col>
        </Row>
        <Row>
          <Col>
            {/* Store Information */}
            <Card>
              <Card.Body>
                <Card.Title>{user.username}</Card.Title>
                <Card.Text>
                  <strong>Email:</strong> {user.email}
                </Card.Text>
                <Card.Text>
                  <strong>Address:</strong> {user.address}
                </Card.Text>
            
              </Card.Body>
            </Card>
            
          </Col>
     
        </Row>
      </Container> : <Container>
        <Row>
        <Card>
              <Card.Body>
                <Card.Title>{user.username}</Card.Title>
                <Card.Text>
                  <strong>Email:</strong> {user.email}
                </Card.Text>
               <Link to='/new-add-services'>
               <button className="estate-button">
  Activate
               </button>
               </Link>
              </Card.Body>
            </Card>
        </Row>
      </Container>  }
      </section>
      </>
    )
  }
  