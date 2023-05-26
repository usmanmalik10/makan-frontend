import React from 'react'
import { Storesprof } from '../../Components/Stores/Storescomp/Storesprof';
import { Grid } from "@mui/material";
import StoresNavbar from '../../Components/Stores/StoresNavbar/StoresNavbar';
import "../../Components/Userdashboard/UserNavbar/userstyle.css"
import "../../App.css"

export const Storesprofile = () => {
  return (
    <div className='main-wrapper'>
    <Grid container>
                  <Grid item xs={12} sm={12} md={3} lg={2.7}>
                    <StoresNavbar />
                  </Grid>
                  <Grid
                    item
                    xs={12}
                    sm={12}
                    md={9}
                    lg={9.3}
                    className="right-panel-wrapper"
                  >
                    <Storesprof />
                  </Grid>
                </Grid>
    </div>
  )
}