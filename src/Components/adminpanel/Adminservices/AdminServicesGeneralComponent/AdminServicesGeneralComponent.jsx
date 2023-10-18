import React from "react";
import { Col, Container, Row } from 'react-bootstrap'
import { Card } from 'react-bootstrap'
import { useParams } from 'react-router-dom';
import Spinner2 from "../../../Common/spinner2/spinner2";
import service_image from "../../../../Assets/Services-Screen/Group 46137.png";
import { services } from "../../../../lib/servicesData";
import { useGetServicesDataQuery } from "../../../../Redux/RtkQuery/MainPageService";
import { Grid } from "@mui/material";
import AdminNavbar from '../../AdminNavbar/Navbar';

export const AdminServiceDetailsGeneralComponent = () => {
    const { category} = useParams();
    const title  =  services.find((service)=>service.category === category).title;
    const { data, error, isLoading } = useGetServicesDataQuery({
        category,
        limit :  12 ,
      });
    
      if (isLoading) {
        return <Spinner2 />;
      }
    
      if (error) {
        return <div>Error loading {title} data</div>;
      }
    
  
  
  return (
    <div className='main-wrapper'>
    <Grid container>
                  <Grid item xs={12} sm={12} md={3} lg={2.7}>
                    <AdminNavbar />
                  </Grid>
                  <Grid
                    item
                    xs={12}
                    sm={12}
                    md={9}
                    lg={9.3}
                    className="right-panel-wrapper"
                  >
                     <div>
    <Container>
      <Row>
        <Col>
          <h1 className="service_all_main_headings">{title}</h1>
        </Col>
      
      </Row>
     
      <Row>
        {data.data.docs.length === 0 && <p className="ml-4">No {title} Data to Show</p>}
          {data.data.docs.map((serviceProvider) => (
            <Col lg={4} md={4} sm={12} xs={12}>
              <Card key={serviceProvider._id} className="services_card">
                <Card.Img src={service_image} alt="service image" />
                <Card.Body>
                  <Card.Text>
                    {/* <p className="service_profile_inner">
                      Category :{" "}
                      <span className="card_inner_text">
                        {serviceProvider.category}
                      </span>
                    </p> */}
                    <p className="service_all_data">
                      Contractor Name :{" "}
                      <span className="card_inner_text">
                        {serviceProvider.contractorName}{" "}
                      </span>
                    </p>
                    <p className="service_all_data">
                      Conact Number :{" "}
                      <span className="card_inner_text">
                        {serviceProvider.contectNumber}
                      </span>
                    </p>
                    <p className="service_all_data">
                      Address :{" "}
                      <span className="card_inner_text">
                        {serviceProvider.address}{" "}
                      </span>
                    </p>
                    <p className="service_all_data">
                      Area of Service :{" "}
                      <span className="card_inner_text">
                        {serviceProvider.areaOfService.join(", ")}{" "}
                      </span>
                    </p>
                    <p className="service_all_data">
                      Charging Schedule :{" "}
                      <span className="card_inner_text">
                        {serviceProvider.chargingSchedule}
                      </span>{" "}
                    </p>
                    <p className="service_all_data">
                      Labor Rate : Rs/{" "}
                      <span className="card_inner_text">
                        {serviceProvider.laborRates}
                      </span>
                    </p>
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
    </Container>
  </div>
                  </Grid>
                </Grid>
    </div>
  
  )
}
