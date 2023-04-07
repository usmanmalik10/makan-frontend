import React, { useRef } from "react";
import Slider from "react-slick";
import arrowleft from "../../../Assets/Home-Screen/arrowleft.png";
import arrowright from "../../../Assets/Home-Screen/arrowright.png";

const UserGigs = ({ pic, work, StartingPrice, service }) => {
  const slider = useRef(null);
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
    <div style={{ position: "relative" }}>
      <img
        src={arrowleft}
        alt=""
        onClick={() => slider?.current?.slickPrev()}
        className="prev-button-user"
      />
      <img
        src={arrowright}
        alt=""
        onClick={() => slider?.current?.slickNext()}
        className="next-button-user"
      />

      <Slider
        {...settings}
        ref={slider}
        className="user-detail-image-container"
      >
        <div className="user-detail-image-sub-container">
          <img src={pic} alt="" className="user-detail-image" />
          <h1 className="service-heading ">{work}</h1>
          <p className="service-type ">{service}</p>
          <div className="starting-price-container">
            <h1>Starting Price</h1>
            <h1>${StartingPrice}</h1>
          </div>
        </div>
        <div className="user-detail-image-sub-container">
          <img src={pic} alt="" className="user-detail-image" />
          <h1 className="service-heading ">{work}</h1>
          <p className="service-type ">{service}</p>
          <div className="starting-price-container">
            <h1>Starting Price</h1>
            <h1>${StartingPrice}</h1>
          </div>
        </div>
        <div className="user-detail-image-sub-container">
          <img src={pic} alt="" className="user-detail-image" />
          <h1 className="service-heading ">{work}</h1>
          <p className="service-type ">{service}</p>
          <div className="starting-price-container">
            <h1>Starting Price</h1>
            <h1>${StartingPrice}</h1>
          </div>
        </div>
      </Slider>
    </div>
  );
};

export default UserGigs;
