import React from 'react'
import { Grid } from "@mui/material";
import AdminNavbar from '../../Components/adminpanel/AdminNavbar/Navbar';
import "../../Components/Userdashboard/UserNavbar/userstyle.css"
import "../../App.css"
import { Adminhardwares } from '../../Components/adminpanel/Adminstores/Adminhardware/Adminhardwares';

export const Adminhardware = () => {
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
                    <Adminhardwares />
                  </Grid>
                </Grid>
    </div>
  )
}
