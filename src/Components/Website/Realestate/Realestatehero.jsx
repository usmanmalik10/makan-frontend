import React, { useState, useEffect } from "react";
import { Col, Container, Row } from "react-bootstrap";
import img from "../../../images/sslide2.png";
import sidelogo from "../../../images/sidelogo.png";
import { Card } from "react-bootstrap";
import "./Realestate.scss";
import Spinner2 from "../../Common/spinner2/spinner2";
import axios from "axios";
import { USERS_BASE_URL } from "../../constants/config/config.dev";
import img1 from "../../../images/realestate1.png";
import img2 from "../../../images/realestate2.png";

export const Realestatehero = () => {
  const token = localStorage.getItem("accessToken");
  const [data, setData] = useState([]);
  const [homeforrentdata, sethomeforrentData] = useState([]);
  const [homeforsaledata, sethomeforsaleData] = useState([]);
  const [plotforrentdata, setplotforrentData] = useState([]);
  const [plotforsaledata, setplotforsaleData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchDatahomeforrent = async () => {
      try {
        const response = await axios.get(`${USERS_BASE_URL}/v1/real-estate`, {
          params: {
            limit: 3,
            page: 1,
            sortBy: "createdAt:desc",
            category: "house",
            subCategory: "rent",
          },
          headers: {
            authorization: `Bearer ${token}`,
          },
        });
        sethomeforrentData(response.data?.data?.docs);
        setIsLoading(false);
      } catch (error) {
        console.error("Error fetching data:", error);
        setIsLoading(false);
        // Handle the error here, such as displaying an error message
      }
    };

    console.log({ homeforrentdata });
    fetchDatahomeforrent();

    const fetchDatahomeforsale = async () => {
      try {
        const response = await axios.get(`${USERS_BASE_URL}/v1/real-estate`, {
          params: {
            limit: 3,
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
            limit: 3,
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
            limit: 3,
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
    <div>
      <section className="real_estate_sec">
        <Container fluid>
          <Row>
            <Col>
              <img className="estate_hero_img" src={img} alt="im" />
            </Col>
          </Row>
        </Container>
        <Container>
          <Row>
            <Col>
              <div className="team-heading-div">
                <img className="side-logo" src={sidelogo} alt="sd" />{" "}
                <strong className="team-heading">Real Estate</strong>
              </div>
            </Col>
          </Row>
          <Row>
            <Col>
              <h1 className="home_estate_all_heading">House For Rent</h1>
            </Col>
          </Row>

          <Row>
            {homeforrentdata.map((houseData) => (
              <Col lg={4} md={4} sm={12} xs={12}>
                <Card key={houseData._id} className="home_estate_card">
                  <Card.Img src={img1} alt="House Image" className="img" />
                  <Card.Body>
                    <Card.Text>
                      <p className="estate_rent">
                        House # : {houseData.address}
                      </p>
                      <p className="estate_rent">
                        Location : {houseData.location}
                      </p>
                      <p className="estate_rent">Size : {houseData.size}</p>
                      <p className="estate_rent">
                        Bedrooms : {houseData.bedRooms}
                      </p>
                      <p className="estate_rent">
                        Detail : {houseData.details.story}
                      </p>
                      <p className="estate_rent">
                        Rent : Rs/ {houseData.price}
                      </p>
                      <p className="estate_rent">
                        Contact Number : {houseData.contectNumber}
                      </p>
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
              <h1 className="home_estate_all_heading">House For Sale</h1>
            </Col>
          </Row>

          <Row>
            {homeforsaledata.map((houseData) => (
              <Col lg={4} md={4} sm={12} xs={12}>
                <Card key={houseData._id} className="home_estate_card">
                  <Card.Img src={img2} alt="House Image" className="img" />
                  <Card.Body>
                    <Card.Text>
                      <p className="estate_rent">
                        House # : {houseData.address}
                      </p>
                      <p className="estate_rent">
                        Location : {houseData.location}
                      </p>
                      <p className="estate_rent">Size : {houseData.size}</p>
                      <p className="estate_rent">
                        Bedrooms : {houseData.bedRooms}
                      </p>
                      <p className="estate_rent">
                        Detail : {houseData.details.story}
                      </p>
                      <p className="estate_rent">
                        Price : Rs/ {houseData.price}
                      </p>
                      <p className="estate_rent">
                        Contact Number : {houseData.contectNumber}{" "}
                      </p>
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
              <h1 className="home_estate_all_heading">Plots For Sale</h1>
            </Col>
          </Row>
          <Row>
            {plotforsaledata.map((houseData) => (
              <Col lg={4} md={4} sm={12} xs={12}>
                <Card key={houseData._id} className="home_estate_card">
                  <Card.Img src={img1} alt="House Image" className="img" />
                  <Card.Body>
                    <Card.Text>
                      <p className="estate_rent">
                        Plot # : {houseData.address}
                      </p>
                      <p className="estate_rent">
                        Location : {houseData.location}
                      </p>
                      <p className="estate_rent">Size : {houseData.size}</p>
                      <p className="estate_rent">
                        Price : Rs/ {houseData.price}
                      </p>
                      <p className="estate_rent">
                        Contact Number : {houseData.contectNumber}{" "}
                      </p>
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
              <h1 className="home_estate_all_heading">Plots For Rent</h1>
            </Col>
          </Row>
          <Row>
            {plotforrentdata.map((houseData) => (
              <Col lg={4} md={4} sm={12} xs={12}>
                <Card key={houseData._id} className="home_estate_card">
                  <Card.Img src={img2} alt="House Image" className="img" />
                  <Card.Body>
                    <Card.Text>
                      <p className="estate_rent">
                        Plot # : {houseData.address}
                      </p>
                      <p className="estate_rent">
                        Location : {houseData.location}
                      </p>
                      <p className="estate_rent">Size : {houseData.size}</p>
                      <p className="estate_rent">
                        Rent : Rs/ {houseData.price}
                      </p>
                      <p className="estate_rent">
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
    </div>
  );
};
