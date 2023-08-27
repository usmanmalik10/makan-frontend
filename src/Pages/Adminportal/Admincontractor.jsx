import React from 'react'
import { Grid } from "@mui/material";
import AdminNavbar from '../../Components/adminpanel/AdminNavbar/Navbar';
import "../../Components/Userdashboard/UserNavbar/userstyle.css"
import "../../App.css"
import { Admincontractors } from '../../Components/adminpanel/Adminservices/Admincontractor/Admincontractors';

export const Admincontractor = () => {
	return (
	  <div className='main-wrapper'>
	  <Grid container>
					<Grid item xs={12} sm={12} md={3} lg={2.7}>
					  <AdminNavbar />
					</Grid>
					<Grid
					  item
					  xs={12}
					  sm={12}
					  md={9}
					  lg={9.3}
					  className="right-panel-wrapper"
					>
					  <Admincontractors />
					</Grid>
				  </Grid>
	  </div>
	)
  }