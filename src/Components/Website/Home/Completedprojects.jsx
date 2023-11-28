import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import logo from "../../../images/sidelogo.png";
import p1 from "../../../images/pj1.png";
import p2 from "../../../images/pj2.png";
import p3 from "../../../images/pj3.png";
import p4 from "../../../images/pj4.png";
import p5 from "../../../images/pj5.png";
import p6 from "../../../images/pj6.png";
import { Link } from "react-router-dom";
import { useFetchStoresBySaleQuery } from "../../../Redux/RtkQuery/StoresDashboard";
import Spinner2 from "../../Common/spinner2/spinner2";
export const Completedprojects = () => {
  const {data , isLoading , isSuccess , isError} = useFetchStoresBySaleQuery();
  if(isLoading) return (<Spinner2></Spinner2>)
  if(isError) return (<p>Error Fetching data</p>)

  return (

    <section className="homepage-allsection">
      <Container>
        <Row>
          <Col lg={5} md={5} sm={3} xs={3}>
            <div className="side-img-div">
              <img className="store-sideimage" src={logo} alt="log" />
            </div>
          </Col>
          <Col lg={5} md={5} sm={5} xs={5}>
            <div>
              <h1 className="home_completed_heading">Featured Stores</h1>
            </div>
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
        {
  isSuccess && data.data.map(shop => {
    return (
      <Col  lg={4} md={6} sm={12} xs={12} >
          <Card key={shop._id} className="estate-card with-ribbon">
          {shop.sale && <div className="ribbon">{`${shop.sale} Sale`}</div>}
                  <Card.Img src={shop.shopImage} style={{height : '140px' , width : '140px' , borderRadius:'50%'  , objectFit:'contain'}} alt="House Image" className="real-card-image" />
                  <Card.Body>
                    <Card.Text>
                    <p className="estate_ineer_text">
                        Name : {shop.shopName}
                      </p>
                      <p className="estate_ineer_text">
                        Area of service : {shop.areaOfService[0]}
                      </p>
                      
                      <p className="estate_ineer_text">
                        Province : {shop.province[0]}
                      </p>
                         
                      <p className="estate_ineer_text">
                        category : {shop.category}
                      </p>
                         
                      <p className="estate_ineer_text">
                        Contact Number : {shop.contectNumber}
                      </p>
         
                     
                    </Card.Text>
                  </Card.Body>
                </Card>
      </Col>
    )
  })
}
    


        </Row>

 
      </Container>
    </section>
  );
};
