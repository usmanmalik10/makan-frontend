import React, {
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";
import { Container, Row, Col, Form } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { createshop } from "../../../features/shop/shopSlice";
import Spinner2 from "../../Common/spinner2/spinner2";
import shopService from "../../../features/shop/shopService";

import { BsImage } from "react-icons/bs";
import { useDropzone } from "react-dropzone";
import classNames from "classnames";
import { toast } from "react-toastify";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import { storesData } from "../../../lib/storesData";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";

const schema = z.object({
  shopName: z.string().min( 1 , "Shop Name is required"),
  contactNumber: z.string().nonempty({ message: "Contact Number is required" }),
  address: z.string().nonempty({ message: "Shop Address is required" }),
  areaOfService: z
    .string()
    .nonempty({ message: "Area of services must be selected" })
    .refine((value) => value !== "Area of services", {
      message: "Area of services must be selected",
    }),
});
const isImageSizeValid = (file, maxImageSizeInMb) => {
  const maxSizeInBytes = maxImageSizeInMb * 1024 * 1024;
  if (file) {
    return file.size > maxSizeInBytes ? false : true;
  } else {
    return false;
  }
};

export const NewadCopy = () => {
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

  const { isLoading } = useSelector((state) => state.shop);

  function clearProfile() {
    setFile({
      file: null,
      src: "",
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
        let coords = { lat: 30.670104900043903, lng: 73.11058044433595 };
        setUserLocation(coords);
        setMarkerLocation(coords);
        setCenter([coords.lat, coords.lng]);
        console.error("Location access denied");
        alert("Please enable location for a better experience");
      }
    );
  }, []);

  const updateMarkerLocation = (event) => {
    console.log("Updating Marker locatin");

    const newCoords = event.target.getLatLng();
    setMarkerLocation({ lat: newCoords.lat, lng: newCoords.lng });
  };
  const { register, handleSubmit, errors } = useForm({
    resolver: zodResolver(schema),
  });

  const onSubmit = (data) => {
    console.log(data);
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
                  {storesData.map((store) => (
                    <option value={store.category}>
                      {store.title.replace("Stores", "")}
                    </option>
                  ))}
                </select>
              </div>
            </Col>
          </Row>
          {openDropdown.length > 2 &&
            (file.src ? (
              <div>
                <div className="inner-image-upload ">
                  <img alt="Blog" src={file.src} />
                </div>

                <div class="d-flex justify-content-center ">
                  <button onClick={clearProfile} className="btn-pm-sm">
                    Delete Image
                  </button>
                </div>
              </div>
            ) : (
              <section className="image-div-upload">
                <div {...getRootProps()}>
                  <input {...getInputProps()} />

                  <div
                    className={classNames(
                      "inner-image-div-upload",
                      isDragActive ? "is-dragging" : ""
                    )}
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
            ))}

          <Row>
            {openDropdown.length > 2 && (
              <div>
                <form onSubmit={handleSubmit(onSubmit)}>
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
                              name="shopName"
                              ref={register}
                            />
                            {errors.shopName && (
                              <small style={{ color: "red" }}>
                                {errors.shopName.message}
                              </small>
                            )}
                          </div>
                        </Col>
                        {/* <Col lg={6} md={6} sm={12}>
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
                              name="contactNumber"
                              ref={register}
                            />
                            {errors && errors?.contactNumber && (
                              <small style={{ color: "red" }}>
                                {errors.contactNumber.message}
                              </small>
                            )}
                          </div>
                        </Col> */}
                      </Row>
                      {/* <Row>
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
                              name="address"
                              ref={register}
                            />
                            {errors && errors.address && (
                              <small style={{ color: "red" }}>
                                {errors.address.message}
                              </small>
                            )}
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
                            <Form.Select
                              className="business-inputs"
                              name="areaOfService"
                              ref={register}
                            >
                              <option>Area of services</option>
                              <option>Sahiwal City</option>
                              <option>Sahiwal Division</option>
                              <option>Punjab</option>
                              <option>Pakistan</option>
                            </Form.Select>
                            {errors && errors.areaOfService && (
                              <small style={{ color: "red" }}>
                                {errors.areaOfService.message}
                              </small>
                            )}
                          </div>
                        </Col>
                      </Row> */}

                      <Row className="mt-4">
                        <div className="map-container">
                          <label className="business-labels">
                            <span className="business-label-headings">
                              Location :
                            </span>
                          </label>
                          {userLocation && markerLocation && (
                            <MapContainer
                              center={center}
                              zoom={13}
                              style={{ height: "100%", width: "100%" }}
                            >
                              <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
                              <Marker
                                position={[
                                  markerLocation.lat,
                                  markerLocation.lng,
                                ]}
                                draggable={true}
                                eventHandlers={{
                                  dragend: updateMarkerLocation,
                                }}
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
          </Row>
        </Container>
      </section>
    </>
  );
};
