import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import "./Admindailyrates.scss";

export const Admindailyrates = () => {
  return (
    <>
      <section className="admin_daily_rates-sec">
        <Container>
          <Row>
            <Col>
              <h2 className="daily_headings">Daily Rates</h2>
            </Col>
          </Row>
          <Row>
            <Col lg={6} md={6} sm={12} xs={12}>
              <div>
                <label className="rates_lablels">Bricks in Quantity</label>{" "}
                <br />
                <input
                  className="rates_inputs"
                  type="text"
                  placeholder="Bricks"
                />
              </div>
            </Col>
            <Col lg={6} md={6} sm={12} xs={12}>
              <div>
                <label className="rates_lablels">Cement Per Bag</label> <br />
                <input
                  className="rates_inputs"
                  type="text"
                  placeholder="Cement"
                />
              </div>
            </Col>
          </Row>
          <Row>
            <Col lg={6} md={6} sm={12} xs={12}>
              <div>
                <label className="rates_lablels">Sand in Sqft</label> <br />
                <input
                  className="rates_inputs"
                  type="text"
                  placeholder="Sand"
                />
              </div>
            </Col>
            <Col lg={6} md={6} sm={12} xs={12}>
              <div>
                <label className="rates_lablels"> Iron Bars in Tons</label>{" "}
                <br />
                <input
                  className="rates_inputs"
                  type="text"
                  placeholder="Iron Bars"
                />
              </div>
            </Col>
          </Row>
          <Row>
            <Col lg={6} md={6} sm={12} xs={12}>
              <div>
                <label className="rates_lablels">Crush in Sqft</label> <br />
                <input
                  className="rates_inputs"
                  type="text"
                  placeholder="Crush in Sqft"
                />
              </div>
            </Col>
            <Col lg={6} md={6} sm={12} xs={12}>
              <div>
                <label className="rates_lablels"> PVC Pipes</label> <br />
                <input
                  className="rates_inputs"
                  type="text"
                  placeholder="PVC Pipes"
                />
              </div>
            </Col>
          </Row>
          <Row>
            <Col lg={6} md={6} sm={12} xs={12}>
              <div>
                <label className="rates_lablels">Plastic Pipes</label> <br />
                <input
                  className="rates_inputs"
                  type="text"
                  placeholder="Plastic Pipes"
                />
              </div>
            </Col>
            <Col lg={6} md={6} sm={12} xs={12}>
              <div className="rates_button">
                <button type="submit">Update</button>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
};
