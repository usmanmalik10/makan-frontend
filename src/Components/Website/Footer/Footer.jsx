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
                                    <Link className='list-text' to="/services"> Architects </Link>
                                </li>
                                <li>
                                    <Link className='list-text' to="/services"> Plumber</Link>
                                </li>
                                <li>
                                    <Link className='list-text' to="/services"> Engineers</Link>
                                </li>
                                <li>
                                    <Link className='list-text' to="/services"> Suppliers</Link>
                                </li>
                                <li>
                                    <Link className='list-text' to="/services">Contractors</Link>
                                </li>
                                <li>
                                    <Link className='list-text' to="/services">Masons</Link>
                                </li>
                                <li>
                                    <Link className='list-text' to="/services"> Carpenters</Link>
                                </li>
                                <li>
                                    <Link className='list-text' to="/services">Painters</Link>
                                </li>
                                <li>
                                    <Link className='list-text' to="/services">Steel Welders</Link>
                                </li>
                                <li>
                                    <Link className='list-text' to="/services">GLass Fixers</Link>
                                </li>
                                <li>
                                    <Link className='list-text' to="/services">Aluminium Workers</Link>
                                </li>
                                <li>
                                    <Link className='list-text' to="/services">Marble</Link>
                                </li>
                                <li>
                                    <Link className='list-text' to="/services">Legal Services</Link>
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
                                    <a className='list-text' rel="noreferrer" target='_blank' href="https://www.facebook.com/makanmanager"> Facebook </a>
                                </li>
                                <li>
                                <a className='list-text' rel="noreferrer" target='_blank' href="https://twitter.com/makanmanager?lang=en"> Twitter </a>


                                </li>
                                <li>
                                <a className='list-text' rel="noreferrer" target='_blank' href="https://www.linkedin.com/company/makan-manager/?originalSubdomain=pk"> Linkedin </a>

                                </li>
                                <li>
                                <a className='list-text' rel="noreferrer" target='_blank' href="https://www.instagram.com/makanmanager/"> Instagram </a>

                                </li>
                                <li>
                                <a className='list-text' rel="noreferrer" target='_blank' href="https://www.youtube.com/c/MakanManager"> Youtube </a>

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