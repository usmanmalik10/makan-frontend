import React, {useState} from "react";
import { Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";

export const Forrenthome = () => {

    const [housenumber, sethousenumber] = useState("");
    const [location, setlocation] = useState("");
    const [size, setsize] = useState("");
    const [selectbedrooms, setselectbedrooms] = useState("");
    const [detail, setdetail] = useState("");
    const [rent, setrent] = useState("");
    const [contactnumber, setcontactnumber] = useState("");

    const onchangehousenumber = (e) => {
        sethousenumber(([e.target.name] = [e.target.value]));
    };
    const onchangelocation = (e) =>{
        setlocation(([e.target.name] = [e.target.value]));
    };
    const onchangesize = (e) => {
        setsize(([e.target.name] = [e.target.value]));
    };
    const onchangeselectbedrooms = (e) =>{
        setselectbedrooms(([e.target.name] = [e.target.value]));
    };
    const onchangedetail = (e) => {
        setdetail(([e.target.name] = [e.target.value]));
    };

    const onchangerent = (e) =>{
        setrent(([e.target.name] = [e.target.value]));
    };
    const onchangecontactnumber = (e) =>{
        setcontactnumber(([e.target.name]= [e.target.value]))
    };

    const handlesubmitt = (e) =>{
        e.preventDefault();
    };

  return (
    <div>
      <section>
        <Container>
          <Row>
            <Col>
              <h1>For Rent</h1>
            </Col>
          </Row>
          <Row>
            <Col>
              <h2>Upload Images</h2>
            </Col>
          </Row>
          <Row className="pt-4">
            <Col lg={6} md={6} sm={12}>
              <div>
                <label className="estate-labels" for="Housenumber">
                  
                  <span className="estate-label-headings">House Number : </span>
                </label>
                <br />
                <input
                  className="estate-inputs"
                  type="text"
                  placeholder="House Number"
                  required
                  value={housenumber}
                  onChange = {(e) => onchangehousenumber(e)}
                />
              </div>
            </Col>
            <Col lg={6} md={6} sm={12}>
              <div>
                <label className="estate-labels" for="Location">
                  <span className="estate-label-headings"> Location :</span>
                </label>{" "}
                <br />
                <select className="estate-inputs" name="location" required value={location} onChange={(e) => onchangelocation(e)}>
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
              
                </select>
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
                <select className="estate-inputs" name="size" required value={size} onChange={(e) => onchangesize(e)}>
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
                </select>
              </div>
            </Col>
            <Col lg={6} md={6} sm={12}>
              <div>
                <label className="estate-labels" for="Select Bedrooms">
                  <span className="estate-label-headings">
                    
                    Select Bedrooms :
                  </span>
                </label>
                <br />
                <select className="estate-inputs" name="selectbedrooms" required value={selectbedrooms} onChange ={(e) => onchangeselectbedrooms(e)}>
                  <option value="detail"> Select Bedrooms :</option>
                  <option value="Two Bedrooms"> Two Bedrooms</option>
                  <option value="ThreeBedrooms"> Three Bedrooms</option>
                  <option value="Four Bedrooms"> Four Bedrooms</option>
                  <option value=" Five Bedrooms"> Five Bedrooms</option>
                  <option value=" Six Bedrooms"> Six Bedrooms</option>
                  <option value="Seven Bedrooms"> Seven Bedrooms</option>
                  <option value=" EightBedrooms"> Eight Bedrooms</option>
                </select>
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
                <select className="estate-inputs" name="detail" required value={detail} onChange = {(e) => onchangedetail(e)}>
                  <option value="detail"> Detail</option>
                  <option value="Single Story"> Single Story</option>
                  <option value="Double Story"> Double Story</option>
                </select>
              </div>
            </Col>
            <Col lg={6} md={6} sm={12}>
              <div>
                <label className="estate-labels" for="Rent">
                  <span className="estate-label-headings"> Rent : </span>
                </label>
                <br />
                <input
                  className="estate-inputs"
                  type="number"
                  placeholder="Rent"
                  required
                  value={rent}
                  name="rent"
                  onChange = {(e) => onchangerent(e)}
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
                  required
                  value={contactnumber}
                  name="contactnumber"
                  onChange={(e) => onchangecontactnumber(e)}
                />
              </div>
            </Col>
            <Col lg={6} md={6} sm={12}>
              <div className="estate-button-div">
                <Link to="/" className="estate-button" onClick={handlesubmitt}>
                  
                  Submit
                </Link>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </div>
  );
};
