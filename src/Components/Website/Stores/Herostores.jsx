import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import "./stores.css"
import storeimg from "../../../images/storesmain.jpeg"
export const Herostores = () => {
  return (
    <>
        <section >
            <Container fluid>
                <Row>
                    <Col>
                        <img className='store_main-Img' src={storeimg} alt='s3' />
                    </Col>
                </Row>
            </Container>
        </section>
    </>
  )
}
