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
import { zodResolver } from "@hookform/resolvers/zod";
import { Controller, useForm } from "react-hook-form";
import { z } from "zod";
import { services } from "../../../lib/servicesData";
import { provAndCities } from "../../../lib/pakProvAndCities";
import OneImageCustomUploader from "../../Common/OneImageCustomUploader/OneImageCustomUploader";
import { useAddServiceMutation } from "../../../Redux/RtkQuery/ServiceDashboard";

const serviceSchema = z.object({
  category: z.string().min(1, "Category is required"),
  contractorName: z.string().min(1, "Contractor Name is required"),
  province: z.string().min(1, "Province is required"),
  areaOfService: z.string().min(1, "AreaOfService is required"),
  contectNumber: z.string().min(10, "Contact Number should be at least 10 digits long"),
  address: z.string().min(1, "Address is required"),
  laborRates: z.string().min(1, "Labor Rates are required"),
  chargingSchedule: z.string().min(1, "Charging Schedule is required"),
  referralKeyShop: z.string().min(1, "Referal Key is required"),
});


const isImageSizeValid = (file, maxImageSizeInMb) => {
  const maxSizeInBytes = maxImageSizeInMb * 1024 * 1024;
 if(file){
  return file.size > maxSizeInBytes ? false  : true ;
 }else {
  return false;
 }
}


export const Newad = () => {
  const [addService, { isLoading }] = useAddServiceMutation();

  const maxImageSize = 5;

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
 
  const [file, setFile] = useState({
    file: null,
    src: null,
  });
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
    const {
      register,
      handleSubmit,
      formState: { errors },
      setValue,
      trigger,
      control,
      watch
    } = useForm({
      resolver: zodResolver(serviceSchema),
    });
    
  const provinceValue = watch("province");

async function onSubmit(data){
  if(!file.file){
    toast.error('Add Image First')
  }
  data.latitude = markerLocation.lat;
  data.longitude = markerLocation.lng;
data.serviceImage=  file.base64;
try {
  // Execute the mutation and wait for the response
  const response = await addService(data).unwrap();

  // Check if the response is okay
  if (response?.ok) {
    toast.success('Service added successfully');
    // Handle successful submission, like clearing form or redirecting
  } else {
    // Handle non-OK responses here
    toast.error('Service addition failed: ' + (response?.data?.message || 'Unknown error'));
  }
} catch (error) {
  // Handle errors in the request itself, like network issues
  toast.error(`Error adding service: ${error.message || 'Unknown error'}`);
}

}
if(isLoading) {
  return <Spinner2></Spinner2>
}
  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <section>
            <Container>
          
            <OneImageCustomUploader file={file} setFile={setFile} isCustom={false}></OneImageCustomUploader>
            
            <Row className="pt-4">
        <Col lg={6} md={6} sm={12}>
          <div>
            <label className="business-labels">
              <span className="business-label-headings">
                Select Category :
              </span>
            </label>
            <br />
            <Controller
              name="category"
              control={control}
              render={({ field }) => (
                <Form.Select
                  className="select-inputfield-select"
                  {...field}
                  isInvalid={!!errors.category}
                >
                  <option value="">Select Category</option>
                  {services.map((service, index) => (
                    <option key={index} value={service.category}>
                      {service.title}
                    </option>
                  ))}
                </Form.Select>
              )}
            />
            {errors.category && (
              <p className="error-text">{errors.category.message}</p>
            )}
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
              {...register("contractorName")}
              isInvalid={!!errors.contractorName}
            />
            {errors.contractorName && (
              <p className="error-text">{errors.contractorName.message}</p>
            )}
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
        {...register("contectNumber")}
        isInvalid={!!errors.contectNumber}
      />
      {errors.contectNumber && (
        <p className="error-text">{errors.contectNumber.message}</p>
      )}
    </div>
  </Col>
  <Col lg={6} md={6} sm={12}>
    <div>
      <label className="business-labels">
        <span className="business-label-headings">
          Address :
        </span>
      </label>
      <br />
      <input
        className="business-inputs"
        type="text"
        placeholder="Address"
        {...register("address")}
        isInvalid={!!errors.address}
      />
      {errors.address && (
        <p className="error-text">{errors.address.message}</p>
      )}
    </div>
  </Col>
</Row>
<Row className="pt-4">
  
<Col lg={6} md={6} sm={12} xs={12}>
                  <div className="strategic_divs">
                    <label className="strategic_labels">
                      Select Province :
                    </label>
                    <br />
                    <Form.Select
                      className="select-inputfield-select"
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
</Row>
              <Row className="pt-4">
                
              <Col lg={6} md={6} sm={12}>
    <div>
      <label className="business-labels">
        <span className="business-label-headings">
          Charging Schedule :
        </span>
      </label>
      <br />
      <Controller
        name="chargingSchedule"
        control={control}
        render={({ field }) => (
          <Form.Select
            className="select-inputfield-select"
            {...field}
            isInvalid={!!errors.chargingSchedule}
          >
            <option value="">Charging Schedule</option>
            <option value="hourly">Hourly</option>
            <option value="daily">Daily</option>
            <option value="contract">Contract</option>
            <option value="squareFeet">Square Feet</option>
          </Form.Select>
        )}
      />
      {errors.chargingSchedule && (
        <p className="error-text">{errors.chargingSchedule.message}</p>
      )}
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
      </label>
      <br />
      <input
        type="text"
        placeholder="Labor Rate"
        className="business-inputs"
        {...register("laborRates")}
        isInvalid={!!errors.laborRates}
      />
      {errors.laborRates && (
        <p className="error-text">{errors.laborRates.message}</p>
      )}
    </div>
  </Col>
  <Col lg={6} md={6} sm={12} xs={12}>
  <label className="business-labels">
    <span className="business-label-headings">Store Referral Key :</span>
  </label>
  <br />
  <input
    className="business-inputs"
    type="text"
    placeholder="Store Referral key"
    {...register("referralKeyShop")} // Use the register function to connect the input to react-hook-form
  />
   {errors.referralKeyShop && (
        <p className="error-text">{errors.referralKeyShop.message}</p>
      )}
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

