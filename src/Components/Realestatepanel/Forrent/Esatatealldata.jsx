import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'

export const Esatatealldata = () => {
  return (
    <div>
        <section>
            <Container>
                <Row>
                    <Col>
                        <h2>Houses For Rent</h2>
                    </Col>
                </Row>
            </Container>
        </section>
        <section>
            <Container>
                <Row>
                    <Col>
                        <h2>Houses For Sale</h2>
                    </Col>
                </Row>
            </Container>
        </section>
        <section>
            <Container>
                <Row>
                    <Col>
                        <h2>Plots For Sale</h2>
                    </Col>
                </Row>
            </Container>
        </section>
    </div>
  )
}
