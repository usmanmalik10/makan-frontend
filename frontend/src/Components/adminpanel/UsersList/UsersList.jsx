import React from "react";
import { FiSearch } from "react-icons/fi";
import BlueButton from "../Utilities/Buttons/BlueButton";
import UsersListTable from "./UsersListTable";
import "./style.css";

const UsersList = () => {
  return (
    <div>
      <div className="user-list-input">
        <FiSearch className="search-icon" />
        <input required type="email" placeholder="Name..." />
        <div className="search-button">
          <BlueButton label="Search" />
        </div>
      </div>
      <div>
        <h1 className="dashboard-header-text">Users List</h1>
      </div>
      <UsersListTable />
    </div>
  );
};

export default UsersList;
