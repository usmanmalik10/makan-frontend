import React, { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { NavLink } from "react-router-dom";

export const Newad = () => {

  const [openDropdown, setOpenDropdown] = useState(null);

  const handleDropdownClick = (id) => {
    if (openDropdown === id) {
      setOpenDropdown(null);
    } else {
      setOpenDropdown(id);
    }
  };

  return (
    <div>
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
                <select value={openDropdown}
                  onChange={(e) => handleDropdownClick(e.target.value)} className="business-inputs">
                  <option value="">Select Category</option>
                  <option value="dropdown1">Marble & Tiles</option>
                  <option value="dropdown2">Sanatory</option>
                  <option value="dropdown3">Wood Store</option>
                  <option value="dropdown4">Building Material</option>
                  <option value="dropdown5">Paint Stores</option>
                  <option value="dropdown6">Paint Stores</option>
                  <option value="dropdown7">Steel Pipe</option>
                  <option value="dropdown8">Iron Store</option>
                  <option value="dropdown9">Welding Shop</option>
                  <option value="dropdown10">Aluminium & Glass</option>
                  <option value="dropdown11">HardWare</option>
                  <option value="dropdown12">Brick Work's</option>
                  <option value="dropdown13">Steel Shop</option>
                  <option value="dropdown14">Electronics</option>
                  <option value="dropdown15">Glass Item's</option>
                  <option value="dropdown16">Paint Stores</option>
                  <option value="dropdown17">Boring Material's</option>
                  <option value="dropdown18">Ceramics</option>
                </select>
              </div>
            </Col>
          </Row>
          <Row>
          {openDropdown === "dropdown1" && (
        <div>
          {/* Dropdown Content for Marble & Tiles */}
          <p>Marble & Tiles Dropdown Content</p>
        </div>
      )}

      {openDropdown === "dropdown2" && (
        <div>
          {/* Dropdown Content for Sanitary */}
          <p>Sanitary Dropdown Content</p>
        </div>
      )}

      {openDropdown === "dropdown3" && (
        <div>
          {/* Dropdown Content for Wood Store */}
          <p>Wood Store Dropdown Content</p>
        </div>
      )}
          </Row>
        </Container>
      </section>
    </div>
  );
};
