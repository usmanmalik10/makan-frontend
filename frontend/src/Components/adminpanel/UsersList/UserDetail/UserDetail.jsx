import React from "react";
import { Grid } from "@mui/material";
import { AiOutlineArrowLeft } from "react-icons/ai";
import { HiOutlineLocationMarker, HiOutlineUser } from "react-icons/hi";
import { useNavigate } from "react-router-dom";
import profilepic from "../../../Assets/Our-Team-Screen/profilepic.png";
import UserGigs from "./UserGigs";
import "./style.css";

const UserDetail = () => {
  const navigate = useNavigate();
  const dummyData = [
    {
      title: "Gigs",
      data: [
        {
          pic: profilepic,
          work: "I Will Do Plumber Work",
          service: "service",
          StartingPrice: 5,
        },
        {
          pic: profilepic,
          work: "Wrench",
          service: "store",
          StartingPrice: 50,
        },
        {
          pic: profilepic,
          work: "I Will Do Plumber Work",
          service: "service",
          StartingPrice: 5,
        },
      ],
    },
    {
      title: "Services",
      data: [
        {
          pic: profilepic,
          work: "I Will Do Plumber Work",
          service: "service",
          StartingPrice: 5,
        },
        {
          pic: profilepic,
          work: "Wrench",
          service: "service",
          StartingPrice: 50,
        },
        {
          pic: profilepic,
          work: "I Will Do Plumber Work",
          service: "service",
          StartingPrice: 5,
        },
      ],
    },
  ];

  return (
    <div>
      <div className="userdetail-header">
        <AiOutlineArrowLeft
          className="backicon"
          onClick={() => navigate("/userslist")}
        />
        <h1>User Details</h1>
      </div>

      <div className="userdetail-outer-container">
        <Grid container>
          <Grid item xs={12} sm={12} md={12} lg={4}>
            <div className="left-user-detail-container">
              <div className="online-container">
                <button> * Online</button>
              </div>
              <div className="left-user-detail-sub-container">
                <img src={profilepic} alt="" />
                <h1>Username</h1>
                <p>Please Enter Your Slogan</p>
              </div>
              <div className="left-user-detail-last-container">
                <div className="left-user-detail-last-sub-container">
                  <div className="left-user-detail-from-container">
                    <HiOutlineLocationMarker />
                    <h1>From</h1>
                  </div>
                  <h1 className="left-user-detail-sub-location"> Pakistan</h1>
                </div>
                <div className="left-user-detail-last-sub-container">
                  <div className="left-user-detail-from-container">
                    <HiOutlineUser />
                    <h1>Member Since</h1>
                  </div>
                  <h1 className="left-user-detail-sub-location"> Dec 2022</h1>
                </div>
              </div>
            </div>
          </Grid>
          <Grid item xs={12} sm={12} md={12} lg={8}>
            {dummyData.map((item) => (
              <>
                <h1 className="right-container-title">{item.title}</h1>
                <div className="right-outer-container">
                  {item.data.map((e) => (
                    <div className="right-inner-container">
                      <UserGigs
                        pic={e.pic}
                        work={e.work}
                        StartingPrice={e.StartingPrice}
                        service={e.service}
                      />
                    </div>
                  ))}
                </div>
              </>
            ))}
          </Grid>
        </Grid>
      </div>
    </div>
  );
};

export default UserDetail;
