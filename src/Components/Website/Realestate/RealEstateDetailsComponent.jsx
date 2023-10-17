import React from "react";
import { Col, Container, Row } from 'react-bootstrap'
import { Card } from 'react-bootstrap'
import { useParams } from 'react-router-dom';
import { realEstateData } from "../../../lib/realEstateData";
import { useGetRealEstateDataQuery } from "../../../Redux/RtkQuery/MainPageRealEstate";
import Spinner2 from "../../Common/spinner2/spinner2";
import Header from "../Header/Header";
import img2 from "../../../images/realestate2.png";
import Footer from "../Footer/Footer";
import "./Realestate.scss";


export const RealEstateDetailsGeneralComponent = () => {
    const {category , subCategory} = useParams();
    const title  =  realEstateData.find((data)=>data.category === category).title;
    const { data, error, isLoading } = useGetRealEstateDataQuery({
        category,
        subCategory,
        limit :  12 ,
      });
    
      if (isLoading) {
        return <Spinner2 />;
      }
    
      if (error) {
        return <div>Error loading  data</div>;
      }
    
  
  
  return (
    <div>
        <Header />
    <Container className="mb-4 mt-4">
      <Row>
        <Col>
          <h1 className="service_all_main_headings">{title}</h1>
        </Col>
      
      </Row>
     
      <Row>
        {data.data.docs.length === 0 && <p className="ml-4">No  Data to Show</p>}
          {data.data.docs.map((houseData) => (
             <Col lg={4} md={4} sm={12} xs={12}>
             <Card key={houseData._id} className="home_estate_card">
               <Card.Img src={img2} alt="House Image" className="img" />
             {
                category === 'house' &&   <Card.Body>
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
             }
               {
                category === 'plot' && <Card.Body>
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
               }
             </Card>
           </Col>
          ))}
        </Row>
    </Container>
    <Footer />
  </div>
  )
}
