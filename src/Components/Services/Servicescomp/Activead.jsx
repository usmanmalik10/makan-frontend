import React, { useState, useEffect } from "react";
import { Container, Row , Col} from 'react-bootstrap'
import Card from "react-bootstrap/Card";
import "./Activeadd.scss"
import service_image from "../../../Assets/Services-Screen/Group 46137.png";
import { useDispatch, useSelector } from "react-redux";
import { getservicebyuserid } from "../../../features/serviceprovider/serviceproviderSlice";
import Spinner2 from "../../Common/spinner2/spinner2";
import axios from "axios";
import { USERS_BASE_URL } from "../../constants/config/config.dev";



export const Activead = () => {
  const token = localStorage.getItem("accessToken");
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  

  useEffect(() => {
  const fetchData = async () => {
    try {
      const response = await axios.get(`${USERS_BASE_URL}/v1/service/userId`, {
        params: {
          limit: 10,
          page: 1,
          sortBy: "createdAt:desc",
          userId: localStorage.getItem("Userid"),
        },
        headers: {
          authorization: `Bearer ${token}`,
        },
      });
      setData(response.data?.data?.docs);
      setIsLoading(false);
    } catch (error) {
      console.error("Error fetching data:", error);
      setIsLoading(false);
      // Handle the error here, such as displaying an error message
    }
  };

  fetchData();
}, [token]);

if (isLoading) {
  return <Spinner2 />;
}


  return (
   <>
    <section className='service_activeadd_section'>
      <Container>
        <Row>
          <Col>
            <h1 className='service_active_heading'>Active Adds</h1>
          </Col>
        </Row>
        <Row className='pt-3'>
        {data.map((serviceProvider) => (
            <div key={serviceProvider._id}>
          <Col lg={4} md={4} sm={12} xs={12}>
          <Card className='serivce_active_card'>
                  <Card.Img src={service_image}  />
                  <Card.Body>
                    
                    <Card.Text>
                      <p className='active_card_inner'>Category : <span>{serviceProvider.category}</span></p>
                      <p className='active_card_inner'>Contractor Name : <span>{serviceProvider.contractorName}</span></p>
                      <p className='active_card_inner'>Conact Number : <span>{serviceProvider.contectNumber}</span></p>
                      <p className='active_card_inner'>Address : <span>{serviceProvider.address}</span></p>
                      <p className='active_card_inner'>Area of Service : <span>{serviceProvider.areaOfService.join(", ")}</span></p>
                      <p className='active_card_inner'>Charging Schedule : <span>{serviceProvider.chargingSchedule}</span> </p>
                      <p className='active_card_inner'>Labor Rate : Rs/ <span>{serviceProvider.laborRates}</span> </p>
                      
                    </Card.Text>
                  </Card.Body>
                </Card>
          </Col>
          </div>

))}
        </Row>
      </Container>
    </section>
   </>
  );
        }
