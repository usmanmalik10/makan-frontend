import React, { useState, useEffect } from "react";
import './Adminrealestate.scss';
import { Container ,Row, Col } from 'react-bootstrap';
import Spinner2 from "../../../Common/spinner2/spinner2";
import axios from "axios";
import { USERS_BASE_URL } from "../../../constants/config/config.dev";
import Card from "react-bootstrap/Card";
import {realEstateData} from '../../../../lib/realEstateData'
import AdminRealEstateGeneralComponent from "./AdminRealEstateGeneralComponent";
export const Adminrealestate = () => {
   
  return (
<>
    <section className="admin_real_sec">
        {/* <Container>
            <Row>
                <Col>
                    <h3>House For Sale</h3>
                </Col>
            </Row>
            <Row>
          {homeforsaledata.map((houseData) => (
            <Col lg={4} md={4} sm={12} xs={12}>
              <Card key={houseData._id}  className="">
                <Card.Img src={houseData.images[0]} alt="House Image" />
                <Card.Body>
                  <Card.Text>
                    <p className="admin_real_card">House # : {houseData.address}</p>
                    <p className="admin_real_card">Location : {houseData.location}</p>
                    <p className="admin_real_card">Size : {houseData.size}</p>
                    <p className="admin_real_card">Bedrooms : {houseData.bedRooms}</p>
                    <p className="admin_real_card">Detail : {houseData.details.story}</p>
                    <p className="admin_real_card">Price : Rs/ {houseData.price}</p>
                    <p className="admin_real_card">Contact Number : {houseData.contectNumber} </p>
                  </Card.Text>
                  <Card.Text>
                      <div className="admin_estate_lower_buttons">
                    <div className="admin_est_lw_button">
                    <button type="submit" >Disable</button>
                  </div>
                  <div className="admin_est_lw_button">
                    <button type="submit" >Delete</button>
                  </div>
                  </div>
                    </Card.Text>
                </Card.Body>
              </Card>
            </Col>
             ))}
          </Row>
        </Container>
        <Container>
            <Row>
                <Col>
                    <h3>House For Rent</h3>
                </Col>
            </Row>
            <Row>
          {homeforrentdata.map((houseData) => (
            <Col lg={4} md={4} sm={12} xs={12}>
             
                <Card key={houseData._id} className="">
                  <Card.Img src={houseData.images[0]} alt="House Image" />
                  <Card.Body>
                    <Card.Text>
                      <p className="admin_real_card">
                        House # : {houseData.address}
                      </p>
                      <p className="admin_real_card">
                        Location : {houseData.location}
                      </p>
                      <p className="admin_real_card">Size : {houseData.size}</p>
                      <p className="admin_real_card">
                        Bedrooms : {houseData.bedRooms}
                      </p>
                      <p className="admin_real_card">
                        Detail : {houseData.details.story}
                      </p>
                      <p className="admin_real_card">
                        Rent : Rs/ {houseData.price}
                      </p>
                      <p className="admin_real_card">
                        Contact Number : {houseData.contectNumber}
                      </p>
                    </Card.Text>
                    <Card.Text>
                      <div className="admin_estate_lower_buttons">
                    <div className="admin_est_lw_button">
                    <button type="submit" >Disable</button>
                  </div>
                  <div className="admin_est_lw_button">
                    <button type="submit" >Delete</button>
                  </div>
                  </div>
                    </Card.Text>
                  </Card.Body>
                </Card>
              
            </Col>
            ))}
          </Row>
        </Container>
        <Container>
            <Row>
                <Col>
                    <h3>Plot For Sale</h3>
                </Col>
            </Row>
            <Row>
          {plotforsaledata.map((houseData) => (
            <Col lg={4} md={4} sm={12} xs={12}>
              <Card key={houseData._id}  className="">
                <Card.Img src={houseData.images[0]} alt="House Image"/>
                <Card.Body>
                  <Card.Text>
                    <p className="admin_real_card">Plot # : {houseData.address}</p>
                    <p className="admin_real_card">Location : {houseData.location}</p>
                    <p className="admin_real_card">Size : {houseData.size}</p>
                    <p className="admin_real_card">Price : Rs/ {houseData.price}</p>
                    <p className="admin_real_card">Contact Number : {houseData.contectNumber} </p>
                  </Card.Text>
                  <Card.Text>
                      <div className="admin_estate_lower_buttons">
                    <div className="admin_est_lw_button">
                    <button type="submit" >Disable</button>
                  </div>
                  <div className="admin_est_lw_button">
                    <button type="submit" >Delete</button>
                  </div>
                  </div>
                    </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            ))}
          </Row>
        </Container>
        <Container>
            <Row>
                <Col>
                    <h3>Plot For Rent</h3>
                </Col>
            </Row>
            <Row>
          {plotforrentdata.map((houseData) => (
            <Col lg={4} md={4} sm={12} xs={12}>
              <Card key={houseData._id}  className="">
                <Card.Img src={houseData.images[0]} alt="House Image" />
                <Card.Body>
                  <Card.Text>
                    <p className="admin_real_card">Plot # : {houseData.address}</p>
                    <p className="admin_real_card">Location : {houseData.location}</p>
                    <p className="admin_real_card">Size : {houseData.size}</p>
                    <p className="admin_real_card">Rent : Rs/ {houseData.price}</p>
                    <p className="admin_real_card">Contact Number : {houseData.contectNumber}</p>
                  </Card.Text>
                  <Card.Text>
                      <div className="admin_estate_lower_buttons">
                    <div className="admin_est_lw_button">
                    <button type="submit" >Disable</button>
                  </div>
                  <div className="admin_est_lw_button">
                    <button type="submit" >Delete</button>
                  </div>
                  </div>
                    </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            ))}
          </Row>
        </Container> */}

        {
          realEstateData.map((data)=><AdminRealEstateGeneralComponent category={data.category} subCategory={data.subCategory} title={data.title}></AdminRealEstateGeneralComponent>)
          
        }
    </section>
</>
  )
}
