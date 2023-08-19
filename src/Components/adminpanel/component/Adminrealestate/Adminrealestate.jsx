import React, { useState, useEffect } from "react";
import './Adminrealestate.scss';
import { Container ,Row, Col } from 'react-bootstrap';
import Spinner2 from "../../../Common/spinner2/spinner2";
import axios from "axios";
import { USERS_BASE_URL } from "../../../constants/config/config.dev";
import Card from "react-bootstrap/Card";

export const Adminrealestate = () => {
    const token = localStorage.getItem("accessToken");
    const [data, setData] = useState([]);
    const [homeforrentdata, sethomeforrentData] =useState([]);
    const [homeforsaledata, sethomeforsaleData] =useState([]);
    const [plotforrentdata, setplotforrentData] =useState([]);
    const [plotforsaledata, setplotforsaleData] =useState([]);
    const [isLoading, setIsLoading] = useState(true);
  
    useEffect(() => {
      const fetchDatahomeforrent = async () => {
        try {
          const response = await axios.get(
            `${USERS_BASE_URL}/v1/real-estate/userId`,
            {
              params: {
                limit: 10,
                page: 1,
                sortBy: "createdAt:desc",
                userId: localStorage.getItem("Userid"),
                category: "house",
                subCategory: "rent",
              },
              headers: {
                authorization: `Bearer ${token}`,
              },
            }
          );
          sethomeforrentData(response.data?.data?.docs);
          setIsLoading(false);
        } catch (error) {
          console.error("Error fetching data:", error);
          setIsLoading(false);
          // Handle the error here, such as displaying an error message
        }
      };
  
      console.log({homeforrentdata})
      fetchDatahomeforrent();
  
      const fetchDatahomeforsale = async () => {
        try {
          const response = await axios.get(`${USERS_BASE_URL}/v1/real-estate/userId`, {
            params: {
              limit: 10,
              page: 1,
              sortBy: "createdAt:desc",
              userId: localStorage.getItem("Userid"),
              category: "house",
              subCategory: "sale",
            },
            headers: {
              authorization: `Bearer ${token}`,
            },
          });
          sethomeforsaleData(response.data?.data?.docs);
          setIsLoading(false);
        } catch (error) {
          console.error("Error fetching data:", error);
          setIsLoading(false);
          // Handle the error here, such as displaying an error message
        }
      };
    
      fetchDatahomeforsale();
    
      const fetchDataplotforrent = async () => {
        try {
          const response = await axios.get(`${USERS_BASE_URL}/v1/real-estate/userId`, {
            params: {
              limit: 10,
              page: 1,
              sortBy: "createdAt:desc",
              userId: localStorage.getItem("Userid"),
              category: "plot",
              subCategory: "rent",
            },
            headers: {
              authorization: `Bearer ${token}`,
            },
          });
          setplotforrentData(response.data?.data?.docs);
          setIsLoading(false);
        } catch (error) {
          console.error("Error fetching data:", error);
          setIsLoading(false);
          // Handle the error here, such as displaying an error message
        }
      };
    
      fetchDataplotforrent();
    
    
      const fetchDataplotforsale = async () => {
        try {
          const response = await axios.get(`${USERS_BASE_URL}/v1/real-estate/userId`, {
            params: {
              limit: 10,
              page: 1,
              sortBy: "createdAt:desc",
              userId: localStorage.getItem("Userid"),
              category: "plot",
              subCategory: "sale",
            },
            headers: {
              authorization: `Bearer ${token}`,
            },
          });
          setplotforsaleData(response.data?.data?.docs);
          setIsLoading(false);
        } catch (error) {
          console.error("Error fetching data:", error);
          setIsLoading(false);
          // Handle the error here, such as displaying an error message
        }
      };
    
      fetchDataplotforsale();
    
    }, [token]);
  
    if (isLoading) {
      return <Spinner2 />;
    }

  return (
<>
    <section className="admin_real_sec">
        <Container>
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
        </Container>
    </section>
</>
  )
}
