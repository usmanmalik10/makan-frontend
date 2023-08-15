import React, { useState, useEffect } from "react";
import { Col, Container, Row } from "react-bootstrap";
import Card from "react-bootstrap/Card";
import "./Estatealldata.scss";
import { useDispatch, useSelector } from "react-redux";
import { getservicebyuserid } from "../../../features/serviceprovider/serviceproviderSlice";
import Spinner2 from "../../Common/spinner2/spinner2";
import axios from "axios";
import { USERS_BASE_URL } from "../../constants/config/config.dev";

export const Esatatealldata = () => {
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
    <div className="estate_all_section">
      <section>
        <Container>
          <Row>
            <Col>
              <h2>Houses For Rent</h2>
            </Col>
          </Row>
          <Row>
          {homeforrentdata.map((houseData) => (
            <Col lg={4} md={4} sm={12} xs={12}>
             
                <Card key={houseData._id} className="">
                  <Card.Img src={houseData.images[0]} alt="House Image" />
                  <Card.Body>
                    <Card.Text>
                      <p className="all_house_rent">
                        House # : {houseData.address}
                      </p>
                      <p className="all_house_rent">
                        Location : {houseData.location}
                      </p>
                      <p className="all_house_rent">Size : {houseData.size}</p>
                      <p className="all_house_rent">
                        Bedrooms : {houseData.bedRooms}
                      </p>
                      <p className="all_house_rent">
                        Detail : {houseData.details.story}
                      </p>
                      <p className="all_house_rent">
                        Rent : Rs/ {houseData.price}
                      </p>
                      <p className="all_house_rent">
                        Contact Number : {houseData.contectNumber}
                      </p>
                    </Card.Text>
                  </Card.Body>
                </Card>
              
            </Col>
            ))}
          </Row>
        </Container>
      </section>
      <section>
        <Container>
          <Row>
            <Col>
              <h2>Houses For Sale</h2>
            </Col>
          </Row>
          <Row>
          {homeforsaledata.map((houseData) => (
            <Col lg={4} md={4} sm={12} xs={12}>
              <Card key={houseData._id}  className="">
                <Card.Img src={houseData.images[0]} alt="House Image" />
                <Card.Body>
                  <Card.Text>
                    <p className="all_house_sale">House # : {houseData.address}</p>
                    <p className="all_house_sale">Location : {houseData.location}</p>
                    <p className="all_house_sale">Size : {houseData.size}</p>
                    <p className="all_house_sale">Bedrooms : {houseData.bedRooms}</p>
                    <p className="all_house_sale">Detail : {houseData.details.story}</p>
                    <p className="all_house_sale">Price : Rs/ {houseData.price}</p>
                    <p className="all_house_sale">Contact Number : {houseData.contectNumber} </p>
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
             ))}
          </Row>
        </Container>
      </section>
      <section>
        <Container>
          <Row>
            <Col>
              <h2>Plots For Sale</h2>
            </Col>
          </Row>
          <Row>
          {plotforsaledata.map((houseData) => (
            <Col lg={4} md={4} sm={12} xs={12}>
              <Card key={houseData._id}  className="">
                <Card.Img src={houseData.images[0]} alt="House Image"/>
                <Card.Body>
                  <Card.Text>
                    <p className="all_plot_sale">Plot # : {houseData.address}</p>
                    <p className="all_plot_sale">Location : {houseData.location}</p>
                    <p className="all_plot_sale">Size : {houseData.size}</p>
                    <p className="all_plot_sale">Price : Rs/ {houseData.price}</p>
                    <p className="all_plot_sale">Contact Number : {houseData.contectNumber} </p>
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            ))}
          </Row>
        </Container>
      </section>
      <section>
        <Container>
          <Row>
            <Col>
              <h2>Plots For Rent</h2>
            </Col>
          </Row>
          <Row>
          {plotforrentdata.map((houseData) => (
            <Col lg={4} md={4} sm={12} xs={12}>
              <Card key={houseData._id}  className="">
                <Card.Img src={houseData.images[0]} alt="House Image" />
                <Card.Body>
                  <Card.Text>
                    <p className="all_plot_rent">Plot # : {houseData.address}</p>
                    <p className="all_plot_rent">Location : {houseData.location}</p>
                    <p className="all_plot_rent">Size : {houseData.size}</p>
                    <p className="all_plot_rent">Rent : Rs/ {houseData.price}</p>
                    <p className="all_plot_rent">Contact Number : {houseData.contectNumber}</p>
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            ))}
          </Row>
        </Container>
      </section>
    </div>
  );
};
