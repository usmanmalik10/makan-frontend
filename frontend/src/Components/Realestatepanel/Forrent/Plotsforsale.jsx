import React, {useState} from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";

export const Plotsforsale = () => {
    const [plotnumber, setplotnumber] = useState("");
    const [location, setlocation] = useState("");
    const [size, setsize] = useState("");
    const [price, setprice] = useState("");
    const [contactnumber, setcontactnumber] = useState("");

    const onchangeplotnumber = (e) =>{
        setplotnumber(([e.target.name] = [e.target.value]));
    };

    const onchangelocation = (e) =>{
        setlocation(([e.target.name] = [e.target.value]));
    };
    const onchangesize = (e) =>{
        setsize(([e.target.name] = e.target.value));
    };
    const onchangeprice = (e) =>{
        setprice(([e.target.name] = [e.target.value]));
    };
    const onchangecontactnumber = (e) =>{
        setcontactnumber(([e.target.name] = [e.target.value]));
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
              <h1>Plots For Sale</h1>
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
                <label className="estate-labels" for="Plotnumber">
                  {" "} 
                  <span className="estate-label-headings">Plot Number : </span>
                </label>{" "}
                <br />
                <input
                  className="estate-inputs"
                  type="text"
                  placeholder="Plot Number"
                  required
                  value={plotnumber}
                  name="plotnumber"
                  onChange={(e) => onchangeplotnumber(e)}
                />
              </div>
            </Col>
            <Col lg={6} md={6} sm={12}>
              <div>
                <label className="estate-labels" for="Location">
                  <span className="estate-label-headings"> Location :</span>
                </label>{" "}
                <br />
                <select className="estate-inputs" name="location" required value={location} onChange={(e) => onchangelocation(e)} >
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
                <label className="estate-labels" for="Price">
                  <span className="estate-label-headings"> Price : </span>
                </label>{" "}
                <br />
                <input
                  className="estate-inputs"
                  type="number"
                  placeholder="Price"
                  required
                  value={price}
                  name="price"
                  onChange={(e) => onchangeprice(e)}
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
