import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import "./Allstrategic.scss";
import Card from "react-bootstrap/Card";
import { useFetchStrategicSalePartnerQuery } from '../../../Redux/RtkQuery/StrategicSalesPartner';

// Import the query hook
export const Allstrategicsalepartners = () => {
  // Use the hook to fetch data
  const { data, isLoading, isError } = useFetchStrategicSalePartnerQuery();

  if (isLoading) return <div>Loading...</div>;
  if (isError) return <div>Error loading data.</div>;

  const partners = data.data.docs;

  return (
    <>
      <section className='all_strategic_section'>
        <Container>
          <Row>
            <Col>
              <h3 className='all_strategic_heading'>All Strategics Sales Partners</h3>
            </Col>
          </Row>
          <Row>
            {partners.map(partner => (
              <Col lg={3} md={3} sm={12} xs={12} key={partner._id}> {/* Assuming each partner has a unique _id */}
                <Card className="all_strategic_card">
                <Card.Img variant="top" src={partner.profilePic} alt="Profile Picture" className="profile-pic-user"/>
                  <Card.Body>
                    <Card.Text>
                      <p className="all_strategic_card_text">
                        Name: <span>{partner.username}</span>
                      </p>
                      <p className="all_strategic_card_text">
                        CNIC: <span>{partner.cnicNumber}</span>
                      </p>
                      <p className="all_strategic_card_text">
                        Contact Number: <span>{partner.contactNumber}</span>
                      </p>
                      <p className="all_strategic_card_text">
                        Address: <span>{partner.address}</span>
                      </p>
                      <p className="all_strategic_card_text">
                        Province: <span>{partner.province}</span>
                      </p>
                      <p className="all_strategic_card_text">
                        City: <span>{partner.city}</span>
                      </p>
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
