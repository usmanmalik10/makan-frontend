import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import RedButton from "../Utilities/Buttons/RedButton";
import { useNavigate } from "react-router-dom";
import "./style.css";

const UsersListTable = () => {
  const navigate = useNavigate();
  const dummyData = [
    {
      id: 1,
      user: "Ahsan",
      email: "ahsan@gmail.com",
    },
    {
      id: 2,
      user: "Ahsan",
      email: "ahsan@gmail.com",
    },
    {
      id: 3,
      user: "Ahsan",
      email: "ahsan@gmail.com",
    },
    {
      id: 4,
      user: "Ahsan",
      email: "ahsan@gmail.com",
    },
  ];

  const tableHeader = [
    {
      label: "Number",
    },
    {
      label: "User",
    },

    {
      label: "Email",
    },
    {
      label: "",
    },
  ];

  const handleView = () => {
    navigate("/userdetail");
  };

  return (
    <TableContainer className="table-wrapper">
      <Table sx={{ minWidth: 650 }}>
        <TableHead>
          <TableRow>
            {tableHeader.map((e, i) => (
              <TableCell className="table-header" align="center">
                {e.label}
              </TableCell>
            ))}
          </TableRow>
        </TableHead>
        <TableBody>
          {dummyData.map((e, i) => (
            <TableRow key={e.id}>
              <TableCell
                component="th"
                scope="row"
                align="center"
                className="secondary-table-text"
              >
                {e.id}
              </TableCell>
              <TableCell align="center"> {e.user}</TableCell>
              <TableCell align="center"> {e.email}</TableCell>
              <TableCell align="center">
                {" "}
                <RedButton label="View" handleView={handleView} />
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default UsersListTable;
