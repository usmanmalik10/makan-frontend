import React, { useState } from "react";
import { Container, Row, Col, Form } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import { createshop } from "../../../features/shop/shopSlice";
import Spinner2 from "../../Common/spinner2/spinner2";
import shopService from "../../../features/shop/shopService";



export const Newad = () => {
  
  const token = localStorage.getItem("accessToken");
  // console.log('checktoken', token)

  const [openDropdown, setOpenDropdown] = useState(null);
  const handleDropdownClick = (id) => {
    if (openDropdown === id) {
      setOpenDropdown(null);
    } else {
      setOpenDropdown(id);
    }
  };

 

  const [selectedFile, setSelectedFile] = useState(null);
  const [formData, setFormData] = useState({
    areaOfService: "",
    shopName: "",
    productName: "",
    address:"",
    contectNumber: "",
    companyName: "",
    price: "",
    NTN:"",
    details: { key1: "", key2:"", key3: ""},
  });
  console.log(formData);
  const { areaOfService, shopName, productName, address, contectNumber, companyName, price, NTN, details,} = formData;

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { isLoading, isError, isSuccess, message } = useSelector(
    (state) => state.shop
  );


  const onChange = (e) => {
    console.log(e.target.name);
    setFormData((preState) => ({
      ...preState,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmitbuildingmaterial = async (e) => {
    e.preventDefault();

    const shopdata = {
    
      areaOfService:[areaOfService],
      shopName,
      productName,
      address,
      contectNumber,
      companyName,
      price,
      NTN,
      details:{...details}
    };
    console.log("shopdata", shopdata);

    // await dispatch(createshop(shopdata, token)).unwrap();

    dispatch(createshop(shopdata, token)).then(() => shopService.createshop(shopdata, token));
  };

  const handleSubmitbricks = async (e) => {
    e.preventDefault();

    const shopdata = {
    
      areaOfService:[areaOfService],
      shopName,
      productName,
      address,
      contectNumber,
      companyName,
      price,
      NTN,
      details:{...details}
    };
    console.log("shopdata", shopdata);

    // await dispatch(createshop(shopdata, token)).unwrap();

    dispatch(createshop(shopdata, token)).then(() => shopService.createshop(shopdata, token));
  };

  const handleSubmitmarbletiles = async (e) => {
    e.preventDefault();

    const shopdata = {
    
      areaOfService:[areaOfService],
      shopName,
      productName,
      address,
      contectNumber,
      companyName,
      price,
      NTN,
      details:{...details}
    };
    console.log("shopdata", shopdata);

    // await dispatch(createshop(shopdata, token)).unwrap();

    dispatch(createshop(shopdata, token)).then(() => shopService.createshop(shopdata, token));
  };

  const handleSubmitceramics = async (e) => {
    e.preventDefault();

    const shopdata = {
    
      areaOfService:[areaOfService],
      shopName,
      productName,
      address,
      contectNumber,
      companyName,
      price,
      NTN,
      details:{...details}
    };
    console.log("shopdata", shopdata);

    // await dispatch(createshop(shopdata, token)).unwrap();

    dispatch(createshop(shopdata, token)).then(() => shopService.createshop(shopdata, token));
  };

  const handleSubmitsanitary = async (e) => {
    e.preventDefault();

    const shopdata = {
    
      areaOfService:[areaOfService],
      shopName,
      productName,
      address,
      contectNumber,
      companyName,
      price,
      NTN,
      details:{...details}
    };
    console.log("shopdata", shopdata);

    // await dispatch(createshop(shopdata, token)).unwrap();

    dispatch(createshop(shopdata, token)).then(() => shopService.createshop(shopdata, token));
  };

  const handleSubmitboringmaterial = async (e) => {
    e.preventDefault();

    const shopdata = {
    
      areaOfService:[areaOfService],
      shopName,
      productName,
      address,
      contectNumber,
      companyName,
      price,
      NTN,
      details:{...details}
    };
    console.log("shopdata", shopdata);

    // await dispatch(createshop(shopdata, token)).unwrap();

    dispatch(createshop(shopdata, token)).then(() => shopService.createshop(shopdata, token));
  };

  const handleSubmitwood = async (e) => {
    e.preventDefault();

    const shopdata = {
    
      areaOfService:[areaOfService],
      shopName,
      productName,
      address,
      contectNumber,
      companyName,
      price,
      NTN,
      details:{...details}
    };
    console.log("shopdata", shopdata);

    // await dispatch(createshop(shopdata, token)).unwrap();

    dispatch(createshop(shopdata, token)).then(() => shopService.createshop(shopdata, token));
  };
  const handleSubmittimber = async (e) => {
    e.preventDefault();

    const shopdata = {
    
      areaOfService:[areaOfService],
      shopName,
      productName,
      address,
      contectNumber,
      companyName,
      price,
      NTN,
      details:{...details}
    };
    console.log("shopdata", shopdata);

    // await dispatch(createshop(shopdata, token)).unwrap();

    dispatch(createshop(shopdata, token)).then(() => shopService.createshop(shopdata, token));
  };
  if (isLoading) {
    return <Spinner2 />;
  }

  return (
    <>
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
                <select
                  value={openDropdown}
                  onChange={(e) => handleDropdownClick(e.target.value)}
                  className="business-inputs"
                >
                  <option value="">Select Category</option>
                  <option value="dropdown1">Building Material</option>
                  <option value="dropdown2">Bricks</option>
                  <option value="dropdown3">Marble/Tiles</option>
                  <option value="dropdown4">Ceramics</option>
                  <option value="dropdown5">Sanitary</option>
                  <option value="dropdown6">Boring Material</option>
                  <option value="dropdown7">Wood </option>
                  <option value="dropdown8">Timber</option>
                  <option value="dropdown9">Paint</option>
                  <option value="dropdown10">Steel</option>
                  <option value="dropdown11">Iron</option>
                  <option value="dropdown12">Aluminum</option>
                  <option value="dropdown13">Glass</option>
                  <option value="dropdown14">Hardware</option>
                  <option value="dropdown15">Electronics</option>
                  <option value="dropdown16">Electric</option>
                  <option value="dropdown17">Wall Panelling</option>
                  <option value="dropdown18">Solar System</option>
                  <option value="dropdown19">Nursery</option>
                  <option value="dropdown20">Concrete Plant</option>
                  <option value="dropdown21">Interior Decoration</option>
                  <option value="dropdown22">Lights</option>
                  <option value="dropdown23">Furniture</option>
                  <option value="dropdown24">Security</option>
                  <option value="dropdown25">Termite Protection</option>
                </select>
              </div>
            </Col>
          </Row>
          <Row>
            {openDropdown === "dropdown1" && (
              <div>
                <form onSubmit={handleSubmitbuildingmaterial}>
                  {/* Dropdown Content for Building Material */}
                  <section className="pt-4">
                    <Container>
                      <Row>
                        <Col lg={6} md={6} sm={12}>
                          <div>
                            <label className="business-labels">
                              <span className="business-label-headings">
                                Shop Name:
                              </span>
                            </label>
                            <br />
                            <input
                              className="business-inputs"
                              type="text"
                              placeholder="Shop Name"
                              required
                              name="shopName"
                              value={shopName}
                              onChange={onChange}
                            />
                          </div>
                        </Col>
                        <Col lg={6} md={6} sm={12}>
                          <div>
                            <label className="business-labels">
                              <span className="business-label-headings">
                                Contact Number:
                              </span>
                            </label>
                            <br />
                            <input
                              className="business-inputs"
                              type="text"
                              placeholder="Contact Number"
                              required
                              value={contectNumber}
                              name="contectNumber"
                              onChange={onChange}
                            />
                          </div>
                        </Col>
                      </Row>
                      <Row>
                        <Col lg={6} md={6} sm={12}>
                          <div>
                            <label className="business-labels">
                              <span className="business-label-headings">
                                Shop Address:
                              </span>
                            </label>
                            <br />
                            <input
                              className="business-inputs"
                              type="text"
                              placeholder="Shop Address"
                              required
                              name="address"
                              value={address}
                              onChange={onChange}
                            />
                          </div>
                        </Col>
                        <Col lg={6} md={6} sm={12}>
                          <div>
                            <label className="business-labels">
                              <span className="business-label-headings">
                                Area of services :
                              </span>
                            </label>
                            <br />
                            <Form.Select className="business-inputs" value={areaOfService} name="areaOfService" onChange={onChange}>
                              <option>Area of services</option>
                              <option>Sahiwal City</option>
                              <option>Sahiwal Division</option>
                              <option>Punjab</option>
                              <option>Pakistan</option>
                            </Form.Select>
                          </div>
                        </Col>
                      </Row>
                      <Row>
                        <Col lg={6} md={6} sm={12}>
                          <div>
                            <label className="business-labels">
                              <span className="business-label-headings">
                                NTN:
                              </span>
                            </label>
                            <br />
                            <input
                              className="business-inputs"
                              type="text"
                              placeholder="NTN"
                              required
                              name="NTN"
                              value={NTN}
                              onChange={onChange}
                            />
                          </div>
                        </Col>
                        <Col lg={6} md={6} sm={12}>
                          <div>
                            <label className="business-labels">
                              <span className="business-label-headings">
                                Product Name:
                              </span>
                            </label>
                            <br />
                            <input
                              className="business-inputs"
                              type="text"
                              placeholder="Product Name"
                              required
                              name="productName"
                              value={productName}
                              onChange={onChange}
                            />
                          </div>
                        </Col>
                      </Row>
                      <Row>
                        <Col lg={6} md={6} sm={12}>
                          <div>
                            <label className="business-labels">
                              <span className="business-label-headings">
                                Company Name
                              </span>
                            </label>
                            <br />
                            <input
                              className="business-inputs"
                              type="text"
                              placeholder="Company Name"
                              required
                              name="companyName"
                              value={companyName}
                              onChange={onChange}
                            />
                          </div>
                        </Col>
                        <Col lg={6} md={6} sm={12}>
                          <div>
                            <label className="business-labels">
                              <span className="business-label-headings">
                                Price:
                              </span>
                            </label>
                            <br />
                            <input
                              className="business-inputs"
                              type="text"
                              placeholder="Price"
                              required
                              value={price}
                              name="price"
                              onChange={onChange}
                            />
                          </div>
                        </Col>
                      </Row>

                      <Row>
                        <Col lg={6} md={6} sm={12}>
                          <div>
                            <label className="business-labels">
                              <span className="business-label-headings">
                                Quantity:
                              </span>
                            </label>
                            <br />
                            <input
                              className="business-inputs"
                              type="text"
                              placeholder="Quantity"
                              required
                              onChange={onChange}
                              value={details.key1}
                              name="details.key1"
                              
                            />
                          </div>
                        </Col>
                        <Col lg={6} md={6} sm={12}>
                          <div>
                            <label className="business-labels">
                              <span className="business-label-headings">
                                Category:
                              </span>
                            </label>
                            <br />
                            <input
                              className="business-inputs"
                              type="text"
                              placeholder="Category"
                              required
                              onChange={onChange}
                              value={details.key2}
                              name="details.key2"
                            />
                          </div>
                        </Col>
                      </Row>
                      <Row>
                        <Col lg={6} md={6} sm={12}>
                          <div>
                            <label className="business-labels">
                              <span className="business-label-headings">
                                Weight:
                              </span>
                            </label>
                            <br />
                            <input
                              className="business-inputs"
                              type="text"
                              placeholder="Weight"
                              required
                              onChange={onChange}
                              value={details.key3}
                              name="details.key3"
                            />
                          </div>
                        </Col>
                        <Col>
                          <div className="login-button">
                            <button type="submit">Submit</button>
                          </div>
                        </Col>
                      </Row>
                    </Container>
                  </section>
                </form>
              </div>
            )}

            {openDropdown === "dropdown2" && (
              <div>
                {/* Dropdown Content for Bricks */}
                <form onSubmit={handleSubmitbricks}>
                <Container>
                <Row>
                        <Col lg={6} md={6} sm={12}>
                          <div>
                            <label className="business-labels">
                              <span className="business-label-headings">
                                Shop Name:
                              </span>
                            </label>
                            <br />
                            <input
                              className="business-inputs"
                              type="text"
                              placeholder="Shop Name"
                              required
                              name="shopName"
                              value={shopName}
                              onChange={onChange}
                            />
                          </div>
                        </Col>
                        <Col lg={6} md={6} sm={12}>
                          <div>
                            <label className="business-labels">
                              <span className="business-label-headings">
                                Contact Number:
                              </span>
                            </label>
                            <br />
                            <input
                              className="business-inputs"
                              type="text"
                              placeholder="Contact Number"
                              required
                              value={contectNumber}
                              name="contectNumber"
                              onChange={onChange}
                            />
                          </div>
                        </Col>
                      </Row>
                      <Row>
                        <Col lg={6} md={6} sm={12}>
                          <div>
                            <label className="business-labels">
                              <span className="business-label-headings">
                                Shop Address:
                              </span>
                            </label>
                            <br />
                            <input
                              className="business-inputs"
                              type="text"
                              placeholder="Shop Address"
                              required
                              name="address"
                              value={address}
                              onChange={onChange}
                            />
                          </div>
                        </Col>
                        <Col lg={6} md={6} sm={12}>
                          <div>
                            <label className="business-labels">
                              <span className="business-label-headings">
                                Area of services :
                              </span>
                            </label>
                            <br />
                            <Form.Select className="business-inputs" value={areaOfService} name="areaOfService" onChange={onChange}>
                              <option>Area of services</option>
                              <option>Sahiwal City</option>
                              <option>Sahiwal Division</option>
                              <option>Punjab</option>
                              <option>Pakistan</option>
                            </Form.Select>
                          </div>
                        </Col>
                      </Row>
                      <Row>
                        <Col lg={6} md={6} sm={12}>
                          <div>
                            <label className="business-labels">
                              <span className="business-label-headings">
                                NTN:
                              </span>
                            </label>
                            <br />
                            <input
                              className="business-inputs"
                              type="text"
                              placeholder="NTN"
                              required
                              name="NTN"
                              value={NTN}
                              onChange={onChange}
                            />
                          </div>
                        </Col>
                        <Col lg={6} md={6} sm={12}>
                          <div>
                            <label className="business-labels">
                              <span className="business-label-headings">
                                Product Name:
                              </span>
                            </label>
                            <br />
                            <input
                              className="business-inputs"
                              type="text"
                              placeholder="Product Name"
                              required
                              name="productName"
                              value={productName}
                              onChange={onChange}
                            />
                          </div>
                        </Col>
                      </Row>
                      <Row>
                        <Col lg={6} md={6} sm={12}>
                          <div>
                            <label className="business-labels">
                              <span className="business-label-headings">
                                Company Name
                              </span>
                            </label>
                            <br />
                            <input
                              className="business-inputs"
                              type="text"
                              placeholder="Company Name"
                              required
                              name="companyName"
                              value={companyName}
                              onChange={onChange}
                            />
                          </div>
                        </Col>
                        <Col lg={6} md={6} sm={12}>
                          <div>
                            <label className="business-labels">
                              <span className="business-label-headings">
                                Price:
                              </span>
                            </label>
                            <br />
                            <input
                              className="business-inputs"
                              type="text"
                              placeholder="Price"
                              required
                              value={price}
                              name="price"
                              onChange={onChange}
                            />
                          </div>
                        </Col>
                      </Row>

                  <Row>
                    <Col lg={6} md={6} sm={12}>
                      <div>
                        <label className="business-labels">
                          <span className="business-label-headings">
                            Quantity:
                          </span>
                        </label>
                        <br />
                        <input
                          className="business-inputs"
                          type="text"
                          placeholder="Quantity"
                          required
                          name="deatils.key1"
                          value={details.key1}
                          onChange={onChange}
                        />
                      </div>
                    </Col>
                    <Col lg={6} md={6} sm={12}>
                      <div>
                        <label className="business-labels">
                          <span className="business-label-headings">Size:</span>
                        </label>
                        <br />
                        <input
                          className="business-inputs"
                          type="text"
                          placeholder="Size"
                          required
                          name="details.key2"
                          value={details.key2}
                          onChange={onChange}
                        />
                      </div>
                    </Col>
                  </Row>
                  <Row>
                  <Col>
                          <div className="login-button">
                            <button type="submit">Submit</button>
                          </div>
                        </Col>
                  </Row>
                </Container>
                </form>
              </div>
            )}

            {openDropdown === "dropdown3" && (
              <div>
                {/* Dropdown Content for Marble & Tiles */}
                <section className="pt-4">
                  <form onSubmit={handleSubmitmarbletiles}>
                  <Container>
                    <Row>
                      <Col lg={6} md={6} sm={12}>
                        <div>
                          <label className="business-labels">
                            <span className="business-label-headings">
                              Shop Name:
                            </span>
                          </label>
                          <br />
                          <input
                            className="business-inputs"
                            type="text"
                            placeholder="Shop Name"
                            required
                            value={shopName}
                            name="shopname"
                            onChange={onChange}
                          />
                        </div>
                      </Col>
                      <Col lg={6} md={6} sm={12}>
                        <div>
                          <label className="business-labels">
                            <span className="business-label-headings">
                              Contact Number:
                            </span>
                          </label>
                          <br />
                          <input
                            className="business-inputs"
                            type="text"
                            placeholder="Contact Number"
                            required
                            name="contectNumber"
                            value={contectNumber}
                            onChange={onChange}
                          />
                        </div>
                      </Col>
                    </Row>
                    <Row>
                      <Col lg={6} md={6} sm={12}>
                        <div>
                          <label className="business-labels">
                            <span className="business-label-headings">
                              Shop Address:
                            </span>
                          </label>
                          <br />
                          <input
                            className="business-inputs"
                            type="text"
                            placeholder="Shop Address"
                            required
                          />
                        </div>
                      </Col>
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
                    </Row>
                    <Row>
                      <Col lg={6} md={6} sm={12}>
                        <div>
                          <label className="business-labels">
                            <span className="business-label-headings">
                              NTN:
                            </span>
                          </label>
                          <br />
                          <input
                            className="business-inputs"
                            type="text"
                            placeholder="NTN"
                            required
                            value={NTN}
                            name="NTN"
                            onChange={onChange}
                          />
                        </div>
                      </Col>
                      <Col lg={6} md={6} sm={12}>
                        <div>
                          <label className="business-labels">
                            <span className="business-label-headings">
                              Product Name:
                            </span>
                          </label>
                          <br />
                          <input
                            className="business-inputs"
                            type="text"
                            placeholder="Product Name"
                            required
                            name="productName"
                            value={productName}
                            onChange={onChange}
                          />
                        </div>
                      </Col>
                    </Row>
                    <Row>
                      <Col lg={6} md={6} sm={12}>
                        <div>
                          <label className="business-labels">
                            <span className="business-label-headings">
                              Company Name:
                            </span>
                          </label>
                          <br />
                          <input
                            className="business-inputs"
                            type="text"
                            placeholder="Company Name"
                            required
                            name="companyName"
                            value={companyName}
                            onChange={onChange}
                          />
                        </div>
                      </Col>
                      <Col lg={6} md={6} sm={12}>
                        <div>
                          <label className="business-labels">
                            <span className="business-label-headings">
                              Price:
                            </span>
                          </label>
                          <br />
                          <input
                            className="business-inputs"
                            type="text"
                            placeholder="Price"
                            required
                            value={price}
                            name="price"
                            onChange={onChange}
                          />
                        </div>
                      </Col>
                    </Row>
                    <Row>
                      <Col lg={6} md={6} sm={12}>
                        <div>
                          <label className="business-labels">
                            <span className="business-label-headings">
                              Thickness :
                            </span>
                          </label>
                          <br />
                          <select className="business-inputs" name="details.key1" value={details.key1} onChange={onchange}>
                            <option>Thickness</option>
                            <option>3MM</option>
                            <option>4MM</option>
                            <option>5MM</option>
                            <option>6MM</option>
                            <option>7MM</option>
                            <option>8MM</option>
                            <option>9MM</option>
                          </select>
                        </div>
                      </Col>
                      <Col lg={6} md={6} sm={12}>
                        <div>
                          <label className="business-labels">
                            <span className="business-label-headings">
                              Dimension:
                            </span>
                          </label>
                          <br />
                          <input
                            className="business-inputs"
                            type="text"
                            placeholder="Dimension"
                            required
                            name="details.key2"
                            value={details.key2}
                            onChange={onChange}
                          />
                        </div>
                      </Col>
                    </Row>
                    <Row>
                      <Col lg={6} md={6} sm={12}>
                        <div>
                          <label className="business-labels">
                            <span className="business-label-headings">
                              Color:
                            </span>
                          </label>
                          <br />
                          <input
                            className="business-inputs"
                            type="text"
                            placeholder="Color"
                            required
                            name="deatails.key3"
                            value={details.key3}
                            onChange={onChange}
                          />
                        </div>
                      </Col>
                      <Col lg={6} md={6} sm={12}>
                        <div>
                          <label className="business-labels">
                            <span className="business-label-headings">
                              Grade:
                            </span>
                          </label>
                          <br />
                          <input
                            className="business-inputs"
                            type="text"
                            placeholder="Grade"
                            required
                            value={details.key4}
                            name="details.key4"
                            onChange={onChange}
                          />
                        </div>
                      </Col>
                    </Row>
                    <Row>
                      <Col>
                      <div className="login-button">
                            <button type="submit">Submit</button>
                          </div>
                      </Col>
                    </Row>
                  </Container>
                  </form>
                </section>
              </div>
            )}
            {openDropdown === "dropdown4" && (
              <div>
                {/* Dropdown Content for Ceramics */}
                <section className="pt-4">
                  <form onSubmit={handleSubmitceramics}>
                  <Container>
                    <Row>
                      <Col lg={6} md={6} sm={12}>
                        <div>
                          <label className="business-labels">
                            <span className="business-label-headings">
                              Shop Name:
                            </span>
                          </label>
                          <br />
                          <input
                            className="business-inputs"
                            type="text"
                            placeholder="Shop Name"
                            required
                            value={shopName}
                            name="shopname"
                            onChange={onChange}
                          />
                        </div>
                      </Col>
                      <Col lg={6} md={6} sm={12}>
                        <div>
                          <label className="business-labels">
                            <span className="business-label-headings">
                              Contact Number:
                            </span>
                          </label>
                          <br />
                          <input
                            className="business-inputs"
                            type="text"
                            placeholder="Contact Number"
                            required
                            value={contectNumber}
                            name="contectNumber"
                            onChange={onChange}
                          />
                        </div>
                      </Col>
                    </Row>
                    <Row>
                      <Col lg={6} md={6} sm={12}>
                        <div>
                          <label className="business-labels">
                            <span className="business-label-headings">
                              Shop Address:
                            </span>
                          </label>
                          <br />
                          <input
                            className="business-inputs"
                            type="text"
                            placeholder="Shop Address"
                            required
                            name="address"
                            value={address}
                            onChange={onChange}
                          />
                        </div>
                      </Col>
                      <Col lg={6} md={6} sm={12}>
                        <div>
                          <label className="business-labels">
                            <span className="business-label-headings">
                              Area of services :
                            </span>
                          </label>
                          <br />
                          <select className="business-inputs" name="areaOfService" value={areaOfService} onChange={onChange}>
                            <option>Area of services</option>
                            <option>Sahiwal City</option>
                            <option>Sahiwal Division</option>
                            <option>Punjab</option>
                            <option>Pakistan</option>
                          </select>
                        </div>
                      </Col>
                    </Row>
                    <Row>
                      <Col lg={6} md={6} sm={12}>
                        <div>
                          <label className="business-labels">
                            <span className="business-label-headings">
                              NTN:
                            </span>
                          </label>
                          <br />
                          <input
                            className="business-inputs"
                            type="text"
                            placeholder="NTN"
                            required
                            name="NTN"
                            value={NTN}
                            onChange={onChange}
                          />
                        </div>
                      </Col>
                      <Col lg={6} md={6} sm={12}>
                        <div>
                          <label className="business-labels">
                            <span className="business-label-headings">
                              Product Name:
                            </span>
                          </label>
                          <br />
                          <input
                            className="business-inputs"
                            type="text"
                            placeholder="Product Name"
                            required
                            name="productName"
                            value={productName}
                            onChange={onChange}
                          />
                        </div>
                      </Col>
                    </Row>
                    <Row>
                      <Col lg={6} md={6} sm={12}>
                        <div>
                          <label className="business-labels">
                            <span className="business-label-headings">
                              Company Name
                            </span>
                          </label>
                          <br />
                          <input
                            className="business-inputs"
                            type="text"
                            placeholder="Company Name"
                            required
                            name="companyName"
                            value={companyName}
                            onChange={onChange}
                          />
                        </div>
                      </Col>
                      <Col lg={6} md={6} sm={12}>
                        <div>
                          <label className="business-labels">
                            <span className="business-label-headings">
                              Price:
                            </span>
                          </label>
                          <br />
                          <input
                            className="business-inputs"
                            type="text"
                            placeholder="Price"
                            required
                            name="price"
                            value={price}
                            onChange={onChange}
                          />
                        </div>
                      </Col>
                    </Row>

                    <Row>
                      <Col lg={6} md={6} sm={12}>
                        <div>
                          <label className="business-labels">
                            <span className="business-label-headings">
                              Color:
                            </span>
                          </label>
                          <br />
                          <input
                            className="business-inputs"
                            type="text"
                            placeholder="Color"
                            required
                            name="details.key1"
                            value={details.key1}
                            onChange={onChange}
                          />
                        </div>
                      </Col>
                      <Col lg={6} md={6} sm={12}>
                        <div>
                          <label className="business-labels">
                            <span className="business-label-headings">
                              Grade:
                            </span>
                          </label>
                          <br />
                          <input
                            className="business-inputs"
                            type="text"
                            placeholder="Grade"
                            required
                            name="details.key2"
                            value={details.key2}
                            onChange={onChange}
                          />
                        </div>
                      </Col>
                    </Row>
                    <Row>
                      <Col>
                      <div className="login-button">
                            <button type="submit">Submit</button>
                          </div>
                      </Col>
                    </Row>
                  </Container>
                  </form>
                </section>
              </div>
            )}
            {openDropdown === "dropdown5" && (
              <div>
                {/* Dropdown Content for Sanitary */}
                <section className="pt-4">
                  <form onSubmit={handleSubmitsanitary}>
                  <Container>
                    <Row>
                      <Col lg={6} md={6} sm={12}>
                        <div>
                          <label className="business-labels">
                            <span className="business-label-headings">
                              Shop Name:
                            </span>
                          </label>
                          <br />
                          <input
                            className="business-inputs"
                            type="text"
                            placeholder="Shop Name"
                            required
                            name="shopName"
                            value={shopName}
                            onChange={onChange}
                          />
                        </div>
                      </Col>
                      <Col lg={6} md={6} sm={12}>
                        <div>
                          <label className="business-labels">
                            <span className="business-label-headings">
                              Contact Number:
                            </span>
                          </label>
                          <br />
                          <input
                            className="business-inputs"
                            type="text"
                            placeholder="Contact Number"
                            required
                            name="contectNumber"
                            value={contectNumber}
                            onChange={onChange}
                          />
                        </div>
                      </Col>
                    </Row>
                    <Row>
                      <Col lg={6} md={6} sm={12}>
                        <div>
                          <label className="business-labels">
                            <span className="business-label-headings">
                              Shop Address:
                            </span>
                          </label>
                          <br />
                          <input
                            className="business-inputs"
                            type="text"
                            placeholder="Shop Address"
                            required
                            value={address}
                            name="address"
                            onChange={onChange}
                          />
                        </div>
                      </Col>
                      <Col lg={6} md={6} sm={12}>
                        <div>
                          <label className="business-labels">
                            <span className="business-label-headings">
                              Area of services :
                            </span>
                          </label>
                          <br />
                          <select className="business-inputs" value={areaOfService} name="areaOfService" onChange={onChange}>
                            <option>Area of services</option>
                            <option>Sahiwal City</option>
                            <option>Sahiwal Division</option>
                            <option>Punjab</option>
                            <option>Pakistan</option>
                          </select>
                        </div>
                      </Col>
                    </Row>
                    <Row>
                      <Col lg={6} md={6} sm={12}>
                        <div>
                          <label className="business-labels">
                            <span className="business-label-headings">
                              NTN:
                            </span>
                          </label>
                          <br />
                          <input
                            className="business-inputs"
                            type="text"
                            placeholder="NTN"
                            required
                            name="NTN"
                            value={NTN}
                            onChange={onChange}
                          />
                        </div>
                      </Col>
                      <Col lg={6} md={6} sm={12}>
                        <div>
                          <label className="business-labels">
                            <span className="business-label-headings">
                              Product Name:
                            </span>
                          </label>
                          <br />
                          <input
                            className="business-inputs"
                            type="text"
                            placeholder="Product Name"
                            required
                            name="productName"
                            value={productName}
                            onChange={onChange}

                          />
                        </div>
                      </Col>
                    </Row>
                    <Row>
                      <Col lg={6} md={6} sm={12}>
                        <div>
                          <label className="business-labels">
                            <span className="business-label-headings">
                              Company Name:
                            </span>
                          </label>
                          <br />
                          <input
                            className="business-inputs"
                            type="text"
                            placeholder="Company Name"
                            required
                            name="companyName"
                            value={companyName}
                            onChange={onChange}
                          />
                        </div>
                      </Col>
                      <Col lg={6} md={6} sm={12}>
                        <div>
                          <label className="business-labels">
                            <span className="business-label-headings">
                              Price:
                            </span>
                          </label>
                          <br />
                          <input
                            className="business-inputs"
                            type="text"
                            placeholder="Price"
                            required
                            name="price"
                            value={price}
                            onChange={onChange}
                          />
                        </div>
                      </Col>
                    </Row>
                    <Row>
                      <Col lg={6} md={6} sm={12}>
                        <div>
                          <label className="business-labels">
                            <span className="business-label-headings">
                              Length:
                            </span>
                          </label>
                          <br />
                          <input
                            className="business-inputs"
                            type="text"
                            placeholder="Length"
                            required
                            name="details.key1"
                            value={details.key1}
                            onChange={onChange}
                          />
                        </div>
                      </Col>
                      <Col lg={6} md={6} sm={12}>
                        <div>
                          <label className="business-labels">
                            <span className="business-label-headings">
                              Thickness:
                            </span>
                          </label>
                          <br />
                          <input
                            className="business-inputs"
                            type="text"
                            placeholder="Thickness"
                            required
                            name="details.key2"
                            value={details.key2}
                            onChange={onChange}
                          />
                        </div>
                      </Col>
                    </Row>
                    <Row>
                      <Col lg={6} md={6} sm={12}>
                        <div>
                          <label className="business-labels">
                            <span className="business-label-headings">
                              Color:
                            </span>
                          </label>
                          <br />
                          <input
                            className="business-inputs"
                            type="text"
                            placeholder="Color"
                            required
                            name="details.key3"
                            value={details.key3}
                            onChange={onChange}
                          />
                        </div>
                      </Col>
                      <Col lg={6} md={6} sm={12}>
                        <div>
                          <label className="business-labels">
                            <span className="business-label-headings">
                              Size:
                            </span>
                          </label>
                          <br />
                          <input
                            className="business-inputs"
                            type="text"
                            placeholder="Size"
                            required
                            value={details.key4}
                            name="details.key4"
                            onChange={onChange}
                          />
                        </div>
                      </Col>
                    </Row>
                    <Row>
                      <Col>
                      <div className="login-button">
                            <button type="submit">Submit</button>
                          </div>
                      </Col>
                    </Row>
                  </Container>
                  </form>
                </section>
              </div>
            )}
            {openDropdown === "dropdown6" && (
              <div>
                {/* Dropdown Content for Boring Material */}
                <section className="pt-4">
                  <form onSubmit={handleSubmitboringmaterial}>
                  <Container>
                    <Row>
                      <Col lg={6} md={6} sm={12}>
                        <div>
                          <label className="business-labels">
                            <span className="business-label-headings">
                              Shop Name:
                            </span>
                          </label>
                          <br />
                          <input
                            className="business-inputs"
                            type="text"
                            placeholder="Shop Name"
                            required
                            name="shopName"
                            value={shopName}
                            onChange={onChange}
                          />
                        </div>
                      </Col>
                      <Col lg={6} md={6} sm={12}>
                        <div>
                          <label className="business-labels">
                            <span className="business-label-headings">
                              Contact Number:
                            </span>
                          </label>
                          <br />
                          <input
                            className="business-inputs"
                            type="text"
                            placeholder="Contact Number"
                            required
                            name="contectNumber"
                            value={contectNumber}
                            onChange={onChange}
                          />
                        </div>
                      </Col>
                    </Row>
                    <Row>
                      <Col lg={6} md={6} sm={12}>
                        <div>
                          <label className="business-labels">
                            <span className="business-label-headings">
                              Shop Address:
                            </span>
                          </label>
                          <br />
                          <input
                            className="business-inputs"
                            type="text"
                            placeholder="Shop Address"
                            required
                            name="address"
                            value={address}
                            onChange={onChange}
                          />
                        </div>
                      </Col>
                      <Col lg={6} md={6} sm={12}>
                        <div>
                          <label className="business-labels">
                            <span className="business-label-headings">
                              Area of services :
                            </span>
                          </label>
                          <br />
                          <select className="business-inputs" name="areaOfService" value={areaOfService} onChange={onChange}>
                            <option>Area of services</option>
                            <option>Sahiwal City</option>
                            <option>Sahiwal Division</option>
                            <option>Punjab</option>
                            <option>Pakistan</option>
                          </select>
                        </div>
                      </Col>
                    </Row>
                    <Row>
                      <Col lg={6} md={6} sm={12}>
                        <div>
                          <label className="business-labels">
                            <span className="business-label-headings">
                              NTN:
                            </span>
                          </label>
                          <br />
                          <input
                            className="business-inputs"
                            type="text"
                            placeholder="NTN"
                            required
                            name="NTN"
                            value={NTN}
                            onChange={onChange}
                          />
                        </div>
                      </Col>
                      <Col lg={6} md={6} sm={12}>
                        <div>
                          <label className="business-labels">
                            <span className="business-label-headings">
                              Product Name:
                            </span>
                          </label>
                          <br />
                          <input
                            className="business-inputs"
                            type="text"
                            placeholder="Product Name"
                            required
                            name="productName"
                            value={productName}
                            onChange={onChange}
                          />
                        </div>
                      </Col>
                    </Row>
                    <Row>
                      <Col lg={6} md={6} sm={12}>
                        <div>
                          <label className="business-labels">
                            <span className="business-label-headings">
                              Company Name:
                            </span>
                          </label>
                          <br />
                          <input
                            className="business-inputs"
                            type="text"
                            placeholder="Company Name"
                            required
                            name="companyName"
                            value={companyName}
                            onChange={onChange}
                          />
                        </div>
                      </Col>
                      <Col lg={6} md={6} sm={12}>
                        <div>
                          <label className="business-labels">
                            <span className="business-label-headings">
                              Price:
                            </span>
                          </label>
                          <br />
                          <input
                            className="business-inputs"
                            type="text"
                            placeholder="Price"
                            required
                            name="price"
                            value={price}
                            onChange={onChange}
                          />
                        </div>
                      </Col>
                    </Row>
                    <Row>
                      <Col lg={6} md={6} sm={12}>
                        <div>
                          <label className="business-labels">
                            <span className="business-label-headings">
                              Size:
                            </span>
                          </label>
                          <br />
                          <input
                            className="business-inputs"
                            type="text"
                            placeholder="Size"
                            required
                            name="details.key1"
                            value={details.key1}
                            onChange={onChange}
                          />
                        </div>
                      </Col>
                      <Col lg={6} md={6} sm={12}>
                        <div>
                          <label className="business-labels">
                            <span className="business-label-headings">
                              Dia:
                            </span>
                          </label>
                          <br />
                          <input
                            className="business-inputs"
                            type="text"
                            placeholder="Dia"
                            required
                            name="deatils.key2"
                            value={details.key2}
                            onChange={onChange}
                          />
                        </div>
                      </Col>
                    </Row>
                    <Row>
                      <Col lg={6} md={6} sm={12}>
                        <div>
                          <label className="business-labels">
                            <span className="business-label-headings">
                              Depth:
                            </span>
                          </label>
                          <br />
                          <input
                            className="business-inputs"
                            type="text"
                            placeholder="Depth"
                            required
                            name="details.key3"
                            value={details.key3}
                            onChange={onChange}
                          />
                        </div>
                      </Col>
                      <Col lg={6} md={6} sm={12}>
                        <Col>
                        <div className="login-button">
                            <button type="submit">Submit</button>
                          </div>
                        </Col>
                      </Col>
                    </Row>
                  </Container>
                  </form>
                </section>
              </div>
            )}
            {openDropdown === "dropdown7" && (
              <div>
                {/* Dropdown Content for wood */}
                <section className="pt-4">
                  <form onSubmit={handleSubmitwood}>
                  <Container>
                    <Row>
                      <Col lg={6} md={6} sm={12}>
                        <div>
                          <label className="business-labels">
                            <span className="business-label-headings">
                              Shop Name:
                            </span>
                          </label>
                          <br />
                          <input
                            className="business-inputs"
                            type="text"
                            placeholder="Shop Name"
                            required
                            value={shopName}
                            name="shopName"
                            onChange={onChange}
                          />
                        </div>
                      </Col>
                      <Col lg={6} md={6} sm={12}>
                        <div>
                          <label className="business-labels">
                            <span className="business-label-headings">
                              Contact Number:
                            </span>
                          </label>
                          <br />
                          <input
                            className="business-inputs"
                            type="text"
                            placeholder="Contact Number"
                            required
                            name="contectNumber"
                            value={contectNumber}
                            onChange={onChange}
                          />
                        </div>
                      </Col>
                    </Row>
                    <Row>
                      <Col lg={6} md={6} sm={12}>
                        <div>
                          <label className="business-labels">
                            <span className="business-label-headings">
                              Shop Address:
                            </span>
                          </label>
                          <br />
                          <input
                            className="business-inputs"
                            type="text"
                            placeholder="Shop Address"
                            required
                            name="address"
                            value={address}
                            onChange={onChange}
                          />
                        </div>
                      </Col>
                      <Col lg={6} md={6} sm={12}>
                        <div>
                          <label className="business-labels">
                            <span className="business-label-headings">
                              Area of services :
                            </span>
                          </label>
                          <br />
                          <select className="business-inputs" name="areaOfService" value={areaOfService} onChange={onChange}>
                            <option>Area of services</option>
                            <option>Sahiwal City</option>
                            <option>Sahiwal Division</option>
                            <option>Punjab</option>
                            <option>Pakistan</option>
                          </select>
                        </div>
                      </Col>
                    </Row>
                    <Row>
                      <Col lg={6} md={6} sm={12}>
                        <div>
                          <label className="business-labels">
                            <span className="business-label-headings">
                              NTN:
                            </span>
                          </label>
                          <br />
                          <input
                            className="business-inputs"
                            type="text"
                            placeholder="NTN"
                            required
                            name="NTN"
                            value={NTN}
                            onChange={onChange}
                          />
                        </div>
                      </Col>
                      <Col lg={6} md={6} sm={12}>
                        <div>
                          <label className="business-labels">
                            <span className="business-label-headings">
                              Product Name:
                            </span>
                          </label>
                          <br />
                          <input
                            className="business-inputs"
                            type="text"
                            placeholder="Product Name"
                            required
                            name="productName"
                            value={productName}
                            onChange={onChange}
                          />
                        </div>
                      </Col>
                    </Row>
                    <Row>
                      <Col lg={6} md={6} sm={12}>
                        <div>
                          <label className="business-labels">
                            <span className="business-label-headings">
                              Company Name:
                            </span>
                          </label>
                          <br />
                          <input
                            className="business-inputs"
                            type="text"
                            placeholder="Company Name"
                            required
                            name="companyName"
                            value={companyName}
                            onChange={onChange}
                          />
                        </div>
                      </Col>
                      <Col lg={6} md={6} sm={12}>
                        <div>
                          <label className="business-labels">
                            <span className="business-label-headings">
                              Price:
                            </span>
                          </label>
                          <br />
                          <input
                            className="business-inputs"
                            type="text"
                            placeholder="Price"
                            required
                            name="price"
                            value={price}
                            onChange={onChange}
                          />
                        </div>
                      </Col>
                    </Row>
                    <Row>
                      <Col lg={6} md={6} sm={12}>
                        <div>
                          <label className="business-labels">
                            <span className="business-label-headings">
                              Dimension:
                            </span>
                          </label>
                          <br />
                          <input
                            className="business-inputs"
                            type="text"
                            placeholder="Dimension"
                            required
                            name="details.key1"
                            value={details.key1}
                            onChange={onChange}

                          />
                        </div>
                      </Col>
                      <Col lg={6} md={6} sm={12}>
                        <div>
                          <label className="business-labels">
                            <span className="business-label-headings">
                              Thickness:
                            </span>
                          </label>
                          <br />
                          <input
                            className="business-inputs"
                            type="text"
                            placeholder="Thickness"
                            required
                            name="details.key2"
                            value={details.key2}
                            onChange={onChange}
                          />
                        </div>
                      </Col>
                    </Row>
                    <Row>
                      <Col lg={6} md={6} sm={12}>
                        <div>
                          <label className="business-labels">
                            <span className="business-label-headings">
                              Color:
                            </span>
                          </label>
                          <br />
                          <input
                            className="business-inputs"
                            type="text"
                            placeholder="Color"
                            required
                            name="details.key3"
                            value={details.key3}
                            onChange={onChange}
                          />
                        </div>
                      </Col>
                      <Col lg={6} md={6} sm={12}>
                        <Col>
                        <div className="login-button">
                            <button type="submit">Submit</button>
                          </div>
                        </Col>
                      </Col>
                    </Row>
                  </Container>
                  </form>
                </section>
              </div>
            )}
            {openDropdown === "dropdown8" && (
              <div>
                {/* Dropdown Content for TImber */}
                <section className="pt-4">
                  <form onSubmit={handleSubmittimber}>
                  <Container>
                    <Row>
                      <Col lg={6} md={6} sm={12}>
                        <div>
                          <label className="business-labels">
                            <span className="business-label-headings">
                              Shop Name:
                            </span>
                          </label>
                          <br />
                          <input
                            className="business-inputs"
                            type="text"
                            placeholder="Shop Name"
                            required
                            name="shopName"
                            value={shopName}
                            onChange={onChange}
                          />
                        </div>
                      </Col>
                      <Col lg={6} md={6} sm={12}>
                        <div>
                          <label className="business-labels">
                            <span className="business-label-headings">
                              Contact Number:
                            </span>
                          </label>
                          <br />
                          <input
                            className="business-inputs"
                            type="text"
                            placeholder="Contact Number"
                            required
                            value={contectNumber}
                            name="contectNumber"
                            onChange={onChange}
                          />
                        </div>
                      </Col>
                    </Row>
                    <Row>
                      <Col lg={6} md={6} sm={12}>
                        <div>
                          <label className="business-labels">
                            <span className="business-label-headings">
                              Shop Address:
                            </span>
                          </label>
                          <br />
                          <input
                            className="business-inputs"
                            type="text"
                            placeholder="Shop Address"
                            required
                            name="address"
                            value={address}
                            onChange={onChange}
                          />
                        </div>
                      </Col>
                      <Col lg={6} md={6} sm={12}>
                        <div>
                          <label className="business-labels">
                            <span className="business-label-headings">
                              Area of services :
                            </span>
                          </label>
                          <br />
                          <select className="business-inputs" name="areaOfService" value={areaOfService} onChange={onChange}>
                            <option>Area of services</option>
                            <option>Sahiwal City</option>
                            <option>Sahiwal Division</option>
                            <option>Punjab</option>
                            <option>Pakistan</option>
                          </select>
                        </div>
                      </Col>
                    </Row>
                    <Row>
                      <Col lg={6} md={6} sm={12}>
                        <div>
                          <label className="business-labels">
                            <span className="business-label-headings">
                              NTN:
                            </span>
                          </label>
                          <br />
                          <input
                            className="business-inputs"
                            type="text"
                            placeholder="NTN"
                            required
                            name="NTN"
                            value={NTN}
                            onChange={onChange}
                          />
                        </div>
                      </Col>
                      <Col lg={6} md={6} sm={12}>
                        <div>
                          <label className="business-labels">
                            <span className="business-label-headings">
                              Product Name:
                            </span>
                          </label>
                          <br />
                          <input
                            className="business-inputs"
                            type="text"
                            placeholder="Product Name"
                            required
                            name="productName"
                            value={productName}
                            onChange={onChange}
                          />
                        </div>
                      </Col>
                    </Row>
                    <Row>
                      <Col lg={6} md={6} sm={12}>
                        <div>
                          <label className="business-labels">
                            <span className="business-label-headings">
                              Wood Name:
                            </span>
                          </label>
                          <br />
                          <input
                            className="business-inputs"
                            type="text"
                            placeholder="Wood Name"
                            required
                            name="details.key1"
                            value={details.key1}
                            onChange={onChange}
                          />
                        </div>
                      </Col>
                      <Col lg={6} md={6} sm={12}>
                        <div>
                          <label className="business-labels">
                            <span className="business-label-headings">
                              Price: (per cubic feet)
                            </span>
                          </label>
                          <br />
                          <input
                            className="business-inputs"
                            type="text"
                            placeholder="Price"
                            required
                            name="price"
                            value={price}
                            onChange={onChange}
                          />
                        </div>
                      </Col>
                    </Row>
                    <Row>
                      <Col lg={6} md={6} sm={12}>
                        <div>
                          <label className="business-labels">
                            <span className="business-label-headings">
                              Dimension:
                            </span>
                          </label>
                          <br />
                          <input
                            className="business-inputs"
                            type="text"
                            placeholder="Dimension"
                            required
                            name="details.key2"
                            value={details.key2}
                            onChange={onChange}
                          />
                        </div>
                      </Col>
                      <Col lg={6} md={6} sm={12}>
                        <div>
                          <label className="business-labels">
                            <span className="business-label-headings">
                              Color:
                            </span>
                          </label>
                          <br />
                          <input
                            className="business-inputs"
                            type="text"
                            placeholder="Color"
                            required
                            name="details.key3"
                            value={details.key3}
                            onChange={onChange}
                          />
                        </div>
                      </Col>
                    </Row>
                    <Row>
                      <Col lg={6} md={6} sm={12}>
                      <div className="login-button">
                            <button type="submit">Submit</button>
                          </div>
                      </Col>
                    </Row>
                  </Container>
                  </form>
                </section>
              </div>
            )}
            {openDropdown === "dropdown9" && (
              <div>
                {/* Dropdown Content for Painty */}
                <section className="pt-4">
                  <Container>
                    <Row>
                      <Col lg={6} md={6} sm={12}>
                        <div>
                          <label className="business-labels">
                            <span className="business-label-headings">
                              Shop Name:
                            </span>
                          </label>
                          <br />
                          <input
                            className="business-inputs"
                            type="text"
                            placeholder="Shop Name"
                            required
                          />
                        </div>
                      </Col>
                      <Col lg={6} md={6} sm={12}>
                        <div>
                          <label className="business-labels">
                            <span className="business-label-headings">
                              Contact Number:
                            </span>
                          </label>
                          <br />
                          <input
                            className="business-inputs"
                            type="text"
                            placeholder="Contact Number"
                            required
                          />
                        </div>
                      </Col>
                    </Row>
                    <Row>
                      <Col lg={6} md={6} sm={12}>
                        <div>
                          <label className="business-labels">
                            <span className="business-label-headings">
                              Shop Address:
                            </span>
                          </label>
                          <br />
                          <input
                            className="business-inputs"
                            type="text"
                            placeholder="Shop Address"
                            required
                          />
                        </div>
                      </Col>
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
                    </Row>
                    <Row>
                      <Col lg={6} md={6} sm={12}>
                        <div>
                          <label className="business-labels">
                            <span className="business-label-headings">
                              NTN:
                            </span>
                          </label>
                          <br />
                          <input
                            className="business-inputs"
                            type="text"
                            placeholder="NTN"
                            required
                          />
                        </div>
                      </Col>
                      <Col lg={6} md={6} sm={12}>
                        <div>
                          <label className="business-labels">
                            <span className="business-label-headings">
                              Product Name:
                            </span>
                          </label>
                          <br />
                          <input
                            className="business-inputs"
                            type="text"
                            placeholder="Product Name"
                            required
                          />
                        </div>
                      </Col>
                    </Row>
                    <Row>
                      <Col lg={6} md={6} sm={12}>
                        <div>
                          <label className="business-labels">
                            <span className="business-label-headings">
                              Company Name:
                            </span>
                          </label>
                          <br />
                          <input
                            className="business-inputs"
                            type="text"
                            placeholder="Company Name"
                            required
                          />
                        </div>
                      </Col>
                      <Col lg={6} md={6} sm={12}>
                        <div>
                          <label className="business-labels">
                            <span className="business-label-headings">
                              Price:
                            </span>
                          </label>
                          <br />
                          <input
                            className="business-inputs"
                            type="text"
                            placeholder="Price"
                            required
                          />
                        </div>
                      </Col>
                    </Row>
                    <Row>
                      <Col lg={6} md={6} sm={12}>
                        <div>
                          <label className="business-labels">
                            <span className="business-label-headings">
                              Size :
                            </span>
                          </label>
                          <br />
                          <select className="business-inputs">
                            <option>Size</option>
                            <option>Quarter</option>
                            <option>Liter</option>
                            <option>Gallon</option>
                            <option>Small</option>
                            <option>Medium</option>
                            <option>Large</option>
                          </select>
                        </div>
                      </Col>
                      <Col lg={6} md={6} sm={12}>
                        <div>
                          <label className="business-labels">
                            <span className="business-label-headings">
                              Category:
                            </span>
                          </label>
                          <br />
                          <select className="business-inputs">
                            <option>Category</option>
                            <option>Emulsion</option>
                            <option>Weather Sheet</option>
                            <option>Wood Paint</option>
                            <option>Wood Sealer</option>
                            <option>Deco Paint</option>
                            <option>Warnish</option>
                            <option>Polish</option>
                            <option>Premier</option>
                            <option>Spray</option>
                            <option>Wall Putty</option>
                            <option>Paint Remover</option>
                            <option>Filler</option>
                            <option>Silicon</option>
                            <option>Glue</option>
                            <option>Paint Gloves</option>
                            <option>Paint Cloths</option>
                            <option>Duct Tape</option>
                            <option>Mask</option>
                            <option>Roller</option>
                            <option>Roller Frame</option>
                            <option>Roller Cover</option>
                            <option>Wire Brush</option>
                          </select>
                        </div>
                      </Col>
                    </Row>
                    <Row>
                      <Col lg={6} md={6} sm={12}>
                        <div>
                          <label className="business-labels">
                            <span className="business-label-headings">
                              Type :
                            </span>
                          </label>
                          <br />
                          <select className="business-inputs">
                            <option>Type</option>
                            <option>Matt</option>
                            <option>High Gross</option>
                          </select>
                        </div>
                      </Col>
                      <Col lg={6} md={6} sm={12}>
                        <input type="submit" />
                      </Col>
                    </Row>
                  </Container>
                </section>
              </div>
            )}
            {openDropdown === "dropdown10" && (
              <div>
                {/* Dropdown Content for Steel */}
                <section className="pt-4">
                  <Container>
                    <Row>
                      <Col lg={6} md={6} sm={12}>
                        <div>
                          <label className="business-labels">
                            <span className="business-label-headings">
                              Shop Name:
                            </span>
                          </label>
                          <br />
                          <input
                            className="business-inputs"
                            type="text"
                            placeholder="Shop Name"
                            required
                          />
                        </div>
                      </Col>
                      <Col lg={6} md={6} sm={12}>
                        <div>
                          <label className="business-labels">
                            <span className="business-label-headings">
                              Contact Number:
                            </span>
                          </label>
                          <br />
                          <input
                            className="business-inputs"
                            type="text"
                            placeholder="Contact Number"
                            required
                          />
                        </div>
                      </Col>
                    </Row>
                    <Row>
                      <Col lg={6} md={6} sm={12}>
                        <div>
                          <label className="business-labels">
                            <span className="business-label-headings">
                              Shop Address:
                            </span>
                          </label>
                          <br />
                          <input
                            className="business-inputs"
                            type="text"
                            placeholder="Shop Address"
                            required
                          />
                        </div>
                      </Col>
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
                    </Row>
                    <Row>
                      <Col lg={6} md={6} sm={12}>
                        <div>
                          <label className="business-labels">
                            <span className="business-label-headings">
                              NTN:
                            </span>
                          </label>
                          <br />
                          <input
                            className="business-inputs"
                            type="text"
                            placeholder="NTN"
                            required
                          />
                        </div>
                      </Col>
                      <Col lg={6} md={6} sm={12}>
                        <div>
                          <label className="business-labels">
                            <span className="business-label-headings">
                              Product Name:
                            </span>
                          </label>
                          <br />
                          <input
                            className="business-inputs"
                            type="text"
                            placeholder="Product Name"
                            required
                          />
                        </div>
                      </Col>
                    </Row>
                    <Row>
                      <Col lg={6} md={6} sm={12}>
                        <div>
                          <label className="business-labels">
                            <span className="business-label-headings">
                              Company Name:
                            </span>
                          </label>
                          <br />
                          <input
                            className="business-inputs"
                            type="text"
                            placeholder="Company Name"
                            required
                          />
                        </div>
                      </Col>
                      <Col lg={6} md={6} sm={12}>
                        <div>
                          <label className="business-labels">
                            <span className="business-label-headings">
                              Price:
                            </span>
                          </label>
                          <br />
                          <input
                            className="business-inputs"
                            type="text"
                            placeholder="Price"
                            required
                          />
                        </div>
                      </Col>
                    </Row>
                    <Row>
                      <Col lg={6} md={6} sm={12}>
                        <div>
                          <label className="business-labels">
                            <span className="business-label-headings">
                              Quantity:
                            </span>
                          </label>
                          <br />
                          <input
                            className="business-inputs"
                            type="text"
                            placeholder="Quantity"
                            required
                          />
                        </div>
                      </Col>
                      <Col lg={6} md={6} sm={12}>
                        <div>
                          <label className="business-labels">
                            <span className="business-label-headings">
                              Category:
                            </span>
                          </label>
                          <br />
                          <select className="business-inputs">
                            <option>Category</option>
                            <option>Stainless Steel</option>
                            <option>Magnet Steel</option>
                          </select>
                        </div>
                      </Col>
                    </Row>
                    <Row>
                      <Col lg={6} md={6} sm={12}>
                        <div>
                          <label className="business-labels">
                            <span className="business-label-headings">
                              Dimension:
                            </span>
                          </label>
                          <br />
                          <input
                            className="business-inputs"
                            type="text"
                            placeholder="Dimension"
                            required
                          />
                        </div>
                      </Col>
                      <Col lg={6} md={6} sm={12}>
                        <div>
                          <label className="business-labels">
                            <span className="business-label-headings">
                              Length:
                            </span>
                          </label>
                          <br />
                          <input
                            className="business-inputs"
                            type="text"
                            placeholder="Length"
                            required
                          />
                        </div>
                      </Col>
                    </Row>
                    <Row>
                      <Col lg={6} md={6} sm={12}>
                        <input type="submit" />
                      </Col>
                    </Row>
                  </Container>
                </section>
              </div>
            )}
            {openDropdown === "dropdown11" && (
              <div>
                {/* Dropdown Content for Iron */}
                <section className="pt-4">
                  <Container>
                    <Row>
                      <Col lg={6} md={6} sm={12}>
                        <div>
                          <label className="business-labels">
                            <span className="business-label-headings">
                              Shop Name:
                            </span>
                          </label>
                          <br />
                          <input
                            className="business-inputs"
                            type="text"
                            placeholder="Shop Name"
                            required
                          />
                        </div>
                      </Col>
                      <Col lg={6} md={6} sm={12}>
                        <div>
                          <label className="business-labels">
                            <span className="business-label-headings">
                              Contact Number:
                            </span>
                          </label>
                          <br />
                          <input
                            className="business-inputs"
                            type="text"
                            placeholder="Contact Number"
                            required
                          />
                        </div>
                      </Col>
                    </Row>
                    <Row>
                      <Col lg={6} md={6} sm={12}>
                        <div>
                          <label className="business-labels">
                            <span className="business-label-headings">
                              Shop Address:
                            </span>
                          </label>
                          <br />
                          <input
                            className="business-inputs"
                            type="text"
                            placeholder="Shop Address"
                            required
                          />
                        </div>
                      </Col>
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
                    </Row>
                    <Row>
                      <Col lg={6} md={6} sm={12}>
                        <div>
                          <label className="business-labels">
                            <span className="business-label-headings">
                              NTN:
                            </span>
                          </label>
                          <br />
                          <input
                            className="business-inputs"
                            type="text"
                            placeholder="NTN"
                            required
                          />
                        </div>
                      </Col>
                      <Col lg={6} md={6} sm={12}>
                        <div>
                          <label className="business-labels">
                            <span className="business-label-headings">
                              Product Name:
                            </span>
                          </label>
                          <br />
                          <input
                            className="business-inputs"
                            type="text"
                            placeholder="Product Name"
                            required
                          />
                        </div>
                      </Col>
                    </Row>
                    <Row>
                      <Col lg={6} md={6} sm={12}>
                        <div>
                          <label className="business-labels">
                            <span className="business-label-headings">
                              Company Name:
                            </span>
                          </label>
                          <br />
                          <input
                            className="business-inputs"
                            type="text"
                            placeholder="Company Name"
                            required
                          />
                        </div>
                      </Col>
                      <Col lg={6} md={6} sm={12}>
                        <div>
                          <label className="business-labels">
                            <span className="business-label-headings">
                              Price:
                            </span>
                          </label>
                          <br />
                          <input
                            className="business-inputs"
                            type="text"
                            placeholder="Price"
                            required
                          />
                        </div>
                      </Col>
                    </Row>
                    <Row>
                      <Col lg={6} md={6} sm={12}>
                        <div>
                          <label className="business-labels">
                            <span className="business-label-headings">
                              Dimension:
                            </span>
                          </label>
                          <br />
                          <input
                            className="business-inputs"
                            type="text"
                            placeholder="Dimension"
                            required
                          />
                        </div>
                      </Col>
                      <Col lg={6} md={6} sm={12}>
                        <div>
                          <label className="business-labels">
                            <span className="business-label-headings">
                              Thickness:
                            </span>
                          </label>
                          <br />
                          <input
                            className="business-inputs"
                            type="text"
                            placeholder="Thickness"
                            required
                          />
                        </div>
                      </Col>
                    </Row>
                    <Row>
                      <Col lg={6} md={6} sm={12}>
                        <div>
                          <label className="business-labels">
                            <span className="business-label-headings">
                              Color:
                            </span>
                          </label>
                          <br />
                          <input
                            className="business-inputs"
                            type="text"
                            placeholder="Color"
                            required
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
            )}
            {openDropdown === "dropdown12" && (
              <div>
                {/* Dropdown Content for Aluminum */}
                <section className="pt-4">
                  <Container>
                    <Row>
                      <Col lg={6} md={6} sm={12}>
                        <div>
                          <label className="business-labels">
                            <span className="business-label-headings">
                              Shop Name:
                            </span>
                          </label>
                          <br />
                          <input
                            className="business-inputs"
                            type="text"
                            placeholder="Shop Name"
                            required
                          />
                        </div>
                      </Col>
                      <Col lg={6} md={6} sm={12}>
                        <div>
                          <label className="business-labels">
                            <span className="business-label-headings">
                              Contact Number:
                            </span>
                          </label>
                          <br />
                          <input
                            className="business-inputs"
                            type="text"
                            placeholder="Contact Number"
                            required
                          />
                        </div>
                      </Col>
                    </Row>
                    <Row>
                      <Col lg={6} md={6} sm={12}>
                        <div>
                          <label className="business-labels">
                            <span className="business-label-headings">
                              Shop Address:
                            </span>
                          </label>
                          <br />
                          <input
                            className="business-inputs"
                            type="text"
                            placeholder="Shop Address"
                            required
                          />
                        </div>
                      </Col>
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
                    </Row>
                    <Row>
                      <Col lg={6} md={6} sm={12}>
                        <div>
                          <label className="business-labels">
                            <span className="business-label-headings">
                              NTN:
                            </span>
                          </label>
                          <br />
                          <input
                            className="business-inputs"
                            type="text"
                            placeholder="NTN"
                            required
                          />
                        </div>
                      </Col>
                      <Col lg={6} md={6} sm={12}>
                        <div>
                          <label className="business-labels">
                            <span className="business-label-headings">
                              Product Name:
                            </span>
                          </label>
                          <br />
                          <input
                            className="business-inputs"
                            type="text"
                            placeholder="Product Name"
                            required
                          />
                        </div>
                      </Col>
                    </Row>
                    <Row>
                      <Col lg={6} md={6} sm={12}>
                        <div>
                          <label className="business-labels">
                            <span className="business-label-headings">
                              Company Name:
                            </span>
                          </label>
                          <br />
                          <input
                            className="business-inputs"
                            type="text"
                            placeholder="Company Name"
                            required
                          />
                        </div>
                      </Col>
                      <Col lg={6} md={6} sm={12}>
                        <div>
                          <label className="business-labels">
                            <span className="business-label-headings">
                              Price:
                            </span>
                          </label>
                          <br />
                          <input
                            className="business-inputs"
                            type="text"
                            placeholder="Price"
                            required
                          />
                        </div>
                      </Col>
                    </Row>
                    <Row>
                      <Col lg={6} md={6} sm={12}>
                        <div>
                          <label className="business-labels">
                            <span className="business-label-headings">
                              Size:
                            </span>
                          </label>
                          <br />
                          <input
                            className="business-inputs"
                            type="text"
                            placeholder="Size"
                            required
                          />
                        </div>
                      </Col>
                      <Col lg={6} md={6} sm={12}>
                        <div>
                          <label className="business-labels">
                            <span className="business-label-headings">
                              Thickness:
                            </span>
                          </label>
                          <br />
                          <input
                            className="business-inputs"
                            type="text"
                            placeholder="Thickness"
                            required
                          />
                        </div>
                      </Col>
                    </Row>
                    <Row>
                      <Col lg={6} md={6} sm={12}>
                        <div>
                          <label className="business-labels">
                            <span className="business-label-headings">
                              Color:
                            </span>
                          </label>
                          <br />
                          <input
                            className="business-inputs"
                            type="text"
                            placeholder="Color"
                            required
                          />
                        </div>
                      </Col>
                      <Col lg={6} md={6} sm={12}>
                        <div>
                          <label className="business-labels">
                            <span className="business-label-headings">
                              Weight:
                            </span>
                          </label>
                          <br />
                          <input
                            className="business-inputs"
                            type="text"
                            placeholder="Weight"
                            required
                          />
                        </div>
                      </Col>
                    </Row>
                    <Row>
                      <Col lg={6} md={6} sm={12}>
                        <div>
                          <label className="business-labels">
                            <span className="business-label-headings">
                              Length:
                            </span>
                          </label>
                          <br />
                          <input
                            className="business-inputs"
                            type="text"
                            placeholder="Length"
                            required
                          />
                        </div>
                      </Col>
                      <Col lg={6} md={6} sm={12}>
                        <div>
                          <label className="business-labels">
                            <span className="business-label-headings">
                              Fitting:
                            </span>
                          </label>
                          <br />
                          <input
                            className="business-inputs"
                            type="text"
                            placeholder="Fitting"
                            required
                          />
                        </div>
                      </Col>
                    </Row>
                    <Row>
                      <Col lg={6} md={6} sm={12}>
                        <div>
                          <input type="submit" />
                        </div>
                      </Col>
                    </Row>
                  </Container>
                </section>
              </div>
            )}
            {openDropdown === "dropdown13" && (
              <div>
                {/* Dropdown Content for Glass */}
                <section className="pt-4">
                  <Container>
                    <Row>
                      <Col lg={6} md={6} sm={12}>
                        <div>
                          <label className="business-labels">
                            <span className="business-label-headings">
                              Shop Name:
                            </span>
                          </label>
                          <br />
                          <input
                            className="business-inputs"
                            type="text"
                            placeholder="Shop Name"
                            required
                          />
                        </div>
                      </Col>
                      <Col lg={6} md={6} sm={12}>
                        <div>
                          <label className="business-labels">
                            <span className="business-label-headings">
                              Contact Number:
                            </span>
                          </label>
                          <br />
                          <input
                            className="business-inputs"
                            type="text"
                            placeholder="Contact Number"
                            required
                          />
                        </div>
                      </Col>
                    </Row>
                    <Row>
                      <Col lg={6} md={6} sm={12}>
                        <div>
                          <label className="business-labels">
                            <span className="business-label-headings">
                              Shop Address:
                            </span>
                          </label>
                          <br />
                          <input
                            className="business-inputs"
                            type="text"
                            placeholder="Shop Address"
                            required
                          />
                        </div>
                      </Col>
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
                    </Row>
                    <Row>
                      <Col lg={6} md={6} sm={12}>
                        <div>
                          <label className="business-labels">
                            <span className="business-label-headings">
                              NTN:
                            </span>
                          </label>
                          <br />
                          <input
                            className="business-inputs"
                            type="text"
                            placeholder="NTN"
                            required
                          />
                        </div>
                      </Col>
                      <Col lg={6} md={6} sm={12}>
                        <div>
                          <label className="business-labels">
                            <span className="business-label-headings">
                              Product Name:
                            </span>
                          </label>
                          <br />
                          <input
                            className="business-inputs"
                            type="text"
                            placeholder="Product Name"
                            required
                          />
                        </div>
                      </Col>
                    </Row>
                    <Row>
                      <Col lg={6} md={6} sm={12}>
                        <div>
                          <label className="business-labels">
                            <span className="business-label-headings">
                              Company Name:
                            </span>
                          </label>
                          <br />
                          <input
                            className="business-inputs"
                            type="text"
                            placeholder="Company Name"
                            required
                          />
                        </div>
                      </Col>
                      <Col lg={6} md={6} sm={12}>
                        <div>
                          <label className="business-labels">
                            <span className="business-label-headings">
                              Price:
                            </span>
                          </label>
                          <br />
                          <input
                            className="business-inputs"
                            type="text"
                            placeholder="Price"
                            required
                          />
                        </div>
                      </Col>
                    </Row>
                    <Row>
                      <Col lg={6} md={6} sm={12}>
                        <div>
                          <label className="business-labels">
                            <span className="business-label-headings">
                              Size:
                            </span>
                          </label>
                          <br />
                          <input
                            className="business-inputs"
                            type="text"
                            placeholder="Size"
                            required
                          />
                        </div>
                      </Col>
                      <Col lg={6} md={6} sm={12}>
                        <div>
                          <label className="business-labels">
                            <span className="business-label-headings">
                              Thickness:
                            </span>
                          </label>
                          <br />
                          <input
                            className="business-inputs"
                            type="text"
                            placeholder="Thickness"
                            required
                          />
                        </div>
                      </Col>
                    </Row>
                    <Row>
                      <Col lg={6} md={6} sm={12}>
                        <div>
                          <label className="business-labels">
                            <span className="business-label-headings">
                              Color:
                            </span>
                          </label>
                          <br />
                          <input
                            className="business-inputs"
                            type="text"
                            placeholder="Color"
                            required
                          />
                        </div>
                      </Col>
                      <Col lg={6} md={6} sm={12}>
                        <div>
                          <label className="business-labels">
                            <span className="business-label-headings">
                              Tempered :
                            </span>
                          </label>
                          <br />
                          <select className="business-inputs">
                            <option>Tempered</option>
                            <option>Yes</option>
                            <option>No</option>
                          </select>
                        </div>
                      </Col>
                    </Row>
                    <Row>
                      <Col lg={6} md={6} sm={12}>
                        <div>
                          <input type="submit" />
                        </div>
                      </Col>
                    </Row>
                  </Container>
                </section>
              </div>
            )}
            {openDropdown === "dropdown14" && (
              <div>
                {/* Dropdown Content for Hardware */}
                <section className="pt-4">
                  <Container>
                    <Row>
                      <Col lg={6} md={6} sm={12}>
                        <div>
                          <label className="business-labels">
                            <span className="business-label-headings">
                              Shop Name:
                            </span>
                          </label>
                          <br />
                          <input
                            className="business-inputs"
                            type="text"
                            placeholder="Shop Name"
                            required
                          />
                        </div>
                      </Col>
                      <Col lg={6} md={6} sm={12}>
                        <div>
                          <label className="business-labels">
                            <span className="business-label-headings">
                              Contact Number:
                            </span>
                          </label>
                          <br />
                          <input
                            className="business-inputs"
                            type="text"
                            placeholder="Contact Number"
                            required
                          />
                        </div>
                      </Col>
                    </Row>
                    <Row>
                      <Col lg={6} md={6} sm={12}>
                        <div>
                          <label className="business-labels">
                            <span className="business-label-headings">
                              Shop Address:
                            </span>
                          </label>
                          <br />
                          <input
                            className="business-inputs"
                            type="text"
                            placeholder="Shop Address"
                            required
                          />
                        </div>
                      </Col>
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
                    </Row>
                    <Row>
                      <Col lg={6} md={6} sm={12}>
                        <div>
                          <label className="business-labels">
                            <span className="business-label-headings">
                              NTN:
                            </span>
                          </label>
                          <br />
                          <input
                            className="business-inputs"
                            type="text"
                            placeholder="NTN"
                            required
                          />
                        </div>
                      </Col>
                      <Col lg={6} md={6} sm={12}>
                        <div>
                          <label className="business-labels">
                            <span className="business-label-headings">
                              Product Name:
                            </span>
                          </label>
                          <br />
                          <input
                            className="business-inputs"
                            type="text"
                            placeholder="Product Name"
                            required
                          />
                        </div>
                      </Col>
                    </Row>
                    <Row>
                      <Col lg={6} md={6} sm={12}>
                        <div>
                          <label className="business-labels">
                            <span className="business-label-headings">
                              Company Name:
                            </span>
                          </label>
                          <br />
                          <input
                            className="business-inputs"
                            type="text"
                            placeholder="Company Name"
                            required
                          />
                        </div>
                      </Col>
                      <Col lg={6} md={6} sm={12}>
                        <div>
                          <label className="business-labels">
                            <span className="business-label-headings">
                              Price:
                            </span>
                          </label>
                          <br />
                          <input
                            className="business-inputs"
                            type="text"
                            placeholder="Price"
                            required
                          />
                        </div>
                      </Col>
                    </Row>
                    <Row>
                      <Col lg={6} md={6} sm={12}>
                        <div>
                          <label className="business-labels">
                            <span className="business-label-headings">
                              Size: (inches)
                            </span>
                          </label>
                          <br />
                          <input
                            className="business-inputs"
                            type="text"
                            placeholder="Size"
                            required
                          />
                        </div>
                      </Col>
                      <Col lg={6} md={6} sm={12}>
                        <div>
                          <label className="business-labels">
                            <span className="business-label-headings">
                              Thickness:
                            </span>
                          </label>
                          <br />
                          <input
                            className="business-inputs"
                            type="text"
                            placeholder="Thickness"
                            required
                          />
                        </div>
                      </Col>
                    </Row>
                    <Row>
                      <Col lg={6} md={6} sm={12}>
                        <div>
                          <label className="business-labels">
                            <span className="business-label-headings">
                              Color:
                            </span>
                          </label>
                          <br />
                          <input
                            className="business-inputs"
                            type="text"
                            placeholder="Color"
                            required
                          />
                        </div>
                      </Col>
                      <Col lg={6} md={6} sm={12}>
                        <div>
                          <label className="business-labels">
                            <span className="business-label-headings">
                              Weight:
                            </span>
                          </label>
                          <br />
                          <input
                            className="business-inputs"
                            type="text"
                            placeholder="Weight"
                            required
                          />
                        </div>
                      </Col>
                    </Row>
                    <Row>
                      <Col lg={6} md={6} sm={12}>
                        <div>
                          <label className="business-labels">
                            <span className="business-label-headings">
                              Type:
                            </span>
                          </label>
                          <br />
                          <input
                            className="business-inputs"
                            type="text"
                            placeholder="Type"
                            required
                          />
                        </div>
                      </Col>
                      <Col lg={6} md={6} sm={12}>
                        <div>
                          <label className="business-labels">
                            <span className="business-label-headings">
                              Quantity:
                            </span>
                          </label>
                          <br />
                          <input
                            className="business-inputs"
                            type="text"
                            placeholder="Quantity"
                            required
                          />
                        </div>
                      </Col>
                    </Row>
                    <Row>
                      <Col>
                        <div>
                          <input type="submit" />
                        </div>
                      </Col>
                    </Row>
                  </Container>
                </section>
              </div>
            )}
            {openDropdown === "dropdown15" && (
              <div>
                {/* Dropdown Content for Electronics */}
                <section className="pt-4">
                  <Container>
                    <Row>
                      <Col lg={6} md={6} sm={12}>
                        <div>
                          <label className="business-labels">
                            <span className="business-label-headings">
                              Shop Name:
                            </span>
                          </label>
                          <br />
                          <input
                            className="business-inputs"
                            type="text"
                            placeholder="Shop Name"
                            required
                          />
                        </div>
                      </Col>
                      <Col lg={6} md={6} sm={12}>
                        <div>
                          <label className="business-labels">
                            <span className="business-label-headings">
                              Contact Number:
                            </span>
                          </label>
                          <br />
                          <input
                            className="business-inputs"
                            type="text"
                            placeholder="Contact Number"
                            required
                          />
                        </div>
                      </Col>
                    </Row>
                    <Row>
                      <Col lg={6} md={6} sm={12}>
                        <div>
                          <label className="business-labels">
                            <span className="business-label-headings">
                              Shop Address:
                            </span>
                          </label>
                          <br />
                          <input
                            className="business-inputs"
                            type="text"
                            placeholder="Shop Address"
                            required
                          />
                        </div>
                      </Col>
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
                    </Row>
                    <Row>
                      <Col lg={6} md={6} sm={12}>
                        <div>
                          <label className="business-labels">
                            <span className="business-label-headings">
                              NTN:
                            </span>
                          </label>
                          <br />
                          <input
                            className="business-inputs"
                            type="text"
                            placeholder="NTN"
                            required
                          />
                        </div>
                      </Col>
                      <Col lg={6} md={6} sm={12}>
                        <div>
                          <label className="business-labels">
                            <span className="business-label-headings">
                              Product Name:
                            </span>
                          </label>
                          <br />
                          <input
                            className="business-inputs"
                            type="text"
                            placeholder="Product Name"
                            required
                          />
                        </div>
                      </Col>
                    </Row>
                    <Row>
                      <Col lg={6} md={6} sm={12}>
                        <div>
                          <label className="business-labels">
                            <span className="business-label-headings">
                              Company Name:
                            </span>
                          </label>
                          <br />
                          <input
                            className="business-inputs"
                            type="text"
                            placeholder="Company Name"
                            required
                          />
                        </div>
                      </Col>
                      <Col lg={6} md={6} sm={12}>
                        <div>
                          <label className="business-labels">
                            <span className="business-label-headings">
                              Price:
                            </span>
                          </label>
                          <br />
                          <input
                            className="business-inputs"
                            type="text"
                            placeholder="Price"
                            required
                          />
                        </div>
                      </Col>
                    </Row>
                    <Row>
                      <Col lg={6} md={6} sm={12}>
                        <div>
                          <label className="business-labels">
                            <span className="business-label-headings">
                              Size:
                            </span>
                          </label>
                          <br />
                          <input
                            className="business-inputs"
                            type="text"
                            placeholder="Size"
                            required
                          />
                        </div>
                      </Col>
                      <Col lg={6} md={6} sm={12}>
                        <div>
                          <label className="business-labels">
                            <span className="business-label-headings">
                              Warranty:
                            </span>
                          </label>
                          <br />
                          <input
                            className="business-inputs"
                            type="text"
                            placeholder="Warranty"
                            required
                          />
                        </div>
                      </Col>
                    </Row>
                    <Row>
                      <Col lg={6} md={6} sm={12}>
                        <div>
                          <label className="business-labels">
                            <span className="business-label-headings">
                              After sale services :
                            </span>
                          </label>
                          <br />
                          <select className="business-inputs">
                            <option>After sale services</option>
                            <option>Yes</option>
                            <option>No</option>
                          </select>
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
            )}
            {openDropdown === "dropdown16" && (
              <div>
                {/* Dropdown Content for Electric */}
                <section className="pt-4">
                  <Container>
                    <Row>
                      <Col lg={6} md={6} sm={12}>
                        <div>
                          <label className="business-labels">
                            <span className="business-label-headings">
                              Shop Name:
                            </span>
                          </label>
                          <br />
                          <input
                            className="business-inputs"
                            type="text"
                            placeholder="Shop Name"
                            required
                          />
                        </div>
                      </Col>
                      <Col lg={6} md={6} sm={12}>
                        <div>
                          <label className="business-labels">
                            <span className="business-label-headings">
                              Contact Number:
                            </span>
                          </label>
                          <br />
                          <input
                            className="business-inputs"
                            type="text"
                            placeholder="Contact Number"
                            required
                          />
                        </div>
                      </Col>
                    </Row>
                    <Row>
                      <Col lg={6} md={6} sm={12}>
                        <div>
                          <label className="business-labels">
                            <span className="business-label-headings">
                              Shop Address:
                            </span>
                          </label>
                          <br />
                          <input
                            className="business-inputs"
                            type="text"
                            placeholder="Shop Address"
                            required
                          />
                        </div>
                      </Col>
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
                    </Row>
                    <Row>
                      <Col lg={6} md={6} sm={12}>
                        <div>
                          <label className="business-labels">
                            <span className="business-label-headings">
                              NTN:
                            </span>
                          </label>
                          <br />
                          <input
                            className="business-inputs"
                            type="text"
                            placeholder="NTN"
                            required
                          />
                        </div>
                      </Col>
                      <Col lg={6} md={6} sm={12}>
                        <div>
                          <label className="business-labels">
                            <span className="business-label-headings">
                              Product Name:
                            </span>
                          </label>
                          <br />
                          <input
                            className="business-inputs"
                            type="text"
                            placeholder="Product Name"
                            required
                          />
                        </div>
                      </Col>
                    </Row>
                    <Row>
                      <Col lg={6} md={6} sm={12}>
                        <div>
                          <label className="business-labels">
                            <span className="business-label-headings">
                              Company Name:
                            </span>
                          </label>
                          <br />
                          <input
                            className="business-inputs"
                            type="text"
                            placeholder="Company Name"
                            required
                          />
                        </div>
                      </Col>
                      <Col lg={6} md={6} sm={12}>
                        <div>
                          <label className="business-labels">
                            <span className="business-label-headings">
                              Price:
                            </span>
                          </label>
                          <br />
                          <input
                            className="business-inputs"
                            type="text"
                            placeholder="Price"
                            required
                          />
                        </div>
                      </Col>
                    </Row>
                    <Row>
                      <Col lg={6} md={6} sm={12}>
                        <div>
                          <label className="business-labels">
                            <span className="business-label-headings">
                              Size:
                            </span>
                          </label>
                          <br />
                          <input
                            className="business-inputs"
                            type="text"
                            placeholder="Size"
                            required
                          />
                        </div>
                      </Col>
                      <Col lg={6} md={6} sm={12}>
                        <div>
                          <label className="business-labels">
                            <span className="business-label-headings">
                              Color:
                            </span>
                          </label>
                          <br />
                          <input
                            className="business-inputs"
                            type="text"
                            placeholder="Color"
                            required
                          />
                        </div>
                      </Col>
                    </Row>
                    <Row>
                      <Col lg={6} md={6} sm={12}>
                        <div>
                          <label className="business-labels">
                            <span className="business-label-headings">
                              Length:
                            </span>
                          </label>
                          <br />
                          <input
                            className="business-inputs"
                            type="text"
                            placeholder="Length"
                            required
                          />
                        </div>
                      </Col>
                      <Col lg={6} md={6} sm={12}>
                        <div>
                          <label className="business-labels">
                            <span className="business-label-headings">
                              Material:
                            </span>
                          </label>
                          <br />
                          <input
                            className="business-inputs"
                            type="text"
                            placeholder="Material"
                            required
                          />
                        </div>
                      </Col>
                    </Row>
                    <Row>
                      <Col>
                        <div>
                          <input type="submit" />
                        </div>
                      </Col>
                    </Row>
                  </Container>
                </section>
              </div>
            )}
            {openDropdown === "dropdown17" && (
              <div>
                {/* Dropdown Content for Wall Panelling */}
                <section className="pt-4">
                  <Container>
                    <Row>
                      <Col lg={6} md={6} sm={12}>
                        <div>
                          <label className="business-labels">
                            <span className="business-label-headings">
                              Shop Name:
                            </span>
                          </label>
                          <br />
                          <input
                            className="business-inputs"
                            type="text"
                            placeholder="Shop Name"
                            required
                          />
                        </div>
                      </Col>
                      <Col lg={6} md={6} sm={12}>
                        <div>
                          <label className="business-labels">
                            <span className="business-label-headings">
                              Contact Number:
                            </span>
                          </label>
                          <br />
                          <input
                            className="business-inputs"
                            type="text"
                            placeholder="Contact Number"
                            required
                          />
                        </div>
                      </Col>
                    </Row>
                    <Row>
                      <Col lg={6} md={6} sm={12}>
                        <div>
                          <label className="business-labels">
                            <span className="business-label-headings">
                              Shop Address:
                            </span>
                          </label>
                          <br />
                          <input
                            className="business-inputs"
                            type="text"
                            placeholder="Shop Address"
                            required
                          />
                        </div>
                      </Col>
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
                    </Row>
                    <Row>
                      <Col lg={6} md={6} sm={12}>
                        <div>
                          <label className="business-labels">
                            <span className="business-label-headings">
                              NTN:
                            </span>
                          </label>
                          <br />
                          <input
                            className="business-inputs"
                            type="text"
                            placeholder="NTN"
                            required
                          />
                        </div>
                      </Col>
                      <Col lg={6} md={6} sm={12}>
                        <div>
                          <label className="business-labels">
                            <span className="business-label-headings">
                              Product Name:
                            </span>
                          </label>
                          <br />
                          <input
                            className="business-inputs"
                            type="text"
                            placeholder="Product Name"
                            required
                          />
                        </div>
                      </Col>
                    </Row>
                    <Row>
                      <Col lg={6} md={6} sm={12}>
                        <div>
                          <label className="business-labels">
                            <span className="business-label-headings">
                              Company Name:
                            </span>
                          </label>
                          <br />
                          <input
                            className="business-inputs"
                            type="text"
                            placeholder="Company Name"
                            required
                          />
                        </div>
                      </Col>
                      <Col lg={6} md={6} sm={12}>
                        <div>
                          <label className="business-labels">
                            <span className="business-label-headings">
                              Price:
                            </span>
                          </label>
                          <br />
                          <input
                            className="business-inputs"
                            type="text"
                            placeholder="Price"
                            required
                          />
                        </div>
                      </Col>
                    </Row>
                    <Row>
                      <Col lg={6} md={6} sm={12}>
                        <div>
                          <label className="business-labels">
                            <span className="business-label-headings">
                              Size:
                            </span>
                          </label>
                          <br />
                          <input
                            className="business-inputs"
                            type="text"
                            placeholder="Size"
                            required
                          />
                        </div>
                      </Col>
                      <Col lg={6} md={6} sm={12}>
                        <div>
                          <label className="business-labels">
                            <span className="business-label-headings">
                              Color:
                            </span>
                          </label>
                          <br />
                          <input
                            className="business-inputs"
                            type="text"
                            placeholder="Color"
                            required
                          />
                        </div>
                      </Col>
                    </Row>
                    <Row>
                      <Col lg={6} md={6} sm={12}>
                        <div>
                          <input type="submit" />
                        </div>
                      </Col>
                    </Row>
                  </Container>
                </section>
              </div>
            )}
            {openDropdown === "dropdown18" && (
              <div>
                {/* Dropdown Content for Solar System */}
                <section className="pt-4">
                  <Container>
                    <Row>
                      <Col lg={6} md={6} sm={12}>
                        <div>
                          <label className="business-labels">
                            <span className="business-label-headings">
                              Shop Name:
                            </span>
                          </label>
                          <br />
                          <input
                            className="business-inputs"
                            type="text"
                            placeholder="Shop Name"
                            required
                          />
                        </div>
                      </Col>
                      <Col lg={6} md={6} sm={12}>
                        <div>
                          <label className="business-labels">
                            <span className="business-label-headings">
                              Contact Number:
                            </span>
                          </label>
                          <br />
                          <input
                            className="business-inputs"
                            type="text"
                            placeholder="Contact Number"
                            required
                          />
                        </div>
                      </Col>
                    </Row>
                    <Row>
                      <Col lg={6} md={6} sm={12}>
                        <div>
                          <label className="business-labels">
                            <span className="business-label-headings">
                              Shop Address:
                            </span>
                          </label>
                          <br />
                          <input
                            className="business-inputs"
                            type="text"
                            placeholder="Shop Address"
                            required
                          />
                        </div>
                      </Col>
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
                    </Row>
                    <Row>
                      <Col lg={6} md={6} sm={12}>
                        <div>
                          <label className="business-labels">
                            <span className="business-label-headings">
                              NTN:
                            </span>
                          </label>
                          <br />
                          <input
                            className="business-inputs"
                            type="text"
                            placeholder="NTN"
                            required
                          />
                        </div>
                      </Col>
                      <Col lg={6} md={6} sm={12}>
                        <div>
                          <label className="business-labels">
                            <span className="business-label-headings">
                              Product Name:
                            </span>
                          </label>
                          <br />
                          <input
                            className="business-inputs"
                            type="text"
                            placeholder="Product Name"
                            required
                          />
                        </div>
                      </Col>
                    </Row>
                    <Row>
                      <Col lg={6} md={6} sm={12}>
                        <div>
                          <label className="business-labels">
                            <span className="business-label-headings">
                              Company Name:
                            </span>
                          </label>
                          <br />
                          <input
                            className="business-inputs"
                            type="text"
                            placeholder="Company Name"
                            required
                          />
                        </div>
                      </Col>
                      <Col lg={6} md={6} sm={12}>
                        <div>
                          <label className="business-labels">
                            <span className="business-label-headings">
                              Price:
                            </span>
                          </label>
                          <br />
                          <input
                            className="business-inputs"
                            type="text"
                            placeholder="Price"
                            required
                          />
                        </div>
                      </Col>
                    </Row>
                    <Row>
                      <Col lg={6} md={6} sm={12}>
                        <div>
                          <label className="business-labels">
                            <span className="business-label-headings">
                              Size:
                            </span>
                          </label>
                          <br />
                          <input
                            className="business-inputs"
                            type="text"
                            placeholder="Size"
                            required
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
            )}
            {openDropdown === "dropdown19" && (
              <div>
                {/* Dropdown Content for Nursery */}
                <section className="pt-4">
                  <Container>
                    <Row>
                      <Col lg={6} md={6} sm={12}>
                        <div>
                          <label className="business-labels">
                            <span className="business-label-headings">
                              Shop Name:
                            </span>
                          </label>
                          <br />
                          <input
                            className="business-inputs"
                            type="text"
                            placeholder="Shop Name"
                            required
                          />
                        </div>
                      </Col>
                      <Col lg={6} md={6} sm={12}>
                        <div>
                          <label className="business-labels">
                            <span className="business-label-headings">
                              Contact Number:
                            </span>
                          </label>
                          <br />
                          <input
                            className="business-inputs"
                            type="text"
                            placeholder="Contact Number"
                            required
                          />
                        </div>
                      </Col>
                    </Row>
                    <Row>
                      <Col lg={6} md={6} sm={12}>
                        <div>
                          <label className="business-labels">
                            <span className="business-label-headings">
                              Shop Address:
                            </span>
                          </label>
                          <br />
                          <input
                            className="business-inputs"
                            type="text"
                            placeholder="Shop Address"
                            required
                          />
                        </div>
                      </Col>
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
                    </Row>
                    <Row>
                      <Col lg={6} md={6} sm={12}>
                        <div>
                          <label className="business-labels">
                            <span className="business-label-headings">
                              NTN:
                            </span>
                          </label>
                          <br />
                          <input
                            className="business-inputs"
                            type="text"
                            placeholder="NTN"
                            required
                          />
                        </div>
                      </Col>
                      <Col lg={6} md={6} sm={12}>
                        <div>
                          <label className="business-labels">
                            <span className="business-label-headings">
                              Plant Name:
                            </span>
                          </label>
                          <br />
                          <input
                            className="business-inputs"
                            type="text"
                            placeholder="Plant Name"
                            required
                          />
                        </div>
                      </Col>
                    </Row>
                    <Row>
                      <Col lg={6} md={6} sm={12}>
                        <div>
                          <label className="business-labels">
                            <span className="business-label-headings">
                              Plant Size:
                            </span>
                          </label>
                          <br />
                          <input
                            className="business-inputs"
                            type="text"
                            placeholder="Plant Size"
                            required
                          />
                        </div>
                      </Col>
                      <Col lg={6} md={6} sm={12}>
                        <div>
                          <label className="business-labels">
                            <span className="business-label-headings">
                              Price:
                            </span>
                          </label>
                          <br />
                          <input
                            className="business-inputs"
                            type="text"
                            placeholder="Price"
                            required
                          />
                        </div>
                      </Col>
                    </Row>
                    <Row>
                      <Col lg={6} md={6} sm={12}>
                        <div>
                          <label className="business-labels">
                            <span className="business-label-headings">
                              Color:
                            </span>
                          </label>
                          <br />
                          <input
                            className="business-inputs"
                            type="text"
                            placeholder="Color"
                            required
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
            )}
            {openDropdown === "dropdown20" && (
              <div>
                {/* Dropdown Content for Concrete Plant */}
                <section className="pt-4">
                  <Container>
                    <Row>
                      <Col lg={6} md={6} sm={12}>
                        <div>
                          <label className="business-labels">
                            <span className="business-label-headings">
                              Shop Name:
                            </span>
                          </label>
                          <br />
                          <input
                            className="business-inputs"
                            type="text"
                            placeholder="Shop Name"
                            required
                          />
                        </div>
                      </Col>
                      <Col lg={6} md={6} sm={12}>
                        <div>
                          <label className="business-labels">
                            <span className="business-label-headings">
                              Contact Number:
                            </span>
                          </label>
                          <br />
                          <input
                            className="business-inputs"
                            type="text"
                            placeholder="Contact Number"
                            required
                          />
                        </div>
                      </Col>
                    </Row>
                    <Row>
                      <Col lg={6} md={6} sm={12}>
                        <div>
                          <label className="business-labels">
                            <span className="business-label-headings">
                              Shop Address:
                            </span>
                          </label>
                          <br />
                          <input
                            className="business-inputs"
                            type="text"
                            placeholder="Shop Address"
                            required
                          />
                        </div>
                      </Col>
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
                    </Row>
                    <Row>
                      <Col lg={6} md={6} sm={12}>
                        <div>
                          <label className="business-labels">
                            <span className="business-label-headings">
                              NTN:
                            </span>
                          </label>
                          <br />
                          <input
                            className="business-inputs"
                            type="text"
                            placeholder="NTN"
                            required
                          />
                        </div>
                      </Col>
                      <Col lg={6} md={6} sm={12}>
                        <div>
                          <label className="business-labels">
                            <span className="business-label-headings">
                              Product Name:
                            </span>
                          </label>
                          <br />
                          <input
                            className="business-inputs"
                            type="text"
                            placeholder="Product Name"
                            required
                          />
                        </div>
                      </Col>
                    </Row>
                    <Row>
                      <Col lg={6} md={6} sm={12}>
                        <div>
                          <label className="business-labels">
                            <span className="business-label-headings">
                              Type:
                            </span>
                          </label>
                          <br />
                          <input
                            className="business-inputs"
                            type="text"
                            placeholder="Type"
                            required
                          />
                        </div>
                      </Col>
                      <Col lg={6} md={6} sm={12}>
                        <div>
                          <label className="business-labels">
                            <span className="business-label-headings">
                              Price:
                            </span>
                          </label>
                          <br />
                          <input
                            className="business-inputs"
                            type="text"
                            placeholder="Price"
                            required
                          />
                        </div>
                      </Col>
                    </Row>
                    <Row>
                      <Col lg={6} md={6} sm={12}>
                        <div>
                          <label className="business-labels">
                            <span className="business-label-headings">
                              Size:
                            </span>
                          </label>
                          <br />
                          <input
                            className="business-inputs"
                            type="text"
                            placeholder="Size"
                            required
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
            )}
            {openDropdown === "dropdown21" && (
              <div>
                {/* Dropdown Content for Interior Decoration */}
                <section className="pt-4">
                  <Container>
                    <Row>
                      <Col lg={6} md={6} sm={12}>
                        <div>
                          <label className="business-labels">
                            <span className="business-label-headings">
                              Shop Name:
                            </span>
                          </label>
                          <br />
                          <input
                            className="business-inputs"
                            type="text"
                            placeholder="Shop Name"
                            required
                          />
                        </div>
                      </Col>
                      <Col lg={6} md={6} sm={12}>
                        <div>
                          <label className="business-labels">
                            <span className="business-label-headings">
                              Contact Number:
                            </span>
                          </label>
                          <br />
                          <input
                            className="business-inputs"
                            type="text"
                            placeholder="Contact Number"
                            required
                          />
                        </div>
                      </Col>
                    </Row>
                    <Row>
                      <Col lg={6} md={6} sm={12}>
                        <div>
                          <label className="business-labels">
                            <span className="business-label-headings">
                              Shop Address:
                            </span>
                          </label>
                          <br />
                          <input
                            className="business-inputs"
                            type="text"
                            placeholder="Shop Address"
                            required
                          />
                        </div>
                      </Col>
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
                    </Row>
                    <Row>
                      <Col lg={6} md={6} sm={12}>
                        <div>
                          <label className="business-labels">
                            <span className="business-label-headings">
                              NTN:
                            </span>
                          </label>
                          <br />
                          <input
                            className="business-inputs"
                            type="text"
                            placeholder="NTN"
                            required
                          />
                        </div>
                      </Col>
                      <Col lg={6} md={6} sm={12}>
                        <div>
                          <label className="business-labels">
                            <span className="business-label-headings">
                              Product Name:
                            </span>
                          </label>
                          <br />
                          <input
                            className="business-inputs"
                            type="text"
                            placeholder="Product Name"
                            required
                          />
                        </div>
                      </Col>
                    </Row>
                    <Row>
                      <Col lg={6} md={6} sm={12}>
                        <div>
                          <label className="business-labels">
                            <span className="business-label-headings">
                              Size:
                            </span>
                          </label>
                          <br />
                          <input
                            className="business-inputs"
                            type="text"
                            placeholder="Size"
                            required
                          />
                        </div>
                      </Col>
                      <Col lg={6} md={6} sm={12}>
                        <div>
                          <label className="business-labels">
                            <span className="business-label-headings">
                              Price:
                            </span>
                          </label>
                          <br />
                          <input
                            className="business-inputs"
                            type="text"
                            placeholder="Price"
                            required
                          />
                        </div>
                      </Col>
                    </Row>

                    <Row>
                      <Col lg={6} md={6} sm={12}>
                        <div>
                          <label className="business-labels">
                            <span className="business-label-headings">
                              Color:
                            </span>
                          </label>
                          <br />
                          <input
                            className="business-inputs"
                            type="text"
                            placeholder="Color"
                            required
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
            )}
            {openDropdown === "dropdown22" && (
              <div>
                {/* Dropdown Content for Lights */}
                <section className="pt-4">
                  <Container>
                    <Row>
                      <Col lg={6} md={6} sm={12}>
                        <div>
                          <label className="business-labels">
                            <span className="business-label-headings">
                              Shop Name:
                            </span>
                          </label>
                          <br />
                          <input
                            className="business-inputs"
                            type="text"
                            placeholder="Shop Name"
                            required
                          />
                        </div>
                      </Col>
                      <Col lg={6} md={6} sm={12}>
                        <div>
                          <label className="business-labels">
                            <span className="business-label-headings">
                              Contact Number:
                            </span>
                          </label>
                          <br />
                          <input
                            className="business-inputs"
                            type="text"
                            placeholder="Contact Number"
                            required
                          />
                        </div>
                      </Col>
                    </Row>
                    <Row>
                      <Col lg={6} md={6} sm={12}>
                        <div>
                          <label className="business-labels">
                            <span className="business-label-headings">
                              Shop Address:
                            </span>
                          </label>
                          <br />
                          <input
                            className="business-inputs"
                            type="text"
                            placeholder="Shop Address"
                            required
                          />
                        </div>
                      </Col>
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
                    </Row>
                    <Row>
                      <Col lg={6} md={6} sm={12}>
                        <div>
                          <label className="business-labels">
                            <span className="business-label-headings">
                              NTN:
                            </span>
                          </label>
                          <br />
                          <input
                            className="business-inputs"
                            type="text"
                            placeholder="NTN"
                            required
                          />
                        </div>
                      </Col>
                      <Col lg={6} md={6} sm={12}>
                        <div>
                          <label className="business-labels">
                            <span className="business-label-headings">
                              Product Name:
                            </span>
                          </label>
                          <br />
                          <input
                            className="business-inputs"
                            type="text"
                            placeholder="Product Name"
                            required
                          />
                        </div>
                      </Col>
                    </Row>
                    <Row>
                      <Col lg={6} md={6} sm={12}>
                        <div>
                          <label className="business-labels">
                            <span className="business-label-headings">
                              Type:
                            </span>
                          </label>
                          <br />
                          <input
                            className="business-inputs"
                            type="text"
                            placeholder="Type"
                            required
                          />
                        </div>
                      </Col>
                      <Col lg={6} md={6} sm={12}>
                        <div>
                          <label className="business-labels">
                            <span className="business-label-headings">
                              Price:
                            </span>
                          </label>
                          <br />
                          <input
                            className="business-inputs"
                            type="text"
                            placeholder="Price"
                            required
                          />
                        </div>
                      </Col>
                    </Row>

                    <Row>
                      <Col lg={6} md={6} sm={12}>
                        <div>
                          <label className="business-labels">
                            <span className="business-label-headings">
                              Color:
                            </span>
                          </label>
                          <br />
                          <input
                            className="business-inputs"
                            type="text"
                            placeholder="Color"
                            required
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
            )}
            {openDropdown === "dropdown23" && (
              <div>
                {/* Dropdown Content for Furniture */}
                <section className="pt-4">
                  <Container>
                    <Row>
                      <Col lg={6} md={6} sm={12}>
                        <div>
                          <label className="business-labels">
                            <span className="business-label-headings">
                              Shop Name:
                            </span>
                          </label>
                          <br />
                          <input
                            className="business-inputs"
                            type="text"
                            placeholder="Shop Name"
                            required
                          />
                        </div>
                      </Col>
                      <Col lg={6} md={6} sm={12}>
                        <div>
                          <label className="business-labels">
                            <span className="business-label-headings">
                              Contact Number:
                            </span>
                          </label>
                          <br />
                          <input
                            className="business-inputs"
                            type="text"
                            placeholder="Contact Number"
                            required
                          />
                        </div>
                      </Col>
                    </Row>
                    <Row>
                      <Col lg={6} md={6} sm={12}>
                        <div>
                          <label className="business-labels">
                            <span className="business-label-headings">
                              Shop Address:
                            </span>
                          </label>
                          <br />
                          <input
                            className="business-inputs"
                            type="text"
                            placeholder="Shop Address"
                            required
                          />
                        </div>
                      </Col>
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
                    </Row>
                    <Row>
                      <Col lg={6} md={6} sm={12}>
                        <div>
                          <label className="business-labels">
                            <span className="business-label-headings">
                              NTN:
                            </span>
                          </label>
                          <br />
                          <input
                            className="business-inputs"
                            type="text"
                            placeholder="NTN"
                            required
                          />
                        </div>
                      </Col>
                      <Col lg={6} md={6} sm={12}>
                        <div>
                          <label className="business-labels">
                            <span className="business-label-headings">
                              Product Name:
                            </span>
                          </label>
                          <br />
                          <input
                            className="business-inputs"
                            type="text"
                            placeholder="Product Name"
                            required
                          />
                        </div>
                      </Col>
                    </Row>
                    <Row>
                      <Col lg={6} md={6} sm={12}>
                        <div>
                          <label className="business-labels">
                            <span className="business-label-headings">
                              Company Name:
                            </span>
                          </label>
                          <br />
                          <input
                            className="business-inputs"
                            type="text"
                            placeholder="Company Name"
                            required
                          />
                        </div>
                      </Col>
                      <Col lg={6} md={6} sm={12}>
                        <div>
                          <label className="business-labels">
                            <span className="business-label-headings">
                              Price:
                            </span>
                          </label>
                          <br />
                          <input
                            className="business-inputs"
                            type="text"
                            placeholder="Price"
                            required
                          />
                        </div>
                      </Col>
                    </Row>
                    <Row>
                      <Col lg={6} md={6} sm={12}>
                        <div>
                          <label className="business-labels">
                            <span className="business-label-headings">
                              Dimension:
                            </span>
                          </label>
                          <br />
                          <input
                            className="business-inputs"
                            type="text"
                            placeholder="Dimension"
                            required
                          />
                        </div>
                      </Col>
                      <Col lg={6} md={6} sm={12}>
                        <div>
                          <label className="business-labels">
                            <span className="business-label-headings">
                              Thickness:
                            </span>
                          </label>
                          <br />
                          <input
                            className="business-inputs"
                            type="text"
                            placeholder="Thickness"
                            required
                          />
                        </div>
                      </Col>
                    </Row>
                    <Row>
                      <Col lg={6} md={6} sm={12}>
                        <div>
                          <label className="business-labels">
                            <span className="business-label-headings">
                              Color:
                            </span>
                          </label>
                          <br />
                          <input
                            className="business-inputs"
                            type="text"
                            placeholder="Color"
                            required
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
            )}
            {openDropdown === "dropdown24" && (
              <div>
                {/* Dropdown Content for Security */}
                <section className="pt-4">
                  <Container>
                    <Row>
                      <Col lg={6} md={6} sm={12}>
                        <div>
                          <label className="business-labels">
                            <span className="business-label-headings">
                              Shop Name:
                            </span>
                          </label>
                          <br />
                          <input
                            className="business-inputs"
                            type="text"
                            placeholder="Shop Name"
                            required
                          />
                        </div>
                      </Col>
                      <Col lg={6} md={6} sm={12}>
                        <div>
                          <label className="business-labels">
                            <span className="business-label-headings">
                              Contact Number:
                            </span>
                          </label>
                          <br />
                          <input
                            className="business-inputs"
                            type="text"
                            placeholder="Contact Number"
                            required
                          />
                        </div>
                      </Col>
                    </Row>
                    <Row>
                      <Col lg={6} md={6} sm={12}>
                        <div>
                          <label className="business-labels">
                            <span className="business-label-headings">
                              Shop Address:
                            </span>
                          </label>
                          <br />
                          <input
                            className="business-inputs"
                            type="text"
                            placeholder="Shop Address"
                            required
                          />
                        </div>
                      </Col>
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
                    </Row>
                    <Row>
                      <Col lg={6} md={6} sm={12}>
                        <div>
                          <label className="business-labels">
                            <span className="business-label-headings">
                              NTN:
                            </span>
                          </label>
                          <br />
                          <input
                            className="business-inputs"
                            type="text"
                            placeholder="NTN"
                            required
                          />
                        </div>
                      </Col>
                      <Col lg={6} md={6} sm={12}>
                        <div>
                          <label className="business-labels">
                            <span className="business-label-headings">
                              Product Name:
                            </span>
                          </label>
                          <br />
                          <input
                            className="business-inputs"
                            type="text"
                            placeholder="Product Name"
                            required
                          />
                        </div>
                      </Col>
                    </Row>
                    <Row>
                      <Col lg={6} md={6} sm={12}>
                        <div>
                          <label className="business-labels">
                            <span className="business-label-headings">
                              Company Name:
                            </span>
                          </label>
                          <br />
                          <input
                            className="business-inputs"
                            type="text"
                            placeholder="Company Name"
                            required
                          />
                        </div>
                      </Col>
                      <Col lg={6} md={6} sm={12}>
                        <div>
                          <label className="business-labels">
                            <span className="business-label-headings">
                              Price:
                            </span>
                          </label>
                          <br />
                          <input
                            className="business-inputs"
                            type="text"
                            placeholder="Price"
                            required
                          />
                        </div>
                      </Col>
                    </Row>

                    <Row>
                      <Col lg={6} md={6} sm={12}>
                        <div>
                          <input type="submit" />
                        </div>
                      </Col>
                    </Row>
                  </Container>
                </section>
              </div>
            )}
            {openDropdown === "dropdown25" && (
              <div>
                {/* Dropdown Content for Termite Protection */}
                <section className="pt-4">
                  <Container>
                    <Row>
                      <Col lg={6} md={6} sm={12}>
                        <div>
                          <label className="business-labels">
                            <span className="business-label-headings">
                              Shop Name:
                            </span>
                          </label>
                          <br />
                          <input
                            className="business-inputs"
                            type="text"
                            placeholder="Shop Name"
                            required
                          />
                        </div>
                      </Col>
                      <Col lg={6} md={6} sm={12}>
                        <div>
                          <label className="business-labels">
                            <span className="business-label-headings">
                              Contact Number:
                            </span>
                          </label>
                          <br />
                          <input
                            className="business-inputs"
                            type="text"
                            placeholder="Contact Number"
                            required
                          />
                        </div>
                      </Col>
                    </Row>
                    <Row>
                      <Col lg={6} md={6} sm={12}>
                        <div>
                          <label className="business-labels">
                            <span className="business-label-headings">
                              Shop Address:
                            </span>
                          </label>
                          <br />
                          <input
                            className="business-inputs"
                            type="text"
                            placeholder="Shop Address"
                            required
                          />
                        </div>
                      </Col>
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
                    </Row>
                    <Row>
                      <Col lg={6} md={6} sm={12}>
                        <div>
                          <label className="business-labels">
                            <span className="business-label-headings">
                              NTN:
                            </span>
                          </label>
                          <br />
                          <input
                            className="business-inputs"
                            type="text"
                            placeholder="NTN"
                            required
                          />
                        </div>
                      </Col>
                      <Col lg={6} md={6} sm={12}>
                        <div>
                          <label className="business-labels">
                            <span className="business-label-headings">
                              Product Name:
                            </span>
                          </label>
                          <br />
                          <input
                            className="business-inputs"
                            type="text"
                            placeholder="Product Name"
                            required
                          />
                        </div>
                      </Col>
                    </Row>
                    <Row>
                      <Col lg={6} md={6} sm={12}>
                        <div>
                          <label className="business-labels">
                            <span className="business-label-headings">
                              Company Name:
                            </span>
                          </label>
                          <br />
                          <input
                            className="business-inputs"
                            type="text"
                            placeholder="Company Name"
                            required
                          />
                        </div>
                      </Col>
                      <Col lg={6} md={6} sm={12}>
                        <div>
                          <label className="business-labels">
                            <span className="business-label-headings">
                              Price:
                            </span>
                          </label>
                          <br />
                          <input
                            className="business-inputs"
                            type="text"
                            placeholder="Price"
                            required
                          />
                        </div>
                      </Col>
                    </Row>

                    <Row>
                      <Col lg={6} md={6} sm={12}>
                        <div>
                          <input type="submit" />
                        </div>
                      </Col>
                    </Row>
                  </Container>
                </section>
              </div>
            )}
          </Row>
        </Container>
      </section>
    </>
  );
};
