import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
// import "./Stores.scss"

export const Herostores = () => {
  return (
    <>
        <section className='hero_sec'>
            <Container>
                <Row>
                    <Col>
                        <h1 className='all_store_heading'>All Stores</h1>
                    </Col>
                </Row>
            </Container>
        </section>
    </>
  )
}
