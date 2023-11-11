import React, {
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";
import { Container, Row, Col, Form } from "react-bootstrap";

import Spinner2 from "../../Common/spinner2/spinner2";
import { provAndCities } from "../../../lib/pakProvAndCities.js";
import { BsImage } from "react-icons/bs";
import { useDropzone } from "react-dropzone";
import classNames from "classnames";
import { toast } from "react-toastify";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import { storesData } from "../../../lib/storesData";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useCreateStoresMutation } from "../../../Redux/RtkQuery/StoresDashboard";
import { useNavigate } from "react-router-dom";
import { fetchCurrentUser } from "../../../Redux/Slices/authSlice.js";
import { useDispatch } from "react-redux";

const isImageSizeValid = (file, maxImageSizeInMb) => {
  const maxSizeInBytes = maxImageSizeInMb * 1024 * 1024;
  if (file) {
    return file.size > maxSizeInBytes ? false : true;
  } else {
    return false;
  }
};

const SignupSchema = z.object({
  shopName: z.string().min(1, "Shop Name is required"),
  contectNumber: z
    .string()
    .min(10, "Contact Number should be at least 10 digits long"),
  address: z.string().min(1, "Address is required"),
  referalKey: z.string().min(1, "Referal Key is required"),
  province: z.string().min(1, "Province is required"),
  areaOfService: z.string().min(1, "AreaOfService is required"),
});
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
const naivgate  = useNavigate();
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

  function clearProfile() {
    setFile({
      file: null,
      src: "",
    });
  }
  const [userLocation, setUserLocation] = useState(null);
  const [markerLocation, setMarkerLocation] = useState(null);
  const [center, setCenter] = useState([51.505, -0.09]);
const dispatch = useDispatch()
const navigate= useNavigate()
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
  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
    trigger,
    watch
  } = useForm({
    resolver: zodResolver(SignupSchema),
  });

  
  const provinceValue = watch("province");

  const [createStrategicSalePartner, { isLoading }] = useCreateStoresMutation();
  const onSubmit = async (data) => {
    if (!file.file) return toast.error("Please add image first");
    data.areaOfService = [data.areaOfService];
    data.province = [data.province];

    const reader = new FileReader();

    reader.readAsDataURL(file.file);
    reader.onload = async () => {
      const base64Image = reader.result; // This contains the base64 encoded image.

      // Construct your payload
      const payload = {
        ...data,
        shopImage: base64Image, // Note: This is not the binary file, but a base64 string representation.
        longitude: markerLocation["lng"].toString(),
        latitude: markerLocation["lat"].toString(),
        category: selectedCategory,
       
       
      };
      payload.referralKeySSP = payload.referalKey;

      // Remove the 'referalKey' property
      delete payload.referalKey;


      try {
        const response = await createStrategicSalePartner(payload);
    
        if (response.error) {
          toast.error("Error creating strategic sale partner");
        } else {
          
          // Fetch current user details after successful creation
          dispatch(fetchCurrentUser())
          .unwrap()
          .then((userResponse) => {
            
            toast.success("Strategic sale partner created successfully");
              navigate('/stores-profile');
            })
            .catch((fetchError) => {
              toast.error(fetchError.message || 'Failed to fetch profile information.');
              // Handle the error case for fetching user details
            });
        }
      } catch (error) {
        toast.error("Error occurred while sending request");
      }
    };

    reader.onerror = (error) => {
      console.log("Error reading the file:", error);
    };
  };
  const updateMarkerLocation = (event) => {
    const newCoords = event.target.getLatLng();
    setMarkerLocation({ lat: newCoords.lat, lng: newCoords.lng });
  };

  return (
    <>
      <section>
        {isLoading ? (
          <Spinner2 />
        ) : (
          <Container>
       
            {true &&
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
                          <span>Yeah Yeah Exactl`y Drop it 😃</span>
                        </>
                      )}
                    </div>
                  </div>
                </section>
              ))}

            <Row>
              {true && (
                <div>
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
                              {...register("shopName")}
                            />

                            {errors?.shopName?.message && (
                              <p className="error-text">
                                {errors.shopName.message}
                              </p>
                            )}
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
                              {...register("contectNumber")}
                            />
                            {errors?.contectNumber?.message && (
                              <p className="error-text">
                                {errors.contectNumber.message}
                              </p>
                            )}
                          </div>
                        </Col>
                      </Row>
                      <Row>
                        <Col lg={6} md={6} sm={12} className="mt-4">
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
                              {...register("address")}
                            />
                            {errors?.address?.message && (
                              <p className="error-text">
                                {errors.address.message}
                              </p>
                            )}
                          </div>
                        </Col>

                        <Col lg={6} md={6} sm={12} xs={12} className="mt-4">
                  <div className="strategic_divs">
                    <label className="strategic_labels">
                      Select Province :
                    </label>
                    <br />
                    <Form.Select
                     
                      className="business-inputs"
                      {...register("province")}
                    >
                      <option value="">Select Value</option>
                      {Object.keys(provAndCities).map((prov) => (
                        <option key={prov} value={prov}>
                          {prov}
                        </option>
                      ))}
                    </Form.Select>
                    {errors.province && (
                      <p style={{ color: "red", fontSize: "small" }}>
                        {errors.province.message}
                      </p>
                    )}
                  </div>
                </Col>
              
               
                      </Row>
                      <Row>
                      <Col lg={6} md={6} sm={12} className="mt-4">
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
                              onChange={(e) =>
                                setValue("areaOfService", e.target.value)
                              }
                              onBlur={() => trigger("areaOfService")}
                              defaultValue="Area of services"
                            >
                              <option value="">Select Value</option>
                      {provAndCities[provinceValue]?.map((city) => (
                        <option value={city}>{city}</option>
                      ))}
                            </Form.Select>
                            {errors?.areaOfService?.message && (
                              <span className="error-text">
                                {errors.areaOfService.message}
                              </span>
                            )}
                          </div>
                        </Col>
                        <Col lg={6} md={6} sm={12} className="mt-4">
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
                      <Row>
               
                        <Col lg={6} md={6} sm={12} className="mt-4">
                          <div>
                            <label className="business-labels">
                              <span className="business-label-headings">
                                Referal Key:
                              </span>
                            </label>
                            <br />
                            <input
                              className="business-inputs"
                              type="text"
                              placeholder="Referal Key"
                              {...register("referalKey")}
                            />
                            {errors?.referalKey?.message && (
                              <p className="error-text">
                                {errors.referalKey.message}
                              </p>
                            )}
                          </div>
                        </Col>
                      </Row>
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
                          <button onClick={handleSubmit(onSubmit)}>
                            Submit
                          </button>
                        </div>
                      </Col>
                    </Container>
                  </section>
                </div>
              )}
            </Row>
          </Container>
        )}
      </section>
    </>
  );
};
