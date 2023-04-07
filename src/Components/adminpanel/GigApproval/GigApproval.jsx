import React, { useRef } from "react";
import { AiOutlineArrowLeft } from "react-icons/ai";
import homelogo from "../../Assets/Home-Screen/homelogo.png";
import Slider from "react-slick";
import house from "../../Assets/Home-Screen/house.png";
import house2 from "../../Assets/Home-Screen/house2.png";
import house3 from "../../Assets/Home-Screen/house3.png";
import arrowleft from "../../Assets/Home-Screen/arrowleft.png";
import arrowright from "../../Assets/Home-Screen/arrowright.png";
import { useNavigate } from "react-router-dom";
import "./style.css";

const GigApproval = () => {
  const slider = useRef(null);
  const navigate = useNavigate();
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    dots: false,
  };
  return (
    <div>
      <div className="gig-approval-outer-container">
        <div className="first-gig-approval-section">
          <AiOutlineArrowLeft
            className="gig-back-icon"
            onClick={() => navigate("/gigapprovallist")}
          />
          <h1>House For Sale</h1>
        </div>
        <div className="second-gig-approval-section">
          <div className="username-sub-section">
            <img src={homelogo} alt="" />
            <div className="username-last-section">
              <h1>User Name</h1>
              <p>User Location</p>
            </div>
          </div>
          <div className="price-section">
            <h1>Rs. 200,000</h1>
          </div>
        </div>

        <div style={{ position: "relative" }}>
          <img
            src={arrowleft}
            alt=""
            onClick={() => slider?.current?.slickPrev()}
            className="prev-button-gig"
          />
          <img
            src={arrowright}
            alt=""
            onClick={() => slider?.current?.slickNext()}
            className="next-button-gig"
          />
          <Slider {...settings} ref={slider}>
            <img src={house} alt="" className="gig-approval-image" />
            <img src={house2} alt="" className="gig-approval-image" />
            <img src={house3} alt="" className="gig-approval-image" />
          </Slider>
        </div>

        <div className="gig-second-image-container">
          <img src={house} alt="" />
          <img src={house2} alt="" />
          <img src={house3} alt="" />
        </div>

        <div className="description-container">
          <h1>Description</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore
            pariatur debitis cupiditate asperiores ipsa ipsam voluptate, dolores
            iure quia sequi aperiam amet distinctio culpa fuga, repellendus
            commodi ea qui incidunt. Lorem ipsum dolor sit, amet consectetur
            adipisicing elit. Voluptatibus at obcaecati laborum facere neque
            voluptatem! Ea iusto iste sint maxime eos! Perferendis cupiditate
            dolor ipsam consequuntur, porro amet maiores temporibus. Sunt, natus
            facilis! Saepe porro reprehenderit consectetur, ducimus inventore
            impedit animi necessitatibus ex iste nisi ad quia eius accusamus
            dignissimos reiciendis quasi fugit unde? Expedita aperiam soluta
            fugit ratione possimus.
          </p>
        </div>

        <div className="description-container">
          <h1>Location</h1>
          <p>Farid Town Sahiwal, Pakistan</p>
        </div>

        <div className="description-container">
          <h1>User Information</h1>
          <div className="gig-input-container">
            <div className="gig-input-sub-container">
              <p>User Name</p>
              <input type="text" />
            </div>
            <div className="gig-input-sub-container">
              <p>Phone Number</p>
              <input type="text" />
            </div>
          </div>
          <div className="gig-input-sub-container-last">
            <p>User Location</p>
            <input type="text" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default GigApproval;
