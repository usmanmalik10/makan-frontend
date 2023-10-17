import React, { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { Container, Row, Col, Form } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import {  useNavigate } from "react-router-dom";
import { createshop } from "../../../features/shop/shopSlice";
import Spinner2 from "../../Common/spinner2/spinner2";
import shopService from "../../../features/shop/shopService";

import { BsImage } from "react-icons/bs";
import { useDropzone } from "react-dropzone";
import classNames from "classnames";
import { toast } from "react-toastify";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";


const isImageSizeValid = (file, maxImageSizeInMb) => {
  const maxSizeInBytes = maxImageSizeInMb * 1024 * 1024;
 if(file){
  return file.size > maxSizeInBytes ? false  : true ;
 }else {
  return false;
 }
}

export const Newad = () => {
  const maxImageSize = 5;
  let initialProfileState = useMemo(
    () => ({
      file: null,
      src: null,
    }),
    []
  );
  const onDrop = useCallback((acceptedFiles) => {
    if (acceptedFiles.length === 0) {
      // No files were dropped, handle this case if needed
      return;
    }

    const blogImage = acceptedFiles[0];

    if (blogImage.type.startsWith("image/")) {
      const isValid = isImageSizeValid(blogImage, maxImageSize);
      if (isValid) {
        const fileSource = URL.createObjectURL(blogImage);
        console.log("Source URL of the image file:", fileSource);

        setFile({ file: blogImage, src: fileSource });
      } else {
        toast.error(`Sorry Image Size is greater than ${maxImageSize}Mb`);
        return;
      }
    } else {
      toast.error("Please upload a image");
    }
  }, []);
  const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop });
 
  const [file, setFile] = useState(initialProfileState);
  const token = localStorage.getItem("accessToken");
  
 
const [openDropdown, setOpenDropdown] = useState(""); // Initialize it as an empty string

// Add a new state variable for the selected category
const [selectedCategory, setSelectedCategory] = useState("");

// ...

