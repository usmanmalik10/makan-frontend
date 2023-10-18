import React from 'react';
import Spinner2 from "../../../Common/spinner2/spinner2";

import { Card, Col, Container, Row } from 'react-bootstrap';

import img2 from "../../../../images/realestate2.png";
import { Link } from 'react-router-dom';
import "./Adminrealestate.scss";
import { useGetRealEstateUserDataQuery } from '../../../../Redux/RtkQuery/MainPageRealEstate';

const AdminRealEstateGeneralComponent = ({category  , subCategory , title}) => {
console.log({category , subCategory})
    const {
        data,
        error,
        isLoading,
      } = useGetRealEstateUserDataQuery({ category, subCategory , limit:12  });

      if (isLoading) {
        return <Spinner2 />;
      }
    
      if (error) {
        return <div>Error loading data</div>;
      }
  return (
    <Container>
    <Row>
    <Col>
      <div className="d-flex justify-content-between align-items-center">

        <h3 className="home_estate_all_heading my-4">{title}</h3>
      
      </div>
      </Col>
     
    </Row>

    <Row>
    {data.data.docs.length === 0  && <p>No Data</p>}

      {data.data.docs.map((houseData) => (
        <Col lg={4} md={4} sm={12} xs={12}>
        <Card key={houseData._id} className="home_estate_card">
               <Card.Img src={img2} alt="House Image" className="img" />
             {
                category === 'house' &&   <Card.Body>
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
             }
               {
                category === 'plot' && <Card.Body>
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
               }
             </Card>
        </Col>
      ))}
    </Row>
  </Container>
  )
}

export default AdminRealEstateGeneralComponent