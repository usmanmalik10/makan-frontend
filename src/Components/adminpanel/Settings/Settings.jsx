import React from "react";
import "./style.css";
import "../GigApproval/style.css";
const Settings = () => {
  return (
    <div>
      <div>
        <h1 className="dashboard-header-text">Settings</h1>
      </div>
      <div className="gig-detail-outer-wrapper">
        <div className="settings-settings">
          <h1>Change Password</h1>
          <p>Old Password</p>
          <input type="text" />

          <p>New Password</p>
          <input type="text" />

          <p>Repeat New Password</p>
          <input type="text" />
        </div>
        <div className="settings-button-wrapper">
          <button className="second-button">Submit</button>
          <button className="first-button">Reset</button>
        </div>
      </div>
    </div>
  );
};

export default Settings;