// Update the selectedCategory state when the user selects a category
const handleDropdownClick = (value) => {
  setSelectedCategory(value);
  setOpenDropdown(value); // Set openDropdown to the selected category
};

  // const [selectedFile, setSelectedFile] = useState(null);
  const [formData, setFormData] = useState({
    areaOfService: "",
    category:"",
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
  const { areaOfService, category, shopName, productName, address, contectNumber, companyName, price, NTN, details,} = formData;

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { isLoading } = useSelector(
    (state) => state.shop
  );


  const onChange = (e) => {
    console.log(e.target.name);
    setFormData((preState) => ({
      ...preState,
      [e.target.name]: e.target.value,
    }));
  };

  const handleDetailsInputChange = (e) => {
    const { name, value } = e.target;

    setFormData((prevFormData) => ({
      ...prevFormData,
      details: {
        ...prevFormData.details,
        [name]: value,
      },
    }));
  };

  const handleSubmitbuildingmaterial = async (e) => {
    e.preventDefault();

    const shopdata = {
    
      areaOfService:[areaOfService],
      category: selectedCategory,
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
      navigate('/stores-profile');

  };

  const handleSubmitbricks = async (e) => {
    e.preventDefault();

    const shopdata = {
    
      areaOfService:[areaOfService],
      category: selectedCategory,
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
      navigate('/stores-profile');

  };

  const handleSubmitmarbletiles = async (e) => {
    e.preventDefault();

    const shopdata = {
    
      areaOfService:[areaOfService],
      category: selectedCategory,
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
      navigate('/stores-profile');

  };

  const handleSubmitceramics = async (e) => {
    e.preventDefault();

    const shopdata = {
    
      areaOfService:[areaOfService],
      category: selectedCategory,
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
      navigate('/stores-profile');

  };

  const handleSubmitsanitary = async (e) => {
    e.preventDefault();

    const shopdata = {
    
      areaOfService:[areaOfService],
      category: selectedCategory,
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
      navigate('/stores-profile');

  };

  const handleSubmitboringmaterial = async (e) => {
    e.preventDefault();

    const shopdata = {
    
      areaOfService:[areaOfService],
      category: selectedCategory,
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
      navigate('/stores-profile');

  };

  const handleSubmitwood = async (e) => {
    e.preventDefault();

    const shopdata = {
    
      areaOfService:[areaOfService],
      category: selectedCategory,
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
      navigate('/stores-profile');

  };

  const handleSubmittimber = async (e) => {
    e.preventDefault();

    const shopdata = {
    
      areaOfService:[areaOfService],
      category: selectedCategory,
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
      navigate('/stores-profile');

  };

  const handleSubmitpaint = async (e) => {
    e.preventDefault();

    const shopdata = {
    
      areaOfService:[areaOfService],
      category: selectedCategory,
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
      navigate('/stores-profile');

  };
  const handleSubmitsteel = async (e) => {
    e.preventDefault();

    const shopdata = {
    
      areaOfService:[areaOfService],
      category: selectedCategory,
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
      navigate('/stores-profile');

  };
  const handleSubmitiron = async (e) => {
    e.preventDefault();

    const shopdata = {
    
      areaOfService:[areaOfService],
      category: selectedCategory,
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
      navigate('/stores-profile');

  };
  const handleSubmitaluminum = async (e) => {
    e.preventDefault();

    const shopdata = {
    
      areaOfService:[areaOfService],
      category: selectedCategory,
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
      navigate('/stores-profile');

  };
  const handleSubmitglass = async (e) => {
    e.preventDefault();

    const shopdata = {
    
      areaOfService:[areaOfService],
      category: selectedCategory,
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
      navigate('/stores-profile');

  };

  const handleSubmithardware = async (e) => {
    e.preventDefault();

    const shopdata = {
    
      areaOfService:[areaOfService],
      category: selectedCategory,
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
      navigate('/stores-profile');

  };

  const handleSubmitelectronics = async (e) => {
    e.preventDefault();

    const shopdata = {
    
      areaOfService:[areaOfService],
      category: selectedCategory,
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
      navigate('/stores-profile');

  };

  const handleSubmitelectric = async (e) => {
    e.preventDefault();

    const shopdata = {
    
      areaOfService:[areaOfService],
      category: selectedCategory,
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
      navigate('/stores-profile');

  };
  const handleSubmitwallpanelling = async (e) => {
    e.preventDefault();

    const shopdata = {
    
      areaOfService:[areaOfService],
      category: selectedCategory,
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
      navigate('/stores-profile');

  };

  const handleSubmitsolarsytem = async (e) => {
    e.preventDefault();

    const shopdata = {
    
      areaOfService:[areaOfService],
      category: selectedCategory,
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
      navigate('/stores-profile');

  };

  const handleSubmitnursery = async (e) => {
    e.preventDefault();

    const shopdata = {
    
      areaOfService:[areaOfService],
      category: selectedCategory,
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
      navigate('/stores-profile');

  };

  const handleSubmitconcreteplant = async (e) => {
    e.preventDefault();

    const shopdata = {
    
      areaOfService:[areaOfService],
      category: selectedCategory,
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
      navigate('/stores-profile');

  };
  const handleSubmitinteriordecoration = async (e) => {
    e.preventDefault();

    const shopdata = {
    
      areaOfService:[areaOfService],
      category: selectedCategory,
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
      navigate('/stores-profile');

  };
  const handleSubmitlights = async (e) => {
    e.preventDefault();

    const shopdata = {
    
      areaOfService:[areaOfService],
      category: selectedCategory,
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
      navigate('/stores-profile');

  };

  const handleSubmitfurniture = async (e) => {
    e.preventDefault();

    const shopdata = {
    
      areaOfService:[areaOfService],
      category: selectedCategory,
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
      navigate('/stores-profile');

  };

  const handleSubmitsecurity = async (e) => {
    e.preventDefault();

    const shopdata = {
    
      areaOfService:[areaOfService],
      category: selectedCategory,
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
      navigate('/stores-profile');

  };

  const handleSubmittermiteprotection = async (e) => {
    e.preventDefault();

    const shopdata = {
    
      areaOfService:[areaOfService],
      category: selectedCategory,
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
      navigate('/stores-profile');

  };





  function clearProfile() {
    setFile({
      file : null , 
      src : '',
    });
  }
  const [userLocation, setUserLocation] = useState(null);
  const [markerLocation, setMarkerLocation] = useState(null);
  const [center, setCenter] = useState([51.505, -0.09]); // Default to London

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        const coords = {
          lat: position.coords.latitude,
          lng: position.coords.longitude,
        };
        setUserLocation(coords);
        setMarkerLocation(coords);
        setCenter([coords.lat, coords.lng]);
      },
      () => {
        let coords  = {"lat":30.670104900043903,"lng":73.11058044433595}
        setUserLocation(coords);
        setMarkerLocation(coords);
        setCenter([coords.lat, coords.lng]);
        console.error("Location access denied");
        alert("Please enable location for a better experience");
      }
    );
  }, []);

  const updateMarkerLocation = (event) => {
    console.log('Updating Marker locatin');

    const newCoords = event.target.getLatLng();
    setMarkerLocation({ lat: newCoords.lat, lng: newCoords.lng });
  };


  if (isLoading) {
    return <Spinner2 />;
  }

  return (
    <>
      <section>
        <Container>
          
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
                  value={selectedCategory}
                  onChange={(e) => handleDropdownClick(e.target.value)}
                  className="business-inputs"
                >
                  <option value="">Select Category</option>
                  <option value="buildingmaterial">Building Material</option>
                  <option value="brick">Bricks</option>
                  <option value="marbleandtilestore">Marble/Tiles</option>
                  <option value="ceramic">Ceramics</option>
                  <option value="sanitary">Sanitary</option>
                  <option value="boringmaterial">Boring Material</option>
                  <option value="wood">Wood </option>
                  <option value="timber">Timber</option>
                  <option value="paintstore">Paint</option>
                  <option value="steelstore">Steel</option>
                  <option value="iron">Iron</option>
                  <option value="aluminumstore">Aluminum</option>
                  <option value="glassstore">Glass</option>
                  <option value="hardware">Hardware</option>
                  <option value="electronic">Electronics</option>
                  <option value="electric">Electric</option>
                  <option value="wallpanelling">Wall Panelling</option>
                  <option value="solarsystem">Solar System</option>
                  <option value="nursery">Nursery</option>
                  <option value="concreteplant">Concrete Plant</option>
                  <option value="interiordecoration">Interior Decoration</option>
                  <option value="light">Lights</option>
                  <option value="furniture">Furniture</option>
                  <option value="security">Security</option>
                  <option value="termiteprotection">Termite Protection</option>
                </select>
              </div>
            </Col>
          </Row>
       {
        openDropdown.length > 2  && 
  
       ( file.src ? (
          <div>
            <div className="inner-image-upload ">
              <img
  
              
                alt="Blog"
                src={file.src}
              />
            </div>
  
            <div class="d-flex justify-content-center ">
              <button onClick={clearProfile} className='btn-pm-sm'>Delete Image</button>
            </div>
          </div>
        )
        :
        (
          <section className="image-div-upload">
            <div {...getRootProps()} >
              <input {...getInputProps()} />
  
              <div
                className={
                  classNames(
                    "inner-image-div-upload",
                    isDragActive ? "is-dragging" : ""
                  )
                }
              >
                {!isDragActive && (
                  <>
                    <BsImage fontSize={"50px"} />
                    <span>Click to Select or Drop Blog Cover Image</span>
                  </>
                )}
  
                {isDragActive && (
                  <>
                    <BsImage fontSize={"50px"} />
                    <span>Yeah Yeah Exactly Drop it 😃</span>
                  </>
                )}
              </div>
            </div>
          </section>
        ))
        }

  
          <Row>
            {openDropdown === "buildingmaterial" && (
              <div>
                <form onSubmit={handleSubmitbuildingmaterial}>
                      
{/* Dropdown Content for
                   Building Material */}
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
                      {/* <Row>
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
                              onChange={handleDetailsInputChange }
                              value={formData.details.key1}
                              name="key1"
                              
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
                              onChange={handleDetailsInputChange }
                              value={formData.details.key2}
                              name="key2"
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
                              onChange={handleDetailsInputChange }
                              value={formData.details.key3}
                              name="key3"
                            />
                          </div>
                        </Col>
                        
                      </Row> */}
                      <Row className="mt-4">
                    <div className='map-container'>
                    <label className="business-labels">
                            <span className="business-label-headings">
                              Location :
                            </span>
                          </label>
      {userLocation && markerLocation  && (
        <MapContainer
          center={center}
          zoom={13}
          style={{ height: "100%", width: "100%" }}
        >
          <TileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          <Marker
            position={[markerLocation.lat, markerLocation.lng]}
            draggable={true}
          eventHandlers={{dragend : updateMarkerLocation}}
          >
            <Popup>Current Marker Position</Popup>
          </Marker>
        </MapContainer>
      )}
      </div>
                    </Row>
                      <Col>
                          <div className="login-button">
                            <button type="submit">Submit</button>
                          </div>
                        </Col>
                    </Container>
                  </section>
                </form>
              </div>
            )}

            {openDropdown === "brick" && (
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
                      {/* <Row>
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
                          name="key1"
                          value={formData.details.key1}
                          onChange={handleDetailsInputChange }
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
                          name="key2"
                          value={formData.details.key2}
                          onChange={handleDetailsInputChange }
                        />
                      </div>
                    </Col>
                  </Row>
                   */
            }
            <Row className="mt-4">
                    <div className='map-container'>
                    <label className="business-labels">
                            <span className="business-label-headings">
                              Location :
                            </span>
                          </label>
      {userLocation && markerLocation  && (
        <MapContainer
          center={center}
          zoom={13}
          style={{ height: "100%", width: "100%" }}
        >
          <TileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          <Marker
            position={[markerLocation.lat, markerLocation.lng]}
            draggable={true}
          eventHandlers={{dragend : updateMarkerLocation}}
          >
            <Popup>Current Marker Position</Popup>
          </Marker>
        </MapContainer>
      )}
      </div>
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

            {openDropdown === "marbleandtilestore" && (
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
                            value={address}
                            name="address"
                            onChange={onChange}
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
                    {/* <Row>
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
                          <select className="business-inputs" name="key1" value={formData.details.key1} onChange={handleDetailsInputChange }>
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
                            name="key2"
                            value={formData.details.key2}
                            onChange={handleDetailsInputChange }
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
                            name="key3"
                            value={formData.details.key3}
                            onChange={handleDetailsInputChange }
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
                            value={formData.details.key4}
                            name="key4"
                            onChange={handleDetailsInputChange }
                          />
                        </div>
                      </Col>
                    </Row>
                    */
                    
                    }
                    <Row className="mt-4">
                    <div className='map-container'>
                    <label className="business-labels">
                            <span className="business-label-headings">
                              Location :
                            </span>
                          </label>
      {userLocation && markerLocation  && (
        <MapContainer
          center={center}
          zoom={13}
          style={{ height: "100%", width: "100%" }}
        >
          <TileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          <Marker
            position={[markerLocation.lat, markerLocation.lng]}
            draggable={true}
          eventHandlers={{dragend : updateMarkerLocation}}
          >
            <Popup>Current Marker Position</Popup>
          </Marker>
        </MapContainer>
      )}
      </div>
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
            {openDropdown === "ceramic" && (
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
                    {/* <Row>
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
                            name="key1"
                            value={formData.details.key1}
                            onChange={handleDetailsInputChange}
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
                            name="key2"
                            value={formData.details.key2}
                            onChange={handleDetailsInputChange}
                          />
                        </div>
                      </Col>
                    </Row> */}
                    <Row className="mt-4">
                    <div className='map-container'>
                    <label className="business-labels">
                            <span className="business-label-headings">
                              Location :
                            </span>
                          </label>
      {userLocation && markerLocation  && (
        <MapContainer
          center={center}
          zoom={13}
          style={{ height: "100%", width: "100%" }}
        >
          <TileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          <Marker
            position={[markerLocation.lat, markerLocation.lng]}
            draggable={true}
          eventHandlers={{dragend : updateMarkerLocation}}
          >
            <Popup>Current Marker Position</Popup>
          </Marker>
        </MapContainer>
      )}
      </div>
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
            {openDropdown === "sanitary" && (
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
                    {/* <Row>
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
                            name="key1"
                            value={formData.details.key1}
                            onChange={handleDetailsInputChange}
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
                            name="key2"
                            value={formData.details.key2}
                            onChange={handleDetailsInputChange}
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
                            name="key3"
                            value={formData.details.key3}
                            onChange={handleDetailsInputChange}
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
                            value={formData.details.key4}
                            name="key4"
                            onChange={handleDetailsInputChange}
                          />
                        </div>
                      </Col>
                    </Row> */}
                    <Row className="mt-4">
                    <div className='map-container'>
                    <label className="business-labels">
                            <span className="business-label-headings">
                              Location :
                            </span>
                          </label>
      {userLocation && markerLocation  && (
        <MapContainer
          center={center}
          zoom={13}
          style={{ height: "100%", width: "100%" }}
        >
          <TileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          <Marker
            position={[markerLocation.lat, markerLocation.lng]}
            draggable={true}
          eventHandlers={{dragend : updateMarkerLocation}}
          >
            <Popup>Current Marker Position</Popup>
          </Marker>
        </MapContainer>
      )}
      </div>
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
            {openDropdown === "boringmaterial" && (
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
                    {/* <Row>
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
                            name="key1"
                            value={formData.details.key1}
                            onChange={handleDetailsInputChange}
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
                            name="key2"
                            value={ formData.details.key2}
                            onChange={handleDetailsInputChange}
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
                            name="key3"
                            value={formData.details.key3}
                            onChange={handleDetailsInputChange}
                          />
                        </div>
                      </Col>
                     
                    </Row> */}
                    <Row className="mt-4">
                    <div className='map-container'>
                    <label className="business-labels">
                            <span className="business-label-headings">
                              Location :
                            </span>
                          </label>
      {userLocation && markerLocation  && (
        <MapContainer
          center={center}
          zoom={13}
          style={{ height: "100%", width: "100%" }}
        >
          <TileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          <Marker
            position={[markerLocation.lat, markerLocation.lng]}
            draggable={true}
          eventHandlers={{dragend : updateMarkerLocation}}
          >
            <Popup>Current Marker Position</Popup>
          </Marker>
        </MapContainer>
      )}
      </div>
                    </Row>
                     <Col lg={6} md={6} sm={12}>
                        <Col>
                        <div className="login-button">
                            <button type="submit">Submit</button>
                          </div>
                        </Col>
                      </Col>
                  </Container>
                  </form>
                </section>
              </div>
            )}
            {openDropdown === "wood" && (
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
                    {/* <Row>
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
                            name="key1"
                            value={formData.details.key1}
                            onChange={handleDetailsInputChange}

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
                            name="key2"
                            value={formData.details.key2}
                            onChange={handleDetailsInputChange}
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
                            name="key3"
                            value={formData.details.key3}
                            onChange={handleDetailsInputChange}
                          />
                        </div>
                      </Col>
                     
                    </Row> */}
                    <Row className="mt-4">
                    <div className='map-container'>
                    <label className="business-labels">
                            <span className="business-label-headings">
                              Location :
                            </span>
                          </label>
      {userLocation && markerLocation  && (
        <MapContainer
          center={center}
          zoom={13}
          style={{ height: "100%", width: "100%" }}
        >
          <TileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          <Marker
            position={[markerLocation.lat, markerLocation.lng]}
            draggable={true}
          eventHandlers={{dragend : updateMarkerLocation}}
          >
            <Popup>Current Marker Position</Popup>
          </Marker>
        </MapContainer>
      )}
      </div>
                    </Row>
                    <Row>
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
            {openDropdown === "timber" && (
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
                    {/* <Row>
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
                            name="key1"
                            value={formData.details.key1}
                            onChange={handleDetailsInputChange}
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
                            onChange={handleDetailsInputChange}
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
                            name="key2"
                            value={formData.details.key2}
                            onChange={handleDetailsInputChange}
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
                            name="key3"
                            value={formData.details.key3}
                            onChange={handleDetailsInputChange}
                          />
                        </div>
                      </Col>
                    </Row> */}
                    <Row className="mt-4">
                    <div className='map-container'>
                    <label className="business-labels">
                            <span className="business-label-headings">
                              Location :
                            </span>
                          </label>
      {userLocation && markerLocation  && (
        <MapContainer
          center={center}
          zoom={13}
          style={{ height: "100%", width: "100%" }}
        >
          <TileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          <Marker
            position={[markerLocation.lat, markerLocation.lng]}
            draggable={true}
          eventHandlers={{dragend : updateMarkerLocation}}
          >
            <Popup>Current Marker Position</Popup>
          </Marker>
        </MapContainer>
      )}
      </div>
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
            {openDropdown === "paintstore" && (
              <div>
                {/* Dropdown Content for Paint */}
                <section className="pt-4">
                  <form onSubmit={handleSubmitpaint}>
                      
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
                    {/* <Row>
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
                              Size :
                            </span>
                          </label>
                          <br />
                          <select className="business-inputs" name="key1" value={formData.details.key1} onChange={handleDetailsInputChange}>
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
                          <select className="business-inputs" name="key2" value={formData.details.key2} onChange={handleDetailsInputChange}>
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
                          <select className="business-inputs" name="key3" value={formData.details.key3} onChange={handleDetailsInputChange}>
                            <option>Type</option>
                            <option>Matt</option>
                            <option>High Gross</option>
                          </select>
                        </div>
                      </Col>
                    </Row> */}
                    <Row className="mt-4">
                    <div className='map-container'>
                    <label className="business-labels">
                            <span className="business-label-headings">
                              Location :
                            </span>
                          </label>
      {userLocation && markerLocation  && (
        <MapContainer
          center={center}
          zoom={13}
          style={{ height: "100%", width: "100%" }}
        >
          <TileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          <Marker
            position={[markerLocation.lat, markerLocation.lng]}
            draggable={true}
          eventHandlers={{dragend : updateMarkerLocation}}
          >
            <Popup>Current Marker Position</Popup>
          </Marker>
        </MapContainer>
      )}
      </div>
                    </Row>
                      <Col lg={6} md={6} sm={12}>
                      <div className="login-button">
                            <button type="submit">Submit</button>
                          </div>
                      </Col>
                  </Container>
                  </form>
                </section>
              </div>
            )}
            {openDropdown === "steelstore" && (
              <div>
                {/* Dropdown Content for Steel */}
                <section className="pt-4">
                  <form onSubmit={handleSubmitsteel}>
                      
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
                          <select className="business-inputs" name="aresOfService" value={areaOfService} onChange={onChange}>
                            <option>Area of services</option>
                            <option>Sahiwal City</option>
                            <option>Sahiwal Division</option>
                            <option>Punjab</option>
                            <option>Pakistan</option>
                          </select>
                        </div>
                      </Col>
                    </Row>
                    {/* <Row>
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
                              Quantity:
                            </span>
                          </label>
                          <br />
                          <input
                            className="business-inputs"
                            type="text"
                            placeholder="Quantity"
                            required
                            name="key1"
                            value={formData.details.key1}
                            onChange={handleDetailsInputChange}
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
                          <select className="business-inputs" name="key2" value={formData.details.key2} onChange={handleDetailsInputChange}>
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
                            name="key3"
                            value={formData.details.key3}
                            onChange={handleDetailsInputChange}
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
                            name="key4"
                            value={formData.details.key4}
                            onChange={handleDetailsInputChange}
                          />
                        </div>
                      </Col>
                    </Row> */}
                    <Row className="mt-4">
                    <div className='map-container'>
                    <label className="business-labels">
                            <span className="business-label-headings">
                              Location :
                            </span>
                          </label>
      {userLocation && markerLocation  && (
        <MapContainer
          center={center}
          zoom={13}
          style={{ height: "100%", width: "100%" }}
        >
          <TileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          <Marker
            position={[markerLocation.lat, markerLocation.lng]}
            draggable={true}
          eventHandlers={{dragend : updateMarkerLocation}}
          >
            <Popup>Current Marker Position</Popup>
          </Marker>
        </MapContainer>
      )}
      </div>
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
            {openDropdown === "iron" && (
              <div>
                {/* Dropdown Content for Iron */}
                <section className="pt-4">
                  <form onSubmit={handleSubmitiron}>
                      
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
                          <select className="business-inputs" name="aresOfService" value={areaOfService} onChange={onChange}>
                            <option>Area of services</option>
                            <option>Sahiwal City</option>
                            <option>Sahiwal Division</option>
                            <option>Punjab</option>
                            <option>Pakistan</option>
                          </select>
                        </div>
                      </Col>
                    </Row>
                    {/* <Row>
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
                            name="key1"
                            value={formData.details.key1}
                            onChange={handleDetailsInputChange}
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
                            name="key2"
                            value={formData.details.key2}
                            onChange={handleDetailsInputChange}
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
                            name="key3"
                            value={formData.details.key3}
                            onChange={handleDetailsInputChange}
                          />
                        </div>
                      </Col>
                    </Row> */}
                    <Row className="mt-4">
                    <div className='map-container'>
                    <label className="business-labels">
                            <span className="business-label-headings">
                              Location :
                            </span>
                          </label>
      {userLocation && markerLocation  && (
        <MapContainer
          center={center}
          zoom={13}
          style={{ height: "100%", width: "100%" }}
        >
          <TileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          <Marker
            position={[markerLocation.lat, markerLocation.lng]}
            draggable={true}
          eventHandlers={{dragend : updateMarkerLocation}}
          >
            <Popup>Current Marker Position</Popup>
          </Marker>
        </MapContainer>
      )}
      </div>
                    </Row>
                      <Col lg={6} md={6} sm={12}>
                      <div className="login-button">
                            <button type="submit">Submit</button>
                          </div>
                      </Col>
                  </Container>
                  </form>
                </section>
              </div>
            )}
            {openDropdown === "aluminumstore" && (
              <div>
                {/* Dropdown Content for Aluminum */}
                <section className="pt-4">
                <form onSubmit={handleSubmitaluminum}>
                      
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
                    {/* <Row>
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
                            name="key1"
                            value={formData.details.key1}
                            onChange={handleDetailsInputChange}
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
                            name="key2"
                            value={formData.details.key2}
                            onChange={handleDetailsInputChange}
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
                            name="key3"
                            value={formData.details.key3}
                            onChange={handleDetailsInputChange}
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
                            name="key4"
                            value={formData.details.key4}
                            onChange={handleDetailsInputChange}
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
                            name="key5"
                            value={formData.details.key5}
                            onChange={handleDetailsInputChange}
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
                            name="key6"
                            value={formData.details.key6}
                            onChange={handleDetailsInputChange}
                          />
                        </div>
                      </Col>
                    </Row> */}
                    <Row className="mt-4">
                    <div className='map-container'>
                    <label className="business-labels">
                            <span className="business-label-headings">
                              Location :
                            </span>
                          </label>
      {userLocation && markerLocation  && (
        <MapContainer
          center={center}
          zoom={13}
          style={{ height: "100%", width: "100%" }}
        >
          <TileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          <Marker
            position={[markerLocation.lat, markerLocation.lng]}
            draggable={true}
          eventHandlers={{dragend : updateMarkerLocation}}
          >
            <Popup>Current Marker Position</Popup>
          </Marker>
        </MapContainer>
      )}
      </div>
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
            {openDropdown === "glassstore" && (
              <div>
                {/* Dropdown Content for Glass */}
                
                <section className="pt-4">
                <form onSubmit={handleSubmitglass}>
                      
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
                    {/* <Row>
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
                            onChange={handleDetailsInputChange}
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
                            name="key2"
                            value={formData.details.key2}
                            onChange={handleDetailsInputChange}
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
                            name="key3"
                            value={formData.details.key3}
                            onChange={handleDetailsInputChange}
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
                          <select className="business-inputs" name="key4" value={formData.details.key4} onChange={handleDetailsInputChange}>
                            <option>Tempered</option>
                            <option>Yes</option>
                            <option>No</option>
                          </select>
                        </div>
                      </Col>
                    </Row> */}
                    <Row className="mt-4">
                    <div className='map-container'>
                    <label className="business-labels">
                            <span className="business-label-headings">
                              Location :
                            </span>
                          </label>
      {userLocation && markerLocation  && (
        <MapContainer
          center={center}
          zoom={13}
          style={{ height: "100%", width: "100%" }}
        >
          <TileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          <Marker
            position={[markerLocation.lat, markerLocation.lng]}
            draggable={true}
          eventHandlers={{dragend : updateMarkerLocation}}
          >
            <Popup>Current Marker Position</Popup>
          </Marker>
        </MapContainer>
      )}
      </div>
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
            {openDropdown === "hardware" && (
              <div>
                {/* Dropdown Content for Hardware */}
                <section className="pt-4">
                <form onSubmit={handleSubmithardware}>
                      
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
                    {/* <Row>
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
                              Size: (inches)
                            </span>
                          </label>
                          <br />
                          <input
                            className="business-inputs"
                            type="text"
                            placeholder="Size"
                            required
                            name="key1"
                            value={formData.details.key1}
                            onChange={handleDetailsInputChange}
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
                            name="key2"
                            value={formData.details.key2}
                            onChange={handleDetailsInputChange}
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
                            name="key3"
                            value={formData.details.key3}
                            onChange={handleDetailsInputChange}
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
                            name="key4"
                            value={formData.details.key4}
                            onChange={handleDetailsInputChange}
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
                            name="key5"
                            value={formData.details.key5}
                            onChange={handleDetailsInputChange}
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
                            name="key6"
                            value={formData.details.key6}
                            onChange={handleDetailsInputChange}
                          />
                        </div>
                      </Col>
                    </Row> */}<Row className="mt-4">
                    <div className='map-container'>
                    <label className="business-labels">
                            <span className="business-label-headings">
                              Location :
                            </span>
                          </label>
      {userLocation && markerLocation  && (
        <MapContainer
          center={center}
          zoom={13}
          style={{ height: "100%", width: "100%" }}
        >
          <TileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          <Marker
            position={[markerLocation.lat, markerLocation.lng]}
            draggable={true}
          eventHandlers={{dragend : updateMarkerLocation}}
          >
            <Popup>Current Marker Position</Popup>
          </Marker>
        </MapContainer>
      )}
      </div>
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
            {openDropdown === "electronic" && (
              <div>
                {/* Dropdown Content for Electronics */}
                <section className="pt-4">
                <form onSubmit={handleSubmitelectronics}>
                      
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
                    {/* <Row>
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
                            name="key1"
                            value={formData.details.key1}
                            onChange={handleDetailsInputChange}
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
                            name="key2"
                            value={formData.details.key2}
                            onChange={handleDetailsInputChange}

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
                          <select className="business-inputs" name="key3" value={formData.details.key3} onChange={handleDetailsInputChange}>
                            <option>After sale services</option>
                            <option>Yes</option>
                            <option>No</option>
                          </select>
                        </div>
                      </Col>
                    </Row> */}
                    <Row className="mt-4">
                    <div className='map-container'>
                    <label className="business-labels">
                            <span className="business-label-headings">
                              Location :
                            </span>
                          </label>
      {userLocation && markerLocation  && (
        <MapContainer
          center={center}
          zoom={13}
          style={{ height: "100%", width: "100%" }}
        >
          <TileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          <Marker
            position={[markerLocation.lat, markerLocation.lng]}
            draggable={true}
          eventHandlers={{dragend : updateMarkerLocation}}
          >
            <Popup>Current Marker Position</Popup>
          </Marker>
        </MapContainer>
      )}
      </div>
                    </Row>
                      <Col lg={6} md={6} sm={12}>
                      <div className="login-button">
                            <button type="submit">Submit</button>
                          </div>
                      </Col>
                  </Container>
                  </form>
                </section>
              </div>
            )}
            {openDropdown === "electric" && (
              <div>
                {/* Dropdown Content for Electric */}
                <section className="pt-4">
                <form onSubmit={handleSubmitelectric}>
                      
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
                    {/* <Row>
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
                            name="key1"
                            value={formData.details.key1}
                            onChange={handleDetailsInputChange}
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
                            name="key2"
                            value={formData.details.key2}
                            onChange={handleDetailsInputChange}
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
                            name="key3"
                            value={formData.details.key3}
                            onChange={handleDetailsInputChange}
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
                            name="key4"
                            value={formData.details.key4}
                            onChange={handleDetailsInputChange}
                          />
                        </div>
                      </Col>
                    </Row> */}
                    <Row className="mt-4">
                    <div className='map-container'>
                    <label className="business-labels">
                            <span className="business-label-headings">
                              Location :
                            </span>
                          </label>
      {userLocation && markerLocation  && (
        <MapContainer
          center={center}
          zoom={13}
          style={{ height: "100%", width: "100%" }}
        >
          <TileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          <Marker
            position={[markerLocation.lat, markerLocation.lng]}
            draggable={true}
          eventHandlers={{dragend : updateMarkerLocation}}
          >
            <Popup>Current Marker Position</Popup>
          </Marker>
        </MapContainer>
      )}
      </div>
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
            {openDropdown === "wallpanelling" && (
              <div>
                {/* Dropdown Content for Wall Panelling */}
                <section className="pt-4">
                <form onSubmit={handleSubmitwallpanelling}>
                      
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
                    {/* <Row>
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
                            name="key1"
                            value={formData.details.key1}
                            onChange={handleDetailsInputChange}
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
                            name="key2"
                            value={formData.details.key2}
                            onChange={handleDetailsInputChange}
                          />
                        </div>
                      </Col>
                    </Row> */}
                    <Row className="mt-4">
                    <div className='map-container'>
                    <label className="business-labels">
                            <span className="business-label-headings">
                              Location :
                            </span>
                          </label>
      {userLocation && markerLocation  && (
        <MapContainer
          center={center}
          zoom={13}
          style={{ height: "100%", width: "100%" }}
        >
          <TileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          <Marker
            position={[markerLocation.lat, markerLocation.lng]}
            draggable={true}
          eventHandlers={{dragend : updateMarkerLocation}}
          >
            <Popup>Current Marker Position</Popup>
          </Marker>
        </MapContainer>
      )}
      </div>
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
            {openDropdown === "solarsystem" && (
              <div>
                {/* Dropdown Content for Solar System */}
                <section className="pt-4">

                <form onSubmit={handleSubmitsolarsytem}>
                      
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
                    {/* <Row>
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
                            name="key1"
                            value={formData.details.key1}
                            onChange={handleDetailsInputChange}
                          />
                        </div>
                      </Col>
                    </Row> */}
                    <Row className="mt-4">
                    <div className='map-container'>
                    <label className="business-labels">
                            <span className="business-label-headings">
                              Location :
                            </span>
                          </label>
      {userLocation && markerLocation  && (
        <MapContainer
          center={center}
          zoom={13}
          style={{ height: "100%", width: "100%" }}
        >
          <TileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          <Marker
            position={[markerLocation.lat, markerLocation.lng]}
            draggable={true}
          eventHandlers={{dragend : updateMarkerLocation}}
          >
            <Popup>Current Marker Position</Popup>
          </Marker>
        </MapContainer>
      )}
      </div>
                    </Row>
                      <Col lg={6} md={6} sm={12}>
                      <div className="login-button">
                            <button type="submit">Submit</button>
                          </div>
                      </Col>
                  </Container>
                  </form>
                </section>
              </div>
            )}
            {openDropdown === "nursery" && (
              <div>
                {/* Dropdown Content for Nursery */}
                <section className="pt-4">
                <form onSubmit={handleSubmitnursery}>
                      
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
                    {/* <Row>
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
                              Plant Name:
                            </span>
                          </label>
                          <br />
                          <input
                            className="business-inputs"
                            type="text"
                            placeholder="Plant Name"
                            required
                            name="key1"
                            value={formData.details.key1}
                            onChange={handleDetailsInputChange}
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
                            name="key2"
                            value={formData.details.key2}
                            onChange={handleDetailsInputChange}
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
                            onChange={handleDetailsInputChange}
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
                            name="key3"
                            value={formData.details.key3}
                            onChange={handleDetailsInputChange}
                          />
                        </div>
                      </Col>
                    </Row> */}
                    <Row className="mt-4">
                    <div className='map-container'>
                    <label className="business-labels">
                            <span className="business-label-headings">
                              Location :
                            </span>
                          </label>
      {userLocation && markerLocation  && (
        <MapContainer
          center={center}
          zoom={13}
          style={{ height: "100%", width: "100%" }}
        >
          <TileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          <Marker
            position={[markerLocation.lat, markerLocation.lng]}
            draggable={true}
          eventHandlers={{dragend : updateMarkerLocation}}
          >
            <Popup>Current Marker Position</Popup>
          </Marker>
        </MapContainer>
      )}
      </div>
                    </Row>
                      <Col lg={6} md={6} sm={12}>
                      <div className="login-button">
                            <button type="submit">Submit</button>
                          </div>
                      </Col>
                  </Container>
                  </form>
                </section>
              </div>
            )}
            {openDropdown === "concreteplant" && (
              <div>
                {/* Dropdown Content for Concrete Plant */}
                <section className="pt-4">
                <form onSubmit={handleSubmitconcreteplant}>
                      
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
                          <select className="business-inputs"  name="areaOfService" value={areaOfService} onChange={onChange}>
                            <option>Area of services</option>
                            <option>Sahiwal City</option>
                            <option>Sahiwal Division</option>
                            <option>Punjab</option>
                            <option>Pakistan</option>
                          </select>
                        </div>
                      </Col>
                    </Row>
                    {/* <Row>
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
                              Type:
                            </span>
                          </label>
                          <br />
                          <input
                            className="business-inputs"
                            type="text"
                            placeholder="Type"
                            required
                            name="key1"
                            value={formData.details.key1}
                            onChange={handleDetailsInputChange}
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
                            name="key2"
                            value={formData.details.key2}
                            onChange={handleDetailsInputChange}
                          />
                        </div>
                      </Col>
                    </Row> */}
                    <Row className="mt-4">
                    <div className='map-container'>
                    <label className="business-labels">
                            <span className="business-label-headings">
                              Location :
                            </span>
                          </label>
      {userLocation && markerLocation  && (
        <MapContainer
          center={center}
          zoom={13}
          style={{ height: "100%", width: "100%" }}
        >
          <TileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          <Marker
            position={[markerLocation.lat, markerLocation.lng]}
            draggable={true}
          eventHandlers={{dragend : updateMarkerLocation}}
          >
            <Popup>Current Marker Position</Popup>
          </Marker>
        </MapContainer>
      )}
      </div>
                    </Row>
                      <Col lg={6} md={6} sm={12}>
                      <div className="login-button">
                            <button type="submit">Submit</button>
                          </div>
                      </Col>
                  </Container>
                  </form>
                </section>
              </div>
            )}
            {openDropdown === "interiordecoration" && (
              <div>
                {/* Dropdown Content for Interior Decoration */}
                <section className="pt-4">
                <form onSubmit={handleSubmitinteriordecoration}>
                      
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
                    {/* <Row>
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
                              Size:
                            </span>
                          </label>
                          <br />
                          <input
                            className="business-inputs"
                            type="text"
                            placeholder="Size"
                            required
                            name="key1"
                            value={formData.details.key1}
                            onChange={handleDetailsInputChange}
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
                            name="key2"
                            value={formData.details.key2}
                            onChange={handleDetailsInputChange}
                          />
                        </div>
                      </Col>
                    </Row> */}
                    <Row className="mt-4">
                    <div className='map-container'>
                    <label className="business-labels">
                            <span className="business-label-headings">
                              Location :
                            </span>
                          </label>
      {userLocation && markerLocation  && (
        <MapContainer
          center={center}
          zoom={13}
          style={{ height: "100%", width: "100%" }}
        >
          <TileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          <Marker
            position={[markerLocation.lat, markerLocation.lng]}
            draggable={true}
          eventHandlers={{dragend : updateMarkerLocation}}
          >
            <Popup>Current Marker Position</Popup>
          </Marker>
        </MapContainer>
      )}
      </div>
                    </Row>
                      <Col lg={6} md={6} sm={12}>
                      <div className="login-button">
                            <button type="submit">Submit</button>
                          </div>
                      </Col>
                  </Container>
                  </form>
                </section>
              </div>
            )}
            {openDropdown === "light" && (
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
                    {/* <Row>
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
                              Type:
                            </span>
                          </label>
                          <br />
                          <input
                            className="business-inputs"
                            type="text"
                            placeholder="Type"
                            required
                            name="key1"
                            value={formData.details.key1}
                            onChange={handleDetailsInputChange}
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
                            name="key2"
                            value={formData.details.key2}
                            onChange={handleDetailsInputChange}
                          />
                        </div>
                      </Col>
                    </Row> */}
                    <Row className="mt-4">
                    <div className='map-container'>
                    <label className="business-labels">
                            <span className="business-label-headings">
                              Location :
                            </span>
                          </label>
      {userLocation && markerLocation  && (
        <MapContainer
          center={center}
          zoom={13}
          style={{ height: "100%", width: "100%" }}
        >
          <TileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          <Marker
            position={[markerLocation.lat, markerLocation.lng]}
            draggable={true}
          eventHandlers={{dragend : updateMarkerLocation}}
          >
            <Popup>Current Marker Position</Popup>
          </Marker>
        </MapContainer>
      )}
      </div>
                    </Row>
                      <Col lg={6} md={6} sm={12}>
                      <div className="login-button">
                            <button type="submit">Submit</button>
                          </div>
                      </Col>
                  </Container>
                </section>
              </div>
            )}
            {openDropdown === "furniture" && (
              <div>
                {/* Dropdown Content for Furniture */}
                <section className="pt-4">
                <form onSubmit={handleSubmitfurniture}>
                      
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
                    {/* <Row>
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
                            name="key1"
                            value={formData.details.key1}
                            onChange={handleDetailsInputChange}
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
                            name="key2"
                            value={formData.details.key2}
                            onChange={handleDetailsInputChange}
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
                            name="key3"
                            value={formData.details.key3}
                            onChange={handleDetailsInputChange}
                          />
                        </div>
                      </Col>
                    </Row> */}
                    <Row className="mt-4">
                    <div className='map-container'>
                    <label className="business-labels">
                            <span className="business-label-headings">
                              Location :
                            </span>
                          </label>
      {userLocation && markerLocation  && (
        <MapContainer
          center={center}
          zoom={13}
          style={{ height: "100%", width: "100%" }}
        >
          <TileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          <Marker
            position={[markerLocation.lat, markerLocation.lng]}
            draggable={true}
          eventHandlers={{dragend : updateMarkerLocation}}
          >
            <Popup>Current Marker Position</Popup>
          </Marker>
        </MapContainer>
      )}
      </div>
                    </Row>
                      <Col lg={6} md={6} sm={12}>
                      <div className="login-button">
                            <button type="submit">Submit</button>
                          </div>
                      </Col>
                  </Container>
                  </form>
                </section>
              </div>
            )}
            {openDropdown === "security" && (
              <div>
                {/* Dropdown Content for Security */}
                <section className="pt-4">
                <form onSubmit={handleSubmitsecurity}>
                      
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
                    {/* <Row>
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
                    </Row> */}
<Row className="mt-4">
                    <div className='map-container'>
                    <label className="business-labels">
                            <span className="business-label-headings">
                              Location :
                            </span>
                          </label>
      {userLocation && markerLocation  && (
        <MapContainer
          center={center}
          zoom={13}
          style={{ height: "100%", width: "100%" }}
        >
          <TileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          <Marker
            position={[markerLocation.lat, markerLocation.lng]}
            draggable={true}
          eventHandlers={{dragend : updateMarkerLocation}}
          >
            <Popup>Current Marker Position</Popup>
          </Marker>
        </MapContainer>
      )}
      </div>
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
            {openDropdown === "termiteprotection" && (
              <div>
                {/* Dropdown Content for Termite Protection */}
                <section className="pt-4">
                <form onSubmit={handleSubmittermiteprotection}>
                      
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
                    {/* <Row>
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
                    </Row> */}
<Row className="mt-4">
                    <div className='map-container'>
                    <label className="business-labels">
                            <span className="business-label-headings">
                              Location :
                            </span>
                          </label>
      {userLocation && markerLocation  && (
        <MapContainer
          center={center}
          zoom={13}
          style={{ height: "100%", width: "100%" }}
        >
          <TileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          <Marker
            position={[markerLocation.lat, markerLocation.lng]}
            draggable={true}
          eventHandlers={{dragend : updateMarkerLocation}}
          >
            <Popup>Current Marker Position</Popup>
          </Marker>
        </MapContainer>
      )}
      </div>
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
          </Row>
              
      
        </Container>
      </section>
    </>
  );
};
