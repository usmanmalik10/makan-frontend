import React, { useState, useEffect } from "react";
import { Col, Container, Row } from "react-bootstrap";
import Card from "react-bootstrap/Card";
import "./Estatealldata.scss";
import { useDispatch, useSelector } from "react-redux";
import { getservicebyuserid } from "../../../features/serviceprovider/serviceproviderSlice";
import Spinner2 from "../../Common/spinner2/spinner2";
import axios from "axios";
import { USERS_BASE_URL } from "../../constants/config/config.dev";
import { useFetchHomeForRentDataQuery, useFetchHomeForSaleDataQuery, useFetchPlotForRentDataQuery, useFetchPlotForSaleDataQuery } from "../../../Redux/RtkQuery/EstateAllData";

export const Esatatealldata = () => {
  const userId = localStorage.getItem('Userid');

  const {
    data: homeForRentData,
    isLoading: isHomeForRentLoading,
  } = useFetchHomeForRentDataQuery(userId);

  const {
    data: homeForSaleData,
    isLoading: isHomeForSaleLoading,
  } = useFetchHomeForSaleDataQuery(userId);

  const {
    data: plotForRentData,
    isLoading: isPlotForRentLoading,
  } = useFetchPlotForRentDataQuery(userId);

  const {
    data: plotForSaleData,
    isLoading: isPlotForSaleLoading,
  } = useFetchPlotForSaleDataQuery(userId);

  // Use the fetched data here

  useEffect(() => {
    // Do something when data changes, or use data directly
    console.log('Home for Rent Data:', homeForRentData);
    // console.log('Home for Sale Data:', homeForSaleData);
    // console.log('Plot for Rent Data:', plotForRentData);
    // console.log('Plot for Sale Data:', plotForSaleData);
  }, [homeForRentData, homeForSaleData, plotForRentData, plotForSaleData]);

  if ( isHomeForRentLoading ||  isHomeForSaleLoading || isPlotForRentLoading || isPlotForSaleLoading) {
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
            {homeForRentData.data.docs.length === 0 && <div>No House For Rent</div>}
          {homeForRentData.data.docs.map((houseData) => (
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
                    <Card.Text>
                      <div className="estate_lower_buttons">
                    <div className="est_lw_button">
                    <button type="submit" >Update</button>
                  </div>
                  <div className="est_lw_button">
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
      <section>
        <Container>
          <Row>
            <Col>
              <h2>Houses For Sale</h2>
            </Col>
          </Row>
          <Row>
          {homeForSaleData.data.docs.length === 0 && <div>No House For Sale</div>}

          {homeForSaleData.data.docs.map((houseData) => (
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
                  <Card.Text>
                      <div className="estate_lower_buttons">
                    <div className="est_lw_button">
                    <button type="submit" >Update</button>
                  </div>
                  <div className="est_lw_button">
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
      <section>
        <Container>
          <Row>
            <Col>
              <h2>Plots For Sale</h2>
            </Col>
          </Row>
          <Row>
          {plotForSaleData.data.docs.length === 0 && <div>No Plo For Rent</div>}

          {plotForSaleData.data.docs.map((houseData) => (
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
                  <Card.Text>
                      <div className="estate_lower_buttons">
                    <div className="est_lw_button">
                    <button type="submit" >Update</button>
                  </div>
                  <div className="est_lw_button">
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
      <section>
        <Container>
          <Row>
            <Col>
              <h2>Plots For Rent</h2>
            </Col>
          </Row>
          <Row>
          {plotForRentData.data.docs.length === 0 && <div>No Plots For Rent</div>}

          {plotForRentData.data.docs.map((houseData) => (
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
                  <Card.Text>
                      <div className="estate_lower_buttons">
                    <div className="est_lw_button">
                    <button type="submit" >Update</button>
                  </div>
                  <div className="est_lw_button">
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
    </div>
  );
};
