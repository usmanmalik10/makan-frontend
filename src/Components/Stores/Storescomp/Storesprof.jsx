import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Spinner2 from "../../Common/spinner2/spinner2";
import axios from "axios";
import { USERS_BASE_URL } from "../../constants/config/config.dev";
import "./Storeprof.scss"
import { useFetchStoresDataQuery } from "../../../Redux/RtkQuery/StoresDashboard";
import { Container, Card, Row, Col } from 'react-bootstrap';
import { selectCurrentUser } from "../../../Redux/Slices/authSlice";
import { Link } from "react-router-dom";
import { FiEye, FiEyeOff, FiCopy } from 'react-icons/fi';
import { toast } from "react-toastify";

export const Storesprof = () => {
const user = useSelector(selectCurrentUser)
const shop = user.shop;
  const [isRevealed, setIsRevealed] = useState(false);
  const apiKey = shop.referralKeyShop;
  const copyToClipboard = (text) => {
    toast.dismiss()
    const el = document.createElement('textarea');
    el.value = text;
    document.body.appendChild(el);
    el.select();
    document.execCommand('copy');
    document.body.removeChild(el);
    toast.info('Copied')
    // Optionally show a notification/toast saying "Copied to Clipboard"
  };
  return (
    <>
    <section className="store_profile_sec">
    {shop.active ==="true" ? <Container>
      <Row className="mb-4">
        <Col>
          {/* Banner Image */}
          <div className="banner-image" style={{ backgroundImage: `url(${user.shop.shopImage })` }}>
            {/* You can add styles for this div in SCSS */}
          </div>
        </Col>
      </Row>
      <Row>
        <Col>
          {/* Store Information */}
          <Card>
            <Card.Body>
              <Card.Title>{shop.shopName}</Card.Title>
              <Card.Text>
                <strong>Category:</strong> {shop.category}
              </Card.Text>
              <Card.Text>
                <strong>Area of Service:</strong> {shop.areaOfService}
              </Card.Text>
              {/* Add more fields as needed */}
            </Card.Body>
          </Card>
          
        </Col>
        <Col lg={6} md={6} sm={12} xs={12}>
  <div className='strat_div'>
    <label className='strat_refr_label'> Referral key :</label><br />
    <div className="input-container">
      <input 
        className='strat_refr_input' 
        type={isRevealed ? 'text' : 'password'} 
        value={apiKey} 
        readOnly
      />
      {isRevealed ? 
        <FiEyeOff height={20} width={20}  className="icon-eye" onClick={() => setIsRevealed(false)} /> : 
        <FiEye height={20} width={20}   className="icon-eye" onClick={() => setIsRevealed(true)} />
      }
      <FiCopy height={20} width={20}   className="icon-copy" onClick={() => copyToClipboard(apiKey)} />
    </div>
  </div>
</Col>
      </Row>
    </Container> : <Container>
      <Row>
      <Card>
            <Card.Body>
              <Card.Title>{user.username}</Card.Title>
              <Card.Text>
                <strong>Email:</strong> {user.email}
              </Card.Text>
             <Link to='/new-add-stores'>
             <button className="estate-button">
Activate
             </button>
             </Link>
            </Card.Body>
          </Card>
      </Row>
    </Container>  }
    </section>
    </>
  )
}
