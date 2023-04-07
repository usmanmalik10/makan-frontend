import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import RedButton from "../Utilities/Buttons/RedButton";
import BlueButton from "../Utilities/Buttons/BlueButton";
import { useNavigate } from "react-router-dom";
import "../UsersList/style.css";

const GigApprovalListTable = () => {
  const navigate = useNavigate();
  const dummyData = [
    {
      id: 1,
      title: "Plumber",
      price: "$25.00",
      type: "Services",
    },
    {
      id: 2,
      title: "Plumber",
      price: "$25.00",
      type: "Services",
    },
    {
      id: 3,
      title: "Plumber",
      price: "$25.00",
      type: "Services",
    },
  ];

  const tableHeader = [
    {
      label: "Number",
    },
    {
      label: "Title",
    },
    {
      label: "Price",
    },
    {
      label: "Type",
    },
    {
      label: "",
    },
  ];

  const handleGigDetail = () => {
    navigate("/gigdetail");
  };
  const handleApprove = () => {
    navigate("/gigapproval");
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
              <TableCell align="center"> {e.title}</TableCell>
              <TableCell align="center"> {e.price}</TableCell>
              <TableCell align="center"> {e.type}</TableCell>
              <TableCell align="center">
                <RedButton label="View" handleView={handleGigDetail} />
                <BlueButton label="Approval" handleView={handleApprove} />
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default GigApprovalListTable;
