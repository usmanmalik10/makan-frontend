import React, { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import logo from "../../../images/sidelogo.png";
import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";
import Spinner2 from "../../Common/spinner2/spinner2";
import axios from "axios";
import { USERS_BASE_URL } from "../../constants/config/config.dev";
import img1 from "../../../images/realestate1.png"
import img2 from "../../../images/realestate2.png"


export const Realestate = () => {

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
          `${USERS_BASE_URL}/v1/real-estate`,
          {
            params: {
              limit: 1,
              page: 1,
              sortBy: "createdAt:desc",
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
        const response = await axios.get(`${USERS_BASE_URL}/v1/real-estate`, {
          params: {
            limit: 1,
            page: 1,
            sortBy: "createdAt:desc",
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
        const response = await axios.get(`${USERS_BASE_URL}/v1/real-estate`, {
          params: {
            limit: 1,
            page: 1,
            sortBy: "createdAt:desc",
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
        const response = await axios.get(`${USERS_BASE_URL}/v1/real-estate`, {
          params: {
            limit: 1,
            page: 1,
            sortBy: "createdAt:desc",
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
    <section className="homepage-allsection">
      <Container>
        <Row>
          <Col lg={5} md={5} sm={4} xs={4}>
            <div className="side-img-div">
              <img className="store-sideimage" src={logo} alt="log" />
            </div>
          </Col>
          <Col lg={5} md={5} sm={4} xs={4}>
            <h1 className="real_home_heading">Real Estate</h1>
          </Col>
          <Col lg={2} md={2} sm={4} xs={4}>
            <div className="viewall-div">
              <Link to="/" className="team-viewall">
                {" "}
                View All
              </Link>
            </div>
          </Col>
        </Row>
     
        <Row>
          <Col lg={3} md={3} sm={12} xs={12}>
          <Row>
          {homeforrentdata.map((houseData) => (
            
             
                <Card key={houseData._id} className="estate-card">
                  <Card.Img src={img1} alt="House Image" />
                  <Card.Body>
                    <Card.Text>
                      <p className="estate_ineer_text">
                        House # : {houseData.address}
                      </p>
                      <p className="estate_ineer_text">
                        Location : {houseData.location}
                      </p>
                      <p className="estate_ineer_text">Size : {houseData.size}</p>
                      <p className="estate_ineer_text">
                        Bedrooms : {houseData.bedRooms}
                      </p>
                      <p className="estate_ineer_text">
                        Detail : {houseData.details.story}
                      </p>
                      <p className="estate_ineer_text">
                        Rent : Rs/ {houseData.price}
                      </p>
                      <p className="estate_ineer_text">
                        Contact Number : {houseData.contectNumber}
                      </p>
                    </Card.Text>
                  </Card.Body>
                </Card>
              
          
            ))}
          </Row>
          </Col>
          <Col lg={3} md={3} sm={12} xs={12}>
          <Row>
          {homeforsaledata.map((houseData) => (
            
              <Card key={houseData._id}  className="estate-card">
                <Card.Img src={img2} alt="House Image" />
                <Card.Body>
                  <Card.Text>
                    <p className="estate_ineer_text">House # : {houseData.address}</p>
                    <p className="estate_ineer_text">Location : {houseData.location}</p>
                    <p className="estate_ineer_text">Size : {houseData.size}</p>
                    <p className="estate_ineer_text">Bedrooms : {houseData.bedRooms}</p>
                    <p className="estate_ineer_text">Detail : {houseData.details.story}</p>
                    <p className="estate_ineer_text">Price : Rs/ {houseData.price}</p>
                    <p className="estate_ineer_text">Contact Number : {houseData.contectNumber} </p>
                  </Card.Text>
                </Card.Body>
              </Card>
            
             ))}
          </Row>
          </Col>
          <Col lg={3} md={3} sm={12} xs={12}>
          <Row>
          {plotforsaledata.map((houseData) => (
            
              <Card key={houseData._id}  className="estate-card">
                <Card.Img src={img1} alt="House Image"/>
                <Card.Body>
                  <Card.Text>
                    <p className="estate_ineer_text">Plot # : {houseData.address}</p>
                    <p className="estate_ineer_text">Location : {houseData.location}</p>
                    <p className="estate_ineer_text">Size : {houseData.size}</p>
                    <p className="estate_ineer_text">Price : Rs/ {houseData.price}</p>
                    <p className="estate_ineer_text">Contact Number : {houseData.contectNumber} </p>
                  </Card.Text>
                </Card.Body>
              </Card>
            
            ))}
          </Row>
          </Col>
          <Col lg={3} md={3} sm={12} xs={12}>
          <Row>
          {plotforrentdata.map((houseData) => (
            
              <Card key={houseData._id}  className="estate-card">
                <Card.Img src={img2} alt="House Image" />
                <Card.Body>
                  <Card.Text>
                    <p className="estate_ineer_text">Plot # : {houseData.address}</p>
                    <p className="estate_ineer_text">Location : {houseData.location}</p>
                    <p className="estate_ineer_text">Size : {houseData.size}</p>
                    <p className="estate_ineer_text">Rent : Rs/ {houseData.price}</p>
                    <p className="estate_ineer_text">Contact Number : {houseData.contectNumber}</p>
                  </Card.Text>
                </Card.Body>
              </Card>
            
            ))}
          </Row>
          </Col>
        </Row>
      </Container>
    </section>
  );
};
