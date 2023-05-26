import React from 'react'
import { Plotforrent } from '../../Components/Realestatepanel/Forrent/Plotforrent'
import { Grid } from "@mui/material";
import RealStateNavbar from '../../Components/Realestatepanel/Navbar/Navbar';
import "../../Components/Userdashboard/UserNavbar/userstyle.css"
import "../../App.css"

export const PlotforRent = () => {

  return (
    <div className='main-wrapper'>
    <Grid container>
                  <Grid item xs={12} sm={12} md={3} lg={2.7}>
                    <RealStateNavbar />
                  </Grid>
                  <Grid
                    item
                    xs={12}
                    sm={12}
                    md={9}
                    lg={9.3}
                    className="right-panel-wrapper"
                  >
                    <Plotforrent />
                  </Grid>
                </Grid>
    </div>
  )
}
