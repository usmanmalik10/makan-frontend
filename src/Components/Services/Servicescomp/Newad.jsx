import React, { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import { createservice } from "../../../features/serviceprovider/serviceproviderSlice";
import Spinner from "../../Common/spinner/spinner";
import Form from 'react-bootstrap/Form';

 const Newad = () => {

  const [formData, setFormData] = useState({
    contractorName: "",
    areaOfService: "",
    contectNumber: "",
    address: "",
    laborRates: "",
    chargingSchedule: "",
  });
  console.log(formData);
  const {
    contractorName,
    areaOfService,
    contectNumber,
    address,
    laborRates,
    chargingSchedule,
  } = formData;

  const location = useLocation(); // Use useLocation to access location object
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { user, isLoading, isError, isSuccess, message } = useSelector(
    (state) => state.serviceprovider
  );

  const onChange = (e) => {
    console.log(e.target.name);
    setFormData((preState) => ({
      ...preState,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const serviceData = {
      contractorName,
      areaOfService,
      contectNumber,
      address,
      laborRates,
      chargingSchedule,
    };
    console.log("serviceData", serviceData);

    await dispatch(createservice(serviceData)).unwrap();
    // navigate(from, { replace: true });
  };

  if (isLoading) {
    return <Spinner />;
  }


  return (
    <>
      <form onSubmit={handleSubmit}>
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
                    <Form.select
                      className="business-inputs"
                      // value={category}
                      onChange={onChange}
                      name="category"
                    >
                      <option>Select Category</option>
                      <option>Mason</option>
                      <option>Marble & Tiles Fixer</option>
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
                    </Form.select>
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
                      name="contractorName"
                      value={contractorName}
                      id="contractorName"
                      onChange={onChange}
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
                      name="contectNumber"
                      value={contectNumber}
                      id="contectNumber"
                      onChange={onChange}
                    />
                  </div>
                </Col>
                <Col lg={6} md={6} sm={12}>
                  <div>
                    <label className="business-labels">
                      <span className="business-label-headings">
                        Address :{" "}
                      </span>
                    </label>
                    <br />
                    <input
                      className="business-inputs"
                      type="text"
                      placeholder="Address"
                      required
                      name="address"
                      value={address}
                      id="address"
                      onChange={onChange}
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
                    <Form.select
                      className="business-inputs"
                      value={areaOfService}
                      onChange={onChange}
                      name="areaOfService"
                    >
                      <option>Area of services</option>
                      <option>Sahiwal City</option>
                      <option>Sahiwal Division</option>
                      <option>Punjab</option>
                      <option>Pakistan</option>
                    </Form.select>
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
                    <Form.select
                      className="business-inputs"
                      value={chargingSchedule}
                      onChange={onChange}
                      name="chargingSchedule"
                    >
                      <option>Charging Schedule</option>
                      <option>Hourly</option>
                      <option>Daily</option>
                      <option>Contract</option>
                      <option>Square Feet</option>
                    </Form.select>
                  </div>
                </Col>
              </Row>
              <Row className="pt-4">
                <Col lg={6} md={6} sm={12}>
                  <div>
                    <label className="business-labels">
                      <span className="business-label-headings">
                        Labor Rate :
                      </span>
                    </label>{" "}
                    <br />
                    <input
                      type="text"
                      placeholder="Labor Rate"
                      className="business-inputs"
                      required
                      name="laborRates"
                      value={laborRates}
                      id="laborRates"
                      onChange={onChange}
                    />
                  </div>
                </Col>
                <Col lg={6} md={6} sm={12}>
                  <div className="login-button">
                    <button type="submit">Sign Up</button>
                  </div>
                </Col>
              </Row>
            </Container>
          </section>
        </div>
      </form>
    </>
  )
}

export default Newad;
