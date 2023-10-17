import React, {useState} from "react";
import { Col, Container, Row, Form } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import { createrealestate } from "../../../features/realestate/realestateSlice";
import Spinner2 from "../../Common/spinner2/spinner2";
import realestateService from "../../../features/realestate/realestateService";
import { homeforsale } from "../../constants/config/config.dev";
import ImageUploader from "../../Common/ImageUploader/ImageUploader";


export const Forsalehome = () => {

  const token = localStorage.getItem("accessToken");
  console.log('checktoken', token)

  const [selectedFile, setSelectedFile] = useState(null);
  const [formData, setFormData] = useState({
    address: "",
    location: "",
    size: "",
    contectNumber: "",
    bedRooms: "",
    price: "",
    details: { story:"" },
  });
  console.log(formData);
  const { address, location, size, contectNumber, bedRooms, price, details } =
    formData;

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { isLoading, isError, isSuccess, message } = useSelector(
    (state) => state.realestate
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

    const propertydescription = {
      ...homeforsale,
      address,
      location,
      size,
      contectNumber,
      bedRooms,
      price,
      details,
    };
    console.log("propertydescription", propertydescription);

    // await dispatch(createrealestate(houseforrent, token)).unwrap();

    dispatch(createrealestate(propertydescription, token)).then(() =>
      realestateService.createrealestate(propertydescription, token)
    );
    navigate('/estatealldata');
  };
   
  const [images, setImages] = React.useState([]);
  const maxNumber = 5;

  return (
    <>
    <form onSubmit={handleSubmit}>
    <div>
      <section>
        <Container>
          <Row>
            <Col>
              <h1>For Sale</h1>
            </Col>
          </Row>
          <Row>
          <ImageUploader images={images} setImages={setImages} maxNumber={maxNumber}/>
          </Row>
          <Row className="pt-4">
            <Col lg={6} md={6} sm={12}>
              <div>
                <label className="estate-labels" for="Housenumber">
                  {" "}
                  <span className="estate-label-headings">House Number : </span>
                </label>{" "}
                <br />
                <input
                  className="estate-inputs"
                  type="text"
                  placeholder="House Number"
                  required
                  value={address}
                  name="address"
                  onChange={onChange}
                />
              </div>
            </Col>
            <Col lg={6} md={6} sm={12}>
              <div>
                <label className="estate-labels" for="Location">
                  <span className="estate-label-headings"> Location :</span>
                </label>{" "}
                <br />
                <Form.Select className="estate-inputs" name="location" required value={location} onChange={onChange}>
                <option>Location</option>
                  <option value="farid town">Farid Town</option>
                  <option value="tariq bin ziad colony"> Tariq Bin Ziad Colony</option>
                  <option value="fateh sher colony"> Fateh Sher Colony</option>
                  <option value="Palm View">Palm View Madhali Road</option>
                  <option value="Al-Razzaq Executives">Al-Razzaq Executives Madhali Road</option>
                  <option value="Jeewan City ">Jeewan City  Madhali Road</option>
                  <option value="MS Garden">MS Garden Madhali Road</option>
                  <option value="Madina Garden ">Madina Garden  Madhali Road</option>
                  <option value="Rafi Garden">Rafi GardenMadhali Road</option>
                  <option value="Kalma Garden ">Kalma Garden  Madhali Road</option>
                  <option value="Al-Razzaq Royals">Al-Razzaq Royals Madhali Road</option>
                  <option value="Golf City Phase I ">Golf City Phase I Opposite Iris Resirt Madhali Road</option>
                  <option value="Palm Garden">Palm Garden Madhali Road</option>
                  <option value="Global Village ">Global Village  Madhali Road</option>
                  <option value="Sahiwal City">Sahiwal City Madhali Road</option>
                  <option value="Sahiwal Green ">Sahiwal Green  Madhali Road</option>
                  <option value="Green Valley ">Green Valley  Madhali Road</option>
                  <option value="Golf City Phase II ">Golf City Phase II Madhali Road Near Sarwar Chowk</option>
                  <option value="Gulshan-e-Sarwar ">Gulshan-e-Sarwar Sarwar Chowk</option>
                  <option value="Royal Orchard">Royal Orchard Opposite COMSATS University</option>
                  <option value="Al-Haram City ">Al-Haram City Kacha Pakka Noorshah Road</option>
                  <option value="Al-Haram City (Rasheed Block)">Al-Haram City (Rasheed Block) Kacha Pakka Noorshah Road</option>
                  <option value="Jatala Avenue ">Jatala Avenue Kacha Pakka Noorshah Road </option>
                  <option value="Ahmad Villas">Ahmad Villas Kacha Pakka Noorshah Road</option>
                  <option value="Al-Asar Avenue ">Al-Asar Avenue Kacha Pakka Noorshah Road </option>
                  <option value="Grand City ">Grand City Kacha Pakka Noorshah Road </option>
                  <option value="Mustafa Garden ">Mustafa Garden Kacha Pakka Noorshah Road </option>
                  <option value="Sohni Dharti ">Sohni Dharti Muhammad Pur Road</option>
                  <option value="Alpha Garden">Alpha Garden Muhammad Pur Road</option>
                  <option value="Sahiwal Smart City ">Sahiwal Smart City Muhammad Pur Road</option>
                  <option value="Ettehad City ">Ettehad City Muhammad Pur Road</option>
                  <option value="Al-Karim Town (Phase I & II)">Al-Karim Town (Phase I & II) Muhammad Pur Road</option>
                  <option value="King Subhan City">King Subhan City Muhammad Pur Road</option>
                  <option value="Green Sahiwal Smart City ">Green Sahiwal Smart City Muhammad Pur Road</option>
                  <option value="Al-Wali Orchard ">Al-Wali Orchard Adda Mai Wali Masjid</option>
                  <option value="Ijaz Garden ">Ijaz Garden Sahiwal Bypass Near Sarwar Chowk </option>
                  <option value="GM Garden ">GM Garden Sahiwal Bypass Near Old Harrapa Road</option>
                  <option value="Al-Razzaq Royals">Al-Razzaq Royals Madhali Road</option>
                  <option value="Al-Haram Phase II">Al-Haram Phase II Old Harrapa Road</option>
                  <option value="Royal Fort">Royal Fort Old Harrapa Road</option>
                  <option value="Merak City">Merak City Sahiwal Bypass Near Old Harrapa Road</option>
                  <option value="Golf City Phase III">Golf City Phase III Old Harrapa Road</option>
                  <option value="Indus City">Indus City Old Harrapa Road</option>
                  <option value="Niaz Garden ">Niaz Garden Adda 97/6-R Old Harrapa Road</option>
                  <option value="Gulshan-e-Mehfooz">Gulshan-e-Mehfooz Arifwala Road Near Bypass</option>
                  <option value="Faisal Town ">Faisal Town Arifwala Road</option>
                  <option value="Al-Haseeb Town ">Al-Haseeb Town Arifwala Road</option>
                  <option value="Ajwa City">Ajwa City Arifwala Road</option>
                  <option value="Indus Residentia">Indus Residentia GT Road Near Usmania Restaurant</option>
                  <option value="Super City">Super City GT Road Near Usmania Restaurant</option>
                  <option value="Azan City">Azan City GT Road Near Usmania Restaurant</option>
                  <option value="Razzaq Villas">Razzaq Villas Madhali Road</option>
                  <option value="Ahmar Block ">Ahmar Block  Madhali Road</option>
                </Form.Select>
              </div>
            </Col>
          </Row>
          <Row className="pt-4">
            <Col lg={6} md={6} sm={12}>
              <div>
                <label className="estate-labels" for="Size">
                  <span className="estate-label-headings">Size : </span>
                </label>
                <br />
                <Form.Select className="estate-inputs" name="size" required value={size} onChange={onChange}>
                  <option value="size"> Size</option>
                  <option value="3 Marla"> 3 Marla</option>
                  <option value="4 Marla"> 4 Marla</option>
                  <option value="3 Marla"> 5 Marla</option>
                  <option value="3 Marla"> 7 Marla</option>
                  <option value="3 Marla"> 8 Marla</option>
                  <option value="3 Marla"> 10 Marla</option>
                  <option value="3 Marla"> 12 Marla</option>
                  <option value="3 Marla"> 15 Marla</option>
                  <option value="3 Marla"> 1 kanal</option>
                  <option value="3 Marla"> 2 Kanal</option>
                  <option value="3 Marla"> 3 Kanal</option>
                  <option value="3 Marla"> 4 Kanal</option>
                  <option value="3 Marla"> 5 Kanal</option>
                </Form.Select>
              </div>
            </Col>
            <Col lg={6} md={6} sm={12}>
              <div>
                <label className="estate-labels" for="Select Bedrooms">
                  <span className="estate-label-headings">
                    Select Bedrooms
                  </span>
                </label>
                <br />
                <Form.Select className="estate-inputs" name="bedRooms" required value={bedRooms} onChange={onChange}>
                  <option value="detail"> Select Bedrooms</option>
                  <option value="2"> 2</option>
                  <option value="3">3</option>
                  <option value="4">4</option>
                  <option value="5">5</option>
                  <option value="6">6</option>
                  <option value="7">7</option>
                  <option value="8">8</option>
                </Form.Select>
              </div>
            </Col>
          </Row>
          <Row className="pt-4">
            <Col lg={6} md={6} sm={12}>
              <div>
                <label className="estate-labels" for="Detail">
                  <span className="estate-label-headings"> Detail : </span>
                </label>
                <br />
                <Form.Select className="estate-inputs" name="details.story>" required value={details.story} onChange={onChange}>
                  <option value="detail"> Detail</option>
                  <option value="Single Story"> Single Story</option>
                  <option value="Double Story"> Double Story</option>
                </Form.Select>
              </div>
            </Col>
            <Col lg={6} md={6} sm={12}>
              <div>
                <label className="estate-labels" for="Rent">
                  <span className="estate-label-headings"> Price : </span>
                </label>{" "}
                <br />
                <input
                  className="estate-inputs"
                  type="number"
                  placeholder="Price"
                  required
                  name="price"
                  value={price}
                  onChange={onChange}
                />
              </div>
            </Col>
          </Row>
          <Row className="pt-4">
            <Col lg={6} md={6} sm={12}>
              <div>
                <label className="estate-labels" for="Contact Number">
                  
                  <span className="estate-label-headings">
                    Contact Number :
                  </span>
                </label>
                <br />
                <input
                  className="estate-inputs"
                  type="number"
                  placeholder="Enter Number"
                  name="contectNumber"
                  value={contectNumber}
                  required
                  onChange={onChange}
                />
              </div>
            </Col>
            <Col lg={6} md={6} sm={12}>
            <div className="login-button">
                    <button type="submit">Submit</button>
                  </div>
            </Col>
          </Row>
        </Container>
      </section>
    </div>
    </form>
    </>
  );
};
