import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import './Footer.scss'
// import logo from "../../../Assets/Home-Screen/Group 46112.png";
import logo from "../../../images/makanlogo1.jpg"
const Footer = () => {
  return (
    <div>
        <section className='footer-section'>
            <Container>
                <Row>
                <Col lg={3} md={6} sm={12}>
                    <div className='footer-listdiv'>
                       <img className='footer_logo_img' src={logo} alt="log" />
                        </div>
                    </Col>
                    <Col lg={3} md={6} sm={12}>
                        <div className='footer-listdiv'>
                            <h4 className='footer-heading'>Services</h4>
                            <ul className='footerlist-type'>
                                <li className='footer-list'>
                                    <Link className='list-text' to="/architect"> Architects </Link>
                                </li>
                                <li>
                                    <Link className='list-text' to="/"> Plumber</Link>
                                </li>
                                <li>
                                    <Link className='list-text' to="/"> Engineers</Link>
                                </li>
                                <li>
                                    <Link className='list-text' to="/"> Suppliers</Link>
                                </li>
                                <li>
                                    <Link className='list-text' to="/">Contractors</Link>
                                </li>
                                <li>
                                    <Link className='list-text' to="/">Masons</Link>
                                </li>
                                <li>
                                    <Link className='list-text' to="/"> Carpenters</Link>
                                </li>
                                <li>
                                    <Link className='list-text' to="/">Painters</Link>
                                </li>
                                <li>
                                    <Link className='list-text' to="/">Steel Welders</Link>
                                </li>
                                <li>
                                    <Link className='list-text' to="/">GLass Fixers</Link>
                                </li>
                                <li>
                                    <Link className='list-text' to="/">Aluminium Workers</Link>
                                </li>
                                <li>
                                    <Link className='list-text' to="/">Marble</Link>
                                </li>
                                <li>
                                    <Link className='list-text' to="/">Legal Services</Link>
                                </li>
                            </ul>
                        </div>
                    </Col>
                    <Col lg={3} md={6} sm={12}>
                        <div className='footer-listdiv'>
                        <h4 className='footer-heading'>Main Menu</h4>
                        <ul className='footerlist-type'>
                                <li className='footer-list'>
                                    <Link className='list-text' to="/"> Home </Link>
                                </li>
                                <li>
                                    <Link className='list-text' to="/aboutus"> Aboutus</Link>
                                </li>
                                <li>
                                    <Link className='list-text' to="/contactus"> Contactus</Link>
                                </li>
                                <li>
                                    <Link className='list-text' to="/realestate"> Real Estate</Link>
                                </li>
                                <li>
                                    <Link className='list-text' to="/all-stores">Stores</Link>
                                </li>
                                <li>
                                    <Link className='list-text' to="/services">Services</Link>
                                </li>
                                
                                </ul>
                        </div>
                    </Col>
                    <Col lg={3} md={6} sm={12}>
                    <div className='footer-listdiv'>
                        <h4 className='footer-heading'>Connect With Us</h4>
                        <ul className='footerlist-type'>
                                <li className='footer-list'>
                                    <Link className='list-text' to="https://www.facebook.com/makanmanager?mibextid=LQQJ4d"> Facebook </Link>
                                </li>
                                <li>
                                    <Link className='list-text' to="/"> Twitter</Link>
                                </li>
                                <li>
                                    <Link className='list-text' to="/"> Linkedin</Link>
                                </li>
                                <li>
                                     <Link className='list-text' to="/"> Instagram</Link>
                                </li>
                                <li>
                                  <Link className='list-text' to="/">Youtube</Link>
                                </li>
                                
                                
                                </ul>
                        </div>
                    </Col>
                  
                </Row>
            </Container>
        </section>
    </div>
  )
}

export default Footer