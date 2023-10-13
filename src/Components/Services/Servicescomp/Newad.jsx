import React, { useState, useEffect, useCallback, useMemo } from "react";
import "./Newad.scss";
import { Container, Row, Col, Button, Form } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import { createservice } from "../../../features/serviceprovider/serviceproviderSlice";
import Spinner2 from "../../Common/spinner2/spinner2";
import serviceproviderService from "../../../features/serviceprovider/serviceproviderService";
import { toast } from "react-toastify";
import { useDropzone } from "react-dropzone";
import classNames from "classnames";
import { BsImage } from "react-icons/bs";
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

  const token = localStorage.getItem("accessToken");
  
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
  function clearProfile() {
    setFile({
      file : null , 
      src : '',
    });
  }
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
      <form onSubmit={handleSubmit}>
        <div>
          <section>
            <Container>
          
                {
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
                    <span>Click to Select or Drop  Image</span>
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
                      <option value="mason">Mason</option>
                      <option value="marble">Marble & Tiles Fixer</option>
                      <option value="plumber">Plumber</option>
                      <option value="contractor">Contractor</option>
                      <option value="engineer">Engineer</option>
                      <option value="architect">Architect</option>
                      <option value="carpenter">Carpenter</option>
                      <option value="woodcutter">Wood Cutter</option>
                      <option value="painter">Painter</option>
                      <option value="polishman">Polish Man (Furniture)</option>
                      <option>Steel Fixer / Welder</option>
                      <option value="steelpolish">Steel Polish</option>
                      <option value="steelwelder">Welder</option>
                      <option value="moldingworker">Molding Worker</option>
                      <option value="leathmachineoperator">Leith Machine Operator</option>
                      <option value="aluminium">Aluminum Fixer</option>
                      <option value="glassfixer">Glass Fixer</option>
                      <option value="glasscuttingpolish">Glass Cutting & Polish</option>
                      <option value="glasspainter">Glass Painter</option>
                      <option value="glasspaperdesigner">Glass Paper & Designer</option>
                      <option value="electrician">Electrician</option>
                      <option value="actechnician">AC Technician</option>
                      <option value="electricengineer">Electric Engineer</option>
                      <option value="solarinstaller">Solar Installer</option>
                      <option value="boringworker">Boring Workers</option>
                      <option value="interiordesigner">Interior Designer</option>
                      <option value="termitetreatment">Termite Treatment</option>
                      <option value="gardener">Gardener</option>
                      <option value="landscapearchitecture">Landscape Architect</option>
                      <option value="housecleaner">House Cleaner</option>
                      <option value="accleaner">AC Cleaner</option>
                      <option value="marblepolish">Marble Polish</option>
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

