 import React from "react";
import { Container, Row, Col } from "react-bootstrap";

export const Newad = () => {
  return (
    <div>
      <section>
        <Container>
          <Row>
            <Col>
              <h4>Product Images</h4>
            </Col>
          </Row>
          <Row className="pt-4">
            <Col lg={6} md={6} sm={12}>
              <div>
                <label className="business-labels">
                  <span className="business-label-headings">
                   Select Catergory :
                  </span>
                </label>
                <br />
                <select className="business-inputs">
                <option>Select Category</option>
                  <option>Mason</option>
                  <option>Marble & Tiles  Fixer</option>
                  <option>Plumber</option>
                  <option>Contractor</option>
                  <option>Engineer</option>
                  <option>Architect</option>
                  <option>Carpenter</option>
                  <option>Wood Cutter</option>
                  <option>Painter</option>
                  <option>Polish Man (Furniture)</option>
                  <option>Steel Fixer / Welder</option>
                  <option>Steel Polish</option>
                  <option>Welder</option>
                  <option>Molding Worker</option>
                  <option>Leith Machine Operator</option>
                  <option>Aluminum Fixer</option>
                  <option>Glass Fixer</option>
                  <option>Glass Cutting & Polish</option>
                  <option>Glass Painter</option>
                  <option>Glass Paper & Designer</option>
                  <option>Electrician</option>
                  <option>AC Technician</option>
                  <option>Electric Engineer</option>
                  <option>Solar Installer</option>
                  <option>Boring Workers</option>
                  <option>Interior Designer</option>
                  <option>Termite Treatment</option>
                  <option>Gardener</option>
                  <option>Landscape Architect</option>
                  <option>House Cleaner</option>
                  <option>AC Cleaner</option>
                  <option>Marble Polish</option>
                </select>
              </div>
            </Col>
            <Col lg={6} md={6} sm={12}>
              <div>
                <label className="business-labels">
                  <span className="business-label-headings">
                    Contractor Name: 
                  </span>
                </label>
                <br />
                <input
                  className="business-inputs"
                  type="text"
                  placeholder="Contractor Name"
                  required
                />
              </div>
            </Col>
          </Row>
          <Row className="pt-4">
            <Col lg={6} md={6} sm={12}>
              <div>
                <label className="business-labels">
                  <span className="business-label-headings">
                    Contact Number :
                  </span>
                </label>
                <br />
                <input
                  className="business-inputs"
                  type="number"
                  placeholder="Contact number"
                  required
                />
              </div>
            </Col>
            <Col lg={6} md={6} sm={12}>
              <div>
                <label className="business-labels">
                  <span className="business-label-headings">Address : </span>
                </label>
                <br />
                <input
                  className="business-inputs"
                  type="text"
                  placeholder="Address"
                  required
                />
              </div>
            </Col>
          </Row>
          <Row className="pt-4">
            <Col lg={6} md={6} sm={12}>
              <div>
                
                <label className="business-labels">
                  <span className="business-label-headings">
                   Area of services :
                  </span>
                </label>
                <br />
                <select className="business-inputs">
                <option>Area of services</option>
                  <option>Sahiwal City</option>
                  <option>Sahiwal Division</option>
                  <option>Punjab</option>
                  <option>Pakistan</option>
                  </select>
              </div>

            </Col>
            <Col lg={6} md={6} sm={12}>
              <div>
                
                <label className="business-labels">
                  <span className="business-label-headings">
                   Charging Schedule :
                  </span>
                </label>
                <br />
                <select className="business-inputs">
                <option>Charging Schedule</option>
                  <option>Hourly</option>
                  <option>Daily</option>
                  <option>Contract</option>
                  <option>Square Feet</option>
                  </select>
              </div>
            </Col>
          </Row>
          <Row className="pt-4">
            <Col lg={6} md={6} sm={12}>
              <div>
                <label className="business-labels">
                  <span className="business-label-headings">Labor Rate :</span>
                </label>{" "}
                <br />
                <input
                  type="text"
                  placeholder="Labor Rate"
                  className="business-inputs"
                />
              </div>
            </Col>
            <Col lg={6} md={6} sm={12}>
              <div>
               <input type="submit" />
              </div>
            </Col>
          </Row>
          
        </Container>
      </section>
    </div>
  );
};
