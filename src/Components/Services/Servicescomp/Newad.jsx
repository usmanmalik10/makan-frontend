import React, { useState, useEffect } from "react";
import "./Newad.scss";
import { Container, Row, Col, Button, Form } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import { createservice } from "../../../features/serviceprovider/serviceproviderSlice";
import Spinner2 from "../../Common/spinner2/spinner2";
import serviceproviderService from "../../../features/serviceprovider/serviceproviderService";

export const Newad = () => {

  const token = localStorage.getItem("accessToken");
  // console.log('checktoken', token)

  const [selectedFile, setSelectedFile] = useState(null);
  const [formData, setFormData] = useState({
    category: "",
    contractorName: "",
    areaOfService: "",
    contectNumber: "",
    address: "",
    laborRates: "",
    chargingSchedule: "",
  });
  console.log(formData);
  const {
    category,
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
  const { isLoading, isError, isSuccess, message } = useSelector((state) => state.serviceprovider);

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
      category,
      contractorName,
      areaOfService: [areaOfService],
      contectNumber,
      address,
      laborRates,
      chargingSchedule,
    };
    console.log("serviceData", serviceData);

    // await dispatch(createservice(serviceData, token)).unwrap();
    // navigate(from, { replace: true });
    // console.log("serviceData here", serviceData);
    dispatch(createservice(serviceData, token)).then(()=> serviceproviderService.createservice(serviceData, token));
    // Success: The service was created, you can handle the fulfilled state if needed.
    // navigate(from, { replace: true });

  };

    const handleImageUpload = (event) => {
      // Here, you can handle the uploaded image(s).
      const files = event.target.files;
      console.log(files); // This will log the FileList object, which contains the selected image(s).
      // You can now perform any further processing, such as uploading the image to a server, displaying a preview, etc.
    };


  if (isLoading) {
    return <Spinner2 />;
  }


  return (
    <>
      <form onSubmit={handleSubmit}>
        <div>
          <section>
            <Container>
              <Row>
                <Col lg={6} md={6} sm={12}>
                  <h4>Product Images</h4>
                  <Form.Group controlId="formFileMultiple" className="mb-3 image-inner-field"> 
                    <label className="business-labels">
                      <span className="business-label-headings">Choose image(s) to Upload</span>
                    </label>
                    <Form.Control className="image-inputfield-select" type="file" multiple onChange={handleImageUpload} />
                  </Form.Group>
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
                    <Form.Select
                      className="select-inputfield-select"
                      value={category}
                      onChange={onChange}
                      name="category"
                      placeholder="Select Category"
                    >
                      <option>Select Category</option>
                      <option>Mason</option>
                      <option value="marble">Marble & Tiles Fixer</option>
                      <option value="plumber">Plumber</option>
                      <option value="contractor">Contractor</option>
                      <option value="engineer">Engineer</option>
                      <option value="architect">Architect</option>
                      <option value="carpenter">Carpenter</option>
                      <option>Wood Cutter</option>
                      <option value="painter">Painter</option>
                      <option>Polish Man (Furniture)</option>
                      <option>Steel Fixer / Welder</option>
                      <option>Steel Polish</option>
                      <option value="steelwelder">Welder</option>
                      <option>Molding Worker</option>
                      <option>Leith Machine Operator</option>
                      <option value="aluminium">Aluminum Fixer</option>
                      <option value="glassfixer">Glass Fixer</option>
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
                    </Form.Select>
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
                      type="text"
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
                    <Form.Select
                      className="select-inputfield-select"
                      value={areaOfService}
                      onChange={onChange}
                      name="areaOfService"
                      placeholder="Area of services"
                    >
                      <option>Area of services</option>
                      <option>Sahiwal City</option>
                      <option>Sahiwal Division</option>
                      <option>Punjab</option>
                      <option>Pakistan</option>
                    </Form.Select>
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
                    <Form.Select
                      className="select-inputfield-select"
                      value={chargingSchedule}
                      onChange={onChange}
                      name="chargingSchedule"
                      placeholder="Charging Schedule"
                    >
                      <option>Charging Schedule</option>
                      <option>hourly</option>
                      <option>daily</option>
                      <option>contract</option>
                      <option>squareFeet</option>
                    </Form.Select>
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
                    <button type="submit" >Submit</button>
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

